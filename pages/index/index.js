//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    list: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    hiddenLoading : true,
    loading: false,
    plain: false,
    languagePlain : 'J', // 语言是否选中
    currPage : 1,
    // search bar
    inputShowed : false,
    inputVal : ""
  },
  showInput() {
    this.setData({
      inputShowed : true
    });
  },
  hideInput() {
    this.setData({
      inputVal : "",
      inputShowed : false
    });
  },
  clearInput() {
    this.setData({
      inputVal : ""
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal : e.detail.value
    });
  },
  searchInput(e) {
    var inputVal = this.data.inputVal;
    if(!inputVal || inputVal.length <= 0) {
      showToast("请输入搜索语言!");
      return;
    }
    if(/J|javascript/g.test(inputVal)) this.setData({languagePlain : 'J'});
    else if(/H|html/g.test(inputVal)) this.setData({languagePlain : 'H'});
    else if(/C|css/g.test(inputVal)) this.setData({languagePlain : 'C'});
    else this.setData({languagePlain : inputVal});   // O: Other
    this.requestGHData({
      language: inputVal,
      starNum: 10000,
      sortType: 'stars',
      orderType: 'desc',
      page: 1
    });
    this.setData({currPage:1});
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  getCurrLanguage : function(currLanguage) {
    var currLanguage = this.data.languagePlain;
    //console.log(this.languagePlain);
    if(currLanguage === 'J') return 'javascript';
    else if(currLanguage === 'H') return 'html';
    else if(currLanguage === 'C') return 'css';
    else this.data.languagePlain;
  },
  toggleLanguagePlain(e) {
    console.log(arguments);
    var selLanguage = e.currentTarget.dataset.value;
    this.setData({ languagePlain: selLanguage});//btnValue;
    this.requestGHData({
      language: this.getCurrLanguage(selLanguage),
      starNum: 10000,
      sortType: 'stars',
      orderType: 'desc',
      page: 1
    });
  },
  loadMore (e) {
    if(this.data.list.length === 0) return;
    this.requestGHData({
      language: this.getCurrLanguage(),
      starNum: 10000,
      sortType: 'stars',
      orderType: 'desc',
      page: this.data.currPage+1,
      isAdd : true
    });
  },
  loadMore2 (e) {
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({ loading: true })
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
         that.setData({
           loading: false,
           list: that.data.list.concat([{ header: utils.formatDate(date, '-') }]).concat(res.data.stories)
         })
      }
    })
  },
  getNextDate (){
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  decimalDigital(number, decimal) {
    ///console.log(number);
    var numberStr = number + "";
    return parseFloat(numberStr/1000).toFixed(decimal);
  },
  isRequestSuccess : function(response) {
    if(response && response.statusCode === 200) return true;
    return false;
  },
  toggleLoading : function(isHidden) {
    this.setData({hiddenLoading:isHidden});
  },
  requestGHData(queryData, callback) {
    var language = queryData.language ? queryData.language : 'javascript';
    var starNum = queryData.starNum ? queryData.starNum : 1000;
    var sortType = queryData.sortType ? queryData.sortType : "stars";
    var orderType = queryData.orderType ? queryData.orderType : "desc";
    var pageIndex = queryData.page ? queryData.page : 1;
    var perPageNum = queryData.perPageNum ? queryData.perPageNum : 10;
    var isAdd = queryData.isAdd ? queryData.isAdd : false;
    this.setData({currPage:pageIndex});
    let url = `https://api.github.com/search/repositories?q=language:${language}&stars:>=${starNum}&sort=${sortType}&order=${orderType}&page=${pageIndex}&per_page=${perPageNum}`;
    /*let url = "https://api.github.com/search/repositories?";
    url += "q=language:" + language;
    url += "&stars:>=" + starNum;
    url += "&sort=" + sortType;
    url += "&order=" + orderType;
    url += "&page=" + pageIndex;
    url += "&per_page=" + perPageNum;*/
    let that = this;
    that.toggleLoading(false);
    wx.request({
      url : url,
      headers : {
        'Content-Type' : "application/json"
      },
      success(res) {
        if (that.isRequestSuccess(res)) {
          var respData = res.data;
          var totalCount = res.data.total_count;
          var dataItems = res.data.items;
          for (var di = 0, dlen = dataItems.length; di < dlen; di++) {
            dataItems[di].forks_count = that.decimalDigital(dataItems[di].forks_count, 1);
            dataItems[di].stargazers_count = that.decimalDigital(dataItems[di].stargazers_count, 1);
            dataItems[di].watchers_count = that.decimalDigital(dataItems[di].watchers_count, 1);
          }
          that.setData({
            list: isAdd===true ? that.data.list.concat(dataItems) : [{ header: 'TodayRank(' + totalCount + ')' }].concat(dataItems)
          })
        } else {
          wx.showModal({ title: '提示', content: '加载失败!!' });
        }
        that.toggleLoading(true);
        //console.log(res);
      }
    })
  },
  onLoad() {
    this.requestGHData({
      language : 'javascript',
      starNum : 10000,
      sortType : 'stars',
      orderType : 'desc',
      page : 1
    });
  },
  onLoad2 () {
    let that = this
    console.log("onload");
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
         that.setData({
           banner: res.data.top_stories,
           list: [{ header: 'TodayRank' }].concat(res.data.stories)
         })
      }
    })
    this.index = 1
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    
  }
})
