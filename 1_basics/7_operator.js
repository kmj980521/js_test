/**
 * Operators
 * 연산자
 */


/**
 * 1) 산술 연산자
 * 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지
 * 
 * */

console.log(10 + 10);
console.log(10 - 10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

console.log('--------------');

console.log(10 * (10+10));

/**
 * 증감 연산자
 */

let number = 1;
number ++;
console.log(number); // 2
console.log(++number); // 3

let result  = number --;
console.log(result, number); // 3, 2


/**
 * 숫자 타입이 아닌 타입에 +, - 를 사용하면? 
 * 
 * 숫자로 변형될 수 있는 string 앞에는 +를 붙인다. 
 */

let sample = '99';
console.log(+sample); // 숫자 99 
console.log(typeof +sample); // number

console.log(sample);
console.log(typeof sample); // string


sample = true;
console.log(+sample); // 1 
console.log(typeof +sample)

sample = '네임';
console.log(+sample); // NaN -> Not a Number


sample = '99';
console.log(-sample); // 숫자 -99 
console.log(typeof -sample); // number

console.log('--------------');


/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number); // 100

number += 10; 
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10; 
console.log(number); // 100

number %= 10;
console.log(number); //0

console.log('--------------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 '=='
 * 2) 값과 타입의 비교  '==='
 */

// 1) 단순한 값의 비교 
console.log(5==5);   // true
console.log(5=='5'); // true
console.log(0 ==''); // true
console.log(true == 1); // true
console.log(false == 0); // true 
console.log(true=='1'); // true

// 2) 값과 타입까지 비교하는 연산자 
console.log(5===5);  // true
console.log(5==='5'); // false

console.log('--------------');

// 타입을 비교하지 않음
console.log(5!=5);   // true
console.log(5!='5'); // true
console.log(0 !=''); // true
console.log(true != 1); // true
console.log(false != 0); // true 
console.log(true!='1'); // true

console.log('-----타입 비교 포함---------');

// 타입까지 고려함
console.log(5!==5);   // true
console.log(5!=='5'); // true
console.log(0 !==''); // true
console.log(true !== 1); // true
console.log(false !== 0); // true 
console.log(true!=='1'); // true

console.log('--------------');

/**
 * 대소 관계 비교 연산자 
 */


console.log(100>1);
console.log(100<1);
console.log(100<=1);
console.log(100>=1);


/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log('--------------');

console.log(100>1 ? '참' : '거짓');


console.log('--------------');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

console.log(true && true); // true 
console.log(true && false); //false
console.log(true || false); // true

console.log('--------------');
/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환 
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환 
 * 
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true||'네임'); // true
console.log(false||'네임'); // 네임

console.log(false && '네임'); // false
console.log(true && '네임'); // 네임

console.log(true && false && '네임'); // false

console.log('--------------');

/**
 * 지수 연산자
 */
console.log(2**2); // 2^2
console.log(10**3); // 10^3 = 1000

/**
 * null 연산자
 */

let name;
name = name?? '마이네임이야';
console.log(name);

name = name?? '널이야?'; // 위에서 할당을 했기 때문에 기존값을 그대로 가져간다.

let name2;
name2 ??= '네임 테스트'; 
console.log(name2); // 네임 테스트

