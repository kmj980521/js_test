/**
 * Hoisting 
 * : 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log('Hello');
console.log('World');
console.log('---------------');

// console.log(name);
// var name = '마이 네임';
// console.log(name);

/**
 * let과 const 또한 Hoisting이 된다.
 * 단, let은 상단에 사용하려고 하면, initial이 없을 때는 사용하지 못한다는 에러가 발생한다.
 * 에러를 발생시켜 오작동을 방지할 수 있다.
 * 
 */
console.log(name);
//let name='네임';



