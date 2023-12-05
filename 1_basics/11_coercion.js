/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적 
 * 2) 암묵적
 */


let age = 32;

// 명시적 
let stringAge = age.toString();

console.log(stringAge);
console.log(typeof stringAge);

// 숫자 + 글자 = 글자가 됨. 
let test = age + '';
console.log(typeof test, test);

console.log('98'+2); // 982

// string에는 곱한다는 기능이 없기 때문에, 암묵적으로 숫자로 변환
console.log('98'*2); // 192 
// string에는 마이너스 기능이 없기 때문에, 암묵적으로 숫자로 변환
console.log('98'-2); // 96

console.log('--------------');

/**
 * 명시적 변환
 */
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로의 변환
console.log(typeof parseInt('0'), parseInt('0')); // number 0 
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0 
console.log(typeof +'1', +'1');

console.log('--------------');

/**
 * Boolean 타입으로의 변환
 * 
 * 1) !는 false 
 * 2) !! true 
 * 
 * String 안에 값이 들어있으면 boolean 기준으로 true이다.
 * 실제 값이 있는 경우엔 true를 반환한다.
 */

console.log(!!'x'); // true

console.log(!!'');  // false

console.log(!!0);  // false

console.log(!!'0'); // true

console.log(!!false); // false 

console.log(!!undefined); // false

console.log(!!null); // false

// Object는 반드시 true
console.log(!!{}); 
console.log(!![]); 

/**
 * 1) 아무 글자도 없는 String => 모두 false를 반환
 * 2) 값이 없는 경우. ex) '', undefined, null => false를 반환
 * 3) 0 => false를 반환
 * 
 * 4) Object는 반드시 true를 반환.
 */