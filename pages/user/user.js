var app = getApp();
var util = require("../../utils/util.js");
var config = require("../../config.js");

Page({
	data : {
		list : [],
		userHeaderPlain : "User",  //Origination
		hiddenLoading : true,
		// search bar
		searchBarData : {
		  inputShowed : false,
		  inputVal : "",
		  placeHolderTxt : "请输入搜索用户或组织"
		}
	},
	showInput() {
		this.setData({
			searchBarData : {inputShowed : true}
		});
	},
	hideInput() {
		this.setData({
			searchBarData : {
			inputVal : "",
			inputShowed : false
			}
		});
	},
	clearInput() {
		this.setData({
			searchBarData : {inputVal : ""}
		});
	},
	inputTyping(e) {
		this.setData({
			searchBarData : {inputVal : e.detail.value}
		});
	},
	searchInput(e) {
		var inputVal = this.data.searchBarData.inputVal;
		if(!inputVal || inputVal.length <= 0) {
			showToast(this.data.searchBarData.placeHolderTxt + "!");
			return;
		}
		if(inputVal == 'Origination') this.setData({userHeaderPlain : 'User'});
		else if(inputVal == 'User') this.setData({userHeaderPlain : 'Origination'});
		else this.setData({userHeaderPlain : inputVal});   // O: Other
		var me = this;
		me.requestUserDataProxy({
			followersNum : 1000,
			sortType : "followers",
			language : 'javascript'
		});
		this.setData({currPage:1});
	},
	bindViewTap(e) {
		
	},
	toggleUserType(e) {
		var value = e.target.dataset.value;
		this.setData({userHeaderPlain : value});
	},
	toggleLoading : function(hidden) {
		this.setData({hiddenLoading : hidden});
	},
	requestGHUserData(requestData, callback) {
		var type = requestData.type ? requestData.type : (this.data.userHeaderPlain=='User' ? 'type:user' : 'type:org');
		//var starNum = requestData.starNum ? requestData.starNum : 1000;
		//var reposNum = requestData.reposNum ? requestData.reposNum : "";  // 一律使用 >=
		var queryData = type;
		if("language" in requestData) queryData += "+language:" + requestData["language"];
		if("reposNum" in requestData) queryData += "+repos:>=" + requestData["reposNum"];
		if("followersNum" in requestData) queryData += "+followers:>=" + requestData["followersNum"];
		var sortType = requestData.sortType ? requestData.sortType : "stars";
		var orderType = requestData.orderType ? requestData.orderType : "desc";
		var pageIndex = requestData.page ? requestData.page : 1;
		var perPageNum = requestData.perPageNum ? requestData.perPageNum : 10;
		var me = this;
		this.setData({currPage:pageIndex});
		let url = `q=${queryData}&sort=${sortType}&order=${orderType}&page=${pageIndex}&per_page=${perPageNum}`;
		//console.log(url);
		me.toggleLoading(false);
		wx.request({
			url : config.USER_URL + url,
			headers : {
				'Content-Type' : 'application/json'
			},
			success(responseData) {
				if(responseData && responseData.statusCode == 200) {
					var itemDatas = responseData.data;
					itemDatas.totalCount = itemDatas.total_count;
					console.log(itemDatas.items);
					callback && callback(itemDatas);
				}
				me.toggleLoading(true);
				//console.log(responseData);
			}
		})
	},
	requestUserDataProxy(requestData, callback) {
		var me = this;
		me.requestGHUserData(requestData, function(data) {
			//me.setData({list : [{header:"FollowRank(" + data.totalCount + ")"}].concat(data.items)});
			me.setData({list : [{header:"(" + data.totalCount + ")"}].concat(data.items)});
		});
	},
	requestUserDataMoreProxy(requestData, callback) {
		var me = this;
		me.requestGHUserData(requestData, function(data) {
			me.setData({list : me.data.list.concat(data.items)});
		});
	},
	onLoad() {
		var me = this;
		me.requestUserDataProxy({
			followersNum : 1000,
			sortType : "followers",
			language : 'javascript'
		});
	}
});