/**
 * 
 * Object 객체 
 *
 */


let person1 = {
    name : 'Kim',
    age : 23,
    walk : function(){
        return `${this.name} 산책 시작`;
    }
}


console.log(person1);
console.log(person1.name);
console.log(person1['name']);

const key = 'name';

console.log(person1[key]);
console.log(person1.walk());

console.log('--------------');


const nameKey = 'name';
const nameValue = 'Park';

const ageKey = 'age';
const ageValue = 26;

const person2 = {
    [nameKey] : nameValue,
    [ageKey] : ageValue,
}

console.log(person2);

console.log('--------------');

person2['age'] = 35;
console.log(person2);


person2['koreanName'] = '김';

console.log(person2);


delete person2['koreanName'];

console.log(person2);


/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

/**
 * 모든 키값 가져오기
 */

console.log(Object.keys(person2));

// 모든 밸류값 가져오기 
console.log(Object.values(person2));


const name = 'Park';

// 키 값과 밸류값의 변수명이 같으면 하나만 작성해줘도 된다.
const person3 = {
    // name : name,
    name,
}


console.log(person3);
