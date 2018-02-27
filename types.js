var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//https://davidcai1993.gitbooks.io/typescript-handbook/content/Generics.html
/**
 * 1.临时变量,
 * 2.get/set 特性
 * 3. static
 * 4. 原型链属性extends
 */
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + "_" + middleName + "_" + lastName;
    }
    return Student;
}());
var Lucy = (function (_super) {
    __extends(Lucy, _super);
    function Lucy() {
        _super.apply(this, arguments);
    }
    Lucy.prototype.say = function () {
        console.log("earth language is english!");
    };
    return Lucy;
}(Student));
function greeter(person) {
    console.log(person);
    return person;
}
var stu = new Student("M", "icheal", "Jason");
var tname = "fname";
var combo_name = "this is name " + tname;
var count = 12;
var things = [1, 2, 3];
var list = ["1", "2", 3 + ""];
//greeter({firstName:'first',lastName:'last'});
greeter(stu);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var ColorNum;
(function (ColorNum) {
    ColorNum[ColorNum["Red"] = 1] = "Red";
    ColorNum[ColorNum["Green"] = 2] = "Green";
    ColorNum[ColorNum["Blue"] = 4] = "Blue";
})(ColorNum || (ColorNum = {}));
;
var c = Color.Blue;
var cn = ColorNum[4];
console.log(cn);
var anyVal = 4;
anyVal = 'any value';
anyVal = Color.Red;
var someValue = "this is a string!";
// 类型断言1 (类似于类型转换)
var valLen = someValue.length;
// 类型断言2 (类似于类型转换)
var valueLength = someValue.length;
function sumMatrix(maxtrix) {
    var sum = 0;
    for (var i = 0; i < maxtrix.length; i++) {
        var currRow = maxtrix[i];
        for (var i_1 = 0; i_1 < currRow.length; i_1++) {
            sum += currRow[i_1];
        }
    }
    return sum;
}
function timeoutCalc() {
    var _loop_1 = function(i) {
        setTimeout(function () { console.log(i); }, i * 10);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
}
//timeoutCalc();
var inputValue = [3, 4];
var arrayValue = [1, 2];
var firstArrVal = arrayValue[0], secondArrVal = arrayValue[1];
console.log(firstArrVal, secondArrVal);
// 交换变量值
_b = [secondArrVal, firstArrVal], firstArrVal = _b[0], secondArrVal = _b[1];
console.log(firstArrVal, secondArrVal);
// 函数传参
function funcArrValue(_b) {
    var firstVal = _b[0], secondVal = _b[1];
    var _a = [5, 6];
    console.log(firstVal, secondVal);
}
funcArrValue([5, 9]);
var _c = [1, 2, 3, 4], firstRestVal = _c[0], restVal = _c.slice(1);
console.log(firstRestVal, restVal);
var ignoreOtherVal = [1, 2, 3, 4][0]; // ignoreOtherVal=1;
var _d = [5, 6, 7, 8], arrSecond = _d[1], arrFourth = _d[3]; // arrSecond=5,arrFourth=8
var objVal = {
    a: "about",
    b: 12,
    c: "name"
};
// 声明式赋值
var a = objVal.a, b = objVal.b;
//let {b, ...objOther} = objVal;  // b = objVal.b, objOther={a:'about',c'name'};
// 非声明式赋值(需要加括号,javascript会把{}解析成块作用域)
(_e = { test: 'test', test2: 'test2' }, test = _e.test, test2 = _e.test2, _e); // 
// 为变量指定类型
var _f = { varA: 'variableA', varB: 123 }, varA = _f.varA, varB = _f.varB;
// 必须要传具有a一个属性的对像(b属性为可选)，要不然编译到javascript会报错
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _b = wholeObject.b, b = _b === void 0 ? 1001 : _b;
    console.log(wholeObject);
}
keepWholeObject({ a: '---' });
// 必须要传具有a,b两个属性的对像，要不然编译到javascript会报错
function keepWholeObject2(wholeObject) {
    console.log(wholeObject);
}
keepWholeObject2({ a: 'aaa', b: 111 });
function keepWholeObject3(_b) {
    var _c = _b === void 0 ? { a: 'aaa', b: 'bbb' } : _b, a = _c.a, b = _c.b;
    console.log(a, b);
}
/*
// 错误例子
function keepWholeObject4({a,b} = {a:"0"}) {
    console.log(a,b);
}
*/
function keepWholeObject5(_b) {
    var _c = _b === void 0 ? { a: "111" } : _b, a = _c.a, _d = _c.b, b = _d === void 0 ? 10 : _d;
    console.log(a, b);
}
function keepWholeObject6(_b) {
    var _c = _b === void 0 ? { a: "111", b: 5 } : _b, a = _c.a, _d = _c.b, b = _d === void 0 ? 10 : _d;
    console.log(a, b);
}
keepWholeObject6();
var searchUFunc;
searchUFunc = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var NumberArray = (function () {
    function NumberArray(h, m) {
    }
    return NumberArray;
}());
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]);
var Animal = (function () {
    function Animal(theName, theSex, age) {
        if (theSex === void 0) { theSex = 'male'; }
        if (age === void 0) { age = 10; }
        this.age = age;
        this.sex = theSex;
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + "(" + this.sex + ") moved " + meters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python!");
var tom = new Horse("Tommy the Palomino!");
sam.move();
tom.move(34);
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
        this._fullName = "_fn";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode")
                this._fullName = newName;
            else
                console.log("Error: Unauthorized update of employee.");
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
//employee.fullName = "Bob Smith!";
console.log(employee.fullName);
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
console.log(Grid.origin);
var employeeMaker = Grid;
var validators = {};
console.log(validators);
/*myArray.forEach(s => {
    console.log(s);
});*/
var suits = ["hearts", "spades", "clubs", "diamonds"];
// ts 函数重载
function pickCard(x) {
    var pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
}
function pickCard(x) {
    var pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
}
// 泛型(重温)
function identity(arg) {
    return arg;
}
// first
var output = identity("MyString");
// second
//output = identity("my_content");   // 类型参数推导
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 或者
function loggingIdentity2(arg) {
    return arg;
}
// 1
var myIndentity = identity;
// 2
var myIndentity2 = identity;
// 3
var myIndentity3 = identity;
// 泛型类
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// one
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// two
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
var myInIdentity = identity;
var myInIdentity2 = identity;
// 限制泛型，只能传带有 .length属性的参数
function loggingIdentity4(arg) {
    return arg;
}
function find(n, s) {
}
// 混合(重温)
/**
 * runtime library
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = (function () {
    function SmartObject() {
        var _this = this;
        // Disposable
        this.isDisposed = false;
        // Activate
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
var box = { height: 5, width: 6, scale: 10 };
// 类型兼容性
// 函数参数兼容
var compatible = function (a) { return 0; };
var compatible2 = function (b, s) { return 0; };
var compatible3 = function (s, d) { return 0; };
// compatible参数与compatible按顺序完整匹配,a与b的类型相同且必须相同
compatible2 = compatible; // OK, 
//compatible3 = compatible;   // error
//compatible = compatible2;   // error
// 函数返回值兼容，源函数(赋值左边)的返回值是目标函数(赋值右边)的返回值的子集。
var funcX = function () { return ({ name: 'Alice' }); };
var funcY = function () { return ({ name: 'Alice', location: 'Seattle' }); };
funcX = funcY;
// funcY = funcX;
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var statusVal = Status.Ready;
statusVal = Color.Red; // error
var _b, _e;
//# sourceMappingURL=types.js.map