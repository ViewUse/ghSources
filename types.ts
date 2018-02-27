//https://davidcai1993.gitbooks.io/typescript-handbook/content/Generics.html
/**
 * 1.临时变量,
 * 2.get/set 特性
 * 3. static
 * 4. 原型链属性extends
 */
class Student {
    fullName : string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + "_" + middleName + "_" + lastName;
    }
}

class Lucy extends Student {
    say() {
        console.log("earth language is english!");
    }
}
interface Person {
    firstName : string;
    lastName : string;
}

interface SearchFunc {
    (source : string, subString : string) : boolean;
}

function greeter(person : Person) : Person {
    console.log(person);
    return person;
}

let stu = new Student("M", "icheal", "Jason");
let tname : string = `fname`;
let combo_name : string = `this is name ${ tname }`;
let count : number = 12;
let things : number[] = [1,2,3];
let list : Array<string> = ["1", "2", 3+""];
//greeter({firstName:'first',lastName:'last'});
greeter(stu);

enum Color {Red, Green, Blue};
enum ColorNum {Red=1,Green=2,Blue=4};
let c : Color = Color.Blue;
let cn : string = ColorNum[4];
console.log(cn);
let anyVal : any = 4;
anyVal = 'any value';
anyVal = Color.Red;
let someValue : string = "this is a string!";
// 类型断言1 (类似于类型转换)
let valLen : number = (<string>someValue).length;
// 类型断言2 (类似于类型转换)
let valueLength : number = (someValue as string).length;

function sumMatrix(maxtrix : number[][]) {
    let sum = 0;
    for(let i=0;i<maxtrix.length;i++) {
        let currRow = maxtrix[i];
        for(let i=0;i<currRow.length;i++) {
            sum += currRow[i];
        }
    }
    return sum;
}
function timeoutCalc() {
    for(let i=0;i<10;i++) {
        setTimeout(function() {console.log(i)}, i*10);
    }
}
//timeoutCalc();
let inputValue = [3,4];
let arrayValue : Array<number> = [1,2];
let [firstArrVal, secondArrVal] = arrayValue;
console.log(firstArrVal, secondArrVal);
// 交换变量值
[firstArrVal, secondArrVal] = [secondArrVal, firstArrVal];
console.log(firstArrVal, secondArrVal);
// 函数传参
function funcArrValue([firstVal,secondVal] : [number, number]) {
    var _a = [5, 6];
    console.log(firstVal, secondVal);
}
funcArrValue([5,9]);
let [firstRestVal, ...restVal] = [1,2,3,4];
console.log(firstRestVal, restVal);

let [ignoreOtherVal] = [1,2,3,4];  // ignoreOtherVal=1;
let [,arrSecond,,arrFourth] = [5,6,7,8]; // arrSecond=5,arrFourth=8

let objVal = {
    a : "about",
    b : 12,
    c : "name"
};
// 声明式赋值
let {a, b} = objVal;
//let {b, ...objOther} = objVal;  // b = objVal.b, objOther={a:'about',c'name'};
// 非声明式赋值(需要加括号,javascript会把{}解析成块作用域)
({test,test2} = {test:'test',test2:'test2'});  // 
// 为变量指定类型
let {varA,varB} : {varA:string, varB:number} = {varA:'variableA',varB:123};

// 必须要传具有a一个属性的对像(b属性为可选)，要不然编译到javascript会报错
function keepWholeObject(wholeObject : {a : string, b?:number}) {
    let {a,b=1001} = wholeObject;
    console.log(wholeObject);
}
keepWholeObject({a:'---'});
// 必须要传具有a,b两个属性的对像，要不然编译到javascript会报错
function keepWholeObject2(wholeObject : {a:string, b:number}) {
    console.log(wholeObject);
}
keepWholeObject2({a:'aaa',b:111});

function keepWholeObject3({a,b}={a:'aaa',b:'bbb'}) {
    console.log(a,b);
}

/*
// 错误例子
function keepWholeObject4({a,b} = {a:"0"}) {
    console.log(a,b);
}
*/

function keepWholeObject5({a,b=10}={a:"111"}) {
    console.log(a, b);
}

function keepWholeObject6({a,b=10}={a:"111",b:5}) { // b的最终值为 5
    console.log(a, b);
}
keepWholeObject6();

let searchUFunc : SearchFunc;
searchUFunc = function(source:string,subString : string) : boolean {
    let result = source.search(subString);
    return result > -1;
}
interface StringArray {
    [index : number] : string;
}
interface ArrayAbstract {
    currentTime : Date;
}
class NumberArray implements ArrayAbstract {
    currentTime: Date;
    constructor(h:number, m:number) {}
}
let myArray : StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]);

class Animal {
    private sex : string;
    name : string;
    constructor(theName : string, theSex : string='male', private age : number=10) {
        this.sex = theSex;
        this.name = theName;
    }
    move(meters : number = 0) {
        console.log(this.name + "(" + this.sex + ") moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name : string) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
}
class Horse extends Animal {
    constructor(name : string) {
        super(name);
    }
    move(meters = 45) {
        console.log("Galloping...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the Python!");
var tom : Animal = new Horse("Tommy the Palomino!");

sam.move();
tom.move(34);

var passcode = "secret passcode";
class Employee {
    private _fullName : string= "_fn";
    get fullName() : string {
        return this._fullName;
    }
    set fullName(newName:string) {
        if(passcode && passcode == "secret passcode")
            this._fullName = newName;
        else console.log("Error: Unauthorized update of employee.");
    }
}

let employee = new Employee();
//employee.fullName = "Bob Smith!";
console.log(employee.fullName);

class Grid {
    static origin = {x : 0, y : 0};
    calculateDistanceFromOrigin(point:{x:number,y:number}) {
       let xDist = (point.x - Grid.origin.x);
       let yDist = (point.y - Grid.origin.y);
       return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
    }
    constructor(public scale : number) {}
}

var grid1 = new Grid(1.0);
console.log(Grid.origin);
let employeeMaker : typeof Grid = Grid;

let validators : {[s:string] : string} = {};
console.log(validators);
/*myArray.forEach(s => {
    console.log(s);
});*/
var suits = ["hearts","spades","clubs","diamonds"];
// ts 函数重载
function pickCard(x:{suit:string;card:number;}[]):number {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
}
function pickCard(x:number) : {suit:string;card:number;} {
    let pickedSuit = Math.floor(x / 13);
    return {suit:suits[pickedSuit], card : x%13};
}

// 泛型(重温)
function identity<T>(arg : T) : T {
    return arg;
}
// first
var output = identity<string>("MyString");
// second
//output = identity("my_content");   // 类型参数推导

function loggingIdentity<T>(arg: T[]) : T[] {
    console.log(arg.length);
    return arg;
}
// 或者
function loggingIdentity2<T>(arg: Array<T>) : Array<T> {
    return arg;
}
// 1
var myIndentity : <T>(arg:T)=>T = identity;
// 2
var myIndentity2 : <U>(arg:U)=>U = identity;
// 3
var myIndentity3 : {<T>(arg: T): T} = identity;

// 泛型类
class GenericNumber<T> {
    zeroValue : T;
    add : (x:T, y:T) => T;
}
// one
var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {return x+y;};
// two
var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) {return x+y;};

// 泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
var myInIdentity : GenericIdentityFn = identity;
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
var myInIdentity2 : GenericIdentityFn2<number> = identity;

interface Lengthwise {
    length : number;
}
// 限制泛型，只能传带有 .length属性的参数
function loggingIdentity4<T extends Lengthwise>(arg: T): T {
   return arg;
}
interface Findable<T> {
    value : T;
}
function find<T>(n: T, s: Findable<T>) {

}

// 混合(重温)
/**
 * runtime library
 */
function applyMixins(derivedCtor:any, baseCtors:any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=> {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
class Disposable { // Disposable Mixin
    isDisposed : boolean;
    dispose() {
        this.isDisposed = true;
    }
}
class Activatable {  // Activatable Mixin
    isActive : boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(()=> console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }

    // Disposable
    isDisposed: boolean = false;
    dispose : ()=>void;
    // Activate
    isActive: boolean = false;
    activate: ()=>void;
    deactivate: ()=>void;
}

applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
//setTimeout(() => smartObj.interact(), 1000);

interface Box {
    height : number;
    width : number;
}
interface Box {
    width : number;
    scale : number;
}
var box : Box = {height:5,width:6,scale:10};

// 类型兼容性
// 函数参数兼容
var compatible = (a:number) => 0;
var compatible2 = (b:number, s:string) => 0;
var compatible3 = (s:string, d:number) => 0;
// compatible参数与compatible按顺序完整匹配,a与b的类型相同且必须相同
compatible2 = compatible;   // OK, 
//compatible3 = compatible;   // error
//compatible = compatible2;   // error

// 函数返回值兼容，源函数(赋值左边)的返回值是目标函数(赋值右边)的返回值的子集。
var funcX = () => ({name: 'Alice'});
var funcY = () => ({name: 'Alice', location: 'Seattle'});
funcX = funcY;
// funcY = funcX;

enum Status {Ready, Waiting};
let statusVal = Status.Ready;
statusVal = Color.Red; // error