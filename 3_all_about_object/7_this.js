/**
 * 
 * this
 * 
 * JS는 Lexical scope를 사용하기 떄문에 함수의 상위 스코프가 
 * 정의 시점에 평가된다. 
 * 
 * ***** this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. 
 * 
 * 가장 상위 레벨 객체의 method로 선언을 하면, this는 자동으로 실행하는 대상 객체로 mapping 되지만, 
 * 그 외의 위치에 함수를 선언하게 되면, 함수의 this는 global object에 mapping된다. 
 * 
 */

const testFunction = function(){
    return this;
}

//console.log(testFunction());
console.log(testFunction() === global); // true  -> this는 global과 mapping 된다 .

const person = {
    name : 'K',
    year : 2001,
    sayHello : function(){
        return `이름 : ${this.name}`;
    }
}

console.log(person.sayHello());


function Person(name,year){
    this.name = name;
    this.year = year; 

    this.sayHello = function(){
        return `이름 : ${this.name}`;
    }
}

const p2 = new Person('Q', 2000);
console.log(p2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `춤 : ${this.name}`;
    }
    
    return dance2();
}

console.log(p2.dance());


/**
 * 
 * this 키워드가 어떤 것을 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출할 때는 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 때는 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 때는 객체를 가리킨다. 
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

console.log(returnName()); // undefined

const p3 = {
    name : 'K',
}

console.log(returnName.call(p3)); // p3의 name 출력 
console.log(returnName.apply(p3)); // p3의 name 출력 

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고 
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다.  
 */

function multiply(x,y,z){
    return `${this.name} / 결과값 : ${x*y*z}`;
}

console.log(multiply.call(p3,3,4,5,));

console.log(multiply.apply(p3,[3,4,5]));

/**
 * bind() 
 * 바인딩 해놓고 나중에 사용
 * 바인드가 된 함수를 반환한다. 
 */
const laterFunc = multiply.bind(p3, 3,4,5);
console.log(laterFunc);

console.log(laterFunc());

















