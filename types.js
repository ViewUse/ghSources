var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * 1.临时变量,
 * 2.get/set 特性
 * 3. static
 * 4. 原型链属性extends
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + "_" + middleName + "_" + lastName;
    }
    return Student;
}());
var Lucy = /** @class */ (function (_super) {
    __extends(Lucy, _super);
    function Lucy() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    var _loop_1 = function (i) {
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
funcArrValue(inputValue);
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
var b = objVal.b, objOther = __rest(objVal, ["b"]); // b = objVal.b, objOther={a:'about',c'name'};
// 非声明式赋值(需要加括号,javascript会把{}解析成块作用域)
(_e = { test: 'test', test2: 'test2' }, test = _e.test, test2 = _e.test2); // 
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
var NumberArray = /** @class */ (function () {
    function NumberArray(h, m) {
    }
    return NumberArray;
}());
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]);
var Animal = /** @class */ (function () {
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
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
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
var Employee = /** @class */ (function () {
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
var Grid = /** @class */ (function () {
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
myArray.forEach(function (s) {
    console.log(s);
});
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    var pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
}
function pickCard(x) {
    var pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
}
var _b, _e;
//# sourceMappingURL=types.js.map