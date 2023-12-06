/**
 * 
 *  copy by value
 *  : 값에 의한 전달
 * 
 *  copy by reference
 *  : 참조에 의한 전달
 * 
 * 
 *  1) 기본적으로 모든 Primitive 값은 copy by value이다.
 *  2) 객체는 copy by reference이다. 
 */

let original = '안녕하세요';

let clone = original;

console.log(original);
console.log(clone);

console.log('--------------');

clone += ' 안녕하세요';

console.log(original);
console.log(clone);

console.log('--------------');

let originalObj = {
    name: 'kim',
    group : 'Korea',
}

let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);


console.log('--------------');

originalObj['group'] = 'UK';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj===cloneObj); // true
console.log('--------------');

const p1 = {
    name: 'Kim',
    age : 25
}

const p2 = p1; 
const p3 = {
    name: 'Kim',
    age : 25
}

console.log(p1 === p2);
console.log(p1===p3);

console.log(p2 === p3);

console.log('--------------');

// Sperad Operator를 해도 Copy by Value이다.
const p4 = {
    ...p3
}
console.log(p3===p4);

console.log('--------------');

/**
 * 
 * Sperad Operator 사용해서 겹치는 키값이 존재할 때는 뒤에 있는 값을 실제로 가진다. 
 * 
 * 순서가 중요하다!
 * 
 */

const p5 = {
    
    name : 'Park',
    ... p2,
     
}

console.log(p5);
