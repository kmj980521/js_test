/**
 * 
 * Using function to create objects
 * // new 키워드는 일반 함수에서만 사용이 가능하다
 * // 즉, Arrow 함수에서는 불가능하다. 
 */

function PersonModel(name, year){
    // new 키워드를 사용하지 않았으면 undefined를 반환하게 된다.
    // console.log(new.target);

    if(!new.target){
        return new PersonModel(name,year);
    }

    this.name = name;
    this.year = year;

    // return {}; Object를 반환하려고 하면 반환하는 object만을 반환한다.
    // 

    this.walk = function(){
        return `${this.name}이 산책을 합니다`;
    }
}

const person1 = new PersonModel('Park',2003);

console.log(person1);
// console.log(person1.walk());

// new를 사용하지 않으면 global로 붙게 된다. 
const person2 = PersonModel('Kim', 2001);

// undefined
console.log(person2);

// console.log(global.name);

const PersonModelArrow = (name, year) => {
    this.name = name;
    this.year = year; 
}

// new 키워드는 일반 함수에서만 사용이 가능하다
// 즉, Arrow 함수에서는 불가능하다. 

const person4 = new PersonModelArrow('Park',2001);

