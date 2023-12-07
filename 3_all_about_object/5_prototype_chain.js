/**
 * 
 * Prototype
 * 
 * new 키워드로 함수에 객체를 생성할 때는 실제 함수의 프로토타입 값을 __proto__에 집어넣게 된다. 
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티.
// 상속에서 부모 클래스에 해당되는 값이다. 
// 부모클래스.prototype과 같은 값을 가진다. 
console.log(testObj.__proto__);

function PersonModel(name,year){
    this.name = name;
    this.year = year;
}
// {}
console.log(PersonModel.prototype)

/**
 * 
 <ref *1> {
  [constructor]: [Function: PersonModel] {
    [length]: 2,
    [name]: 'PersonModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}
 * 
 */

console.dir(PersonModel.prototype, {
    showHidden : true,
})


// circular reference : 서로가 서로를 참조하고 있다. 
// true
console.log(PersonModel.prototype.constructor === PersonModel);

// true
console.log(PersonModel.prototype.constructor.prototype === PersonModel.prototype);

const person1 = new PersonModel('Kim',2003);

console.log(person1.__proto__); //{}
console.log(person1.__proto__ === PersonModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true 



console.log(PersonModel.__proto__ === Function.prototype); // true 
console.log(Function.prototype.__proto__ == Object.prototype); // true

console.log(PersonModel.prototype.__proto__ === Object.prototype);

console.log(person1.toString());

console.log(Object.prototype.toString());



function PersonModel2(name,year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const person2 = new PersonModel2('Park',2002);
const person3 = new PersonModel2('Lee',2003);

console.log(person2.sayHello());
console.log(person3.sayHello());

console.log(person2.sayHello === person3.sayHello);

// 특정 인스턴스만의 고유한 프로퍼티인지 확인하는 함수, 
// true -> 고유만의 프로퍼티 
// false -> 상속받은 프로퍼티 
console.log(person2.hasOwnProperty('sayHello'));

function PersonModel3(name, year){
    this.name = name;
    this.year = year;
}

// 일종의 PErsonModel3의 상위인 prototype에 sayHello을 넣기 떄문에, 하위에서는 이 함수를 공유하게끔 할 수 있다. 
PersonModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const person4 = new PersonModel3('H',2001);
const person5 = new PersonModel3('L',2002);

console.log(person4.sayHello());
console.log(person5.sayHello());

console.log(person4.sayHello === person5.sayHello); // true

console.log(person4.hasOwnProperty('sayHello'));


PersonModel3.sayStaticHello = function(){
    return 'static method';
}

console.log(PersonModel3.sayStaticHello());


/**
 * 
 * Overriding
 * 
 */

function PersonModel4(name,year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return 'instance method';
    }

}

// 상위에 직접 값을 지정해도 원래 객체의 선언부에 함수가 있다면, overring이 된다. 
PersonModel4.prototype.sayHello = function(){
    return `prototype method`;
}

const person6 = new PersonModel4('Q',2001);
const person7 = new PersonModel4('E',2000);

// 프로퍼티 셰도잉 - class에서 override
console.log(person6.sayHello());



/**
 * 
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ vs 함수의 prototype 변ㅂ경
 * 
 */

function PersonModel(name, year){
    this.name = name;
    this. year = year;

}

PersonModel.prototype.sayHello = function(){
    return `${this.name} 인사를 합니다.`;
}

function FemalePersonModel(name,year){
    this.name = name; 
    this.year = year;

    this.sing = function(){
        return `${this.name}이 노래합니다`;
    }
}


const p1 = new PersonModel('Park', 2000);
const p2 = new FemalePersonModel('Lee',2001);

console.log(p1.__proto__);
console.log(p1.__proto__ === PersonModel.prototype);
// Object의 __proto__를 가져온다. 
console.log(Object.getPrototypeOf(p1) === PersonModel.prototype);

console.log(p1.sayHello());
console.log(p2.sing());

// error
// console.log(p2.sayHello());

// 프로토타입 체인을 변경 
Object.setPrototypeOf(p2,PersonModel.prototype);

console.log(p2.sayHello());

console.log(p2.constructor === PersonModel); // true. 

console.log(Object.getPrototypeOf(p2) === FemalePersonModel.prototype); // false
console.log(FemalePersonModel.prototype === PersonModel.prototype); // false

// 프로토타입을 할당을 통해 변경했음에도, 비교를 해보면 실제 값은 같게 나온다. 
FemalePersonModel.prototype = PersonModel.prototype;

const p3 = new FemalePersonModel('B', 2000);

console.log(Object.getPrototypeOf(p3) === FemalePersonModel.prototype);
console.log(FemalePersonModel.prototype === PersonModel.prototype); // true

/**
 * 
 * 프로토타입을 직접 할당해서 변경할 경우,
 * new 키워드로 인스턴스를 생성할 때 변경된 프로토타입을 그대로 받기 떄문에, 
 * 3개의 값이 전부 같아진다. 
 * 
 * 하지만, 이미 생성을 한 다음에 한 객체의 프로토타입만 바꿔버리면 객체의 프로토타입만 변경되지,
 * 실제 선언한 객체의 원래 프로토타입은 변경되지 않는다. 
 * 
 */


























