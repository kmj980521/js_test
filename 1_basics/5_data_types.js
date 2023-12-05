/**
 * Data Types
 * 
 *  여섯개의 Primitive Type. 
 *  1) Number (숫자)
 *  2) String (문자열)
 *  3) Boolean (참/거짓)
 *  4) undefined (정의가 되지 않은 변수 타입)
 *  5) null 
 *  6) Symbol (심볼)
 * 
 *  한개의 오브젝트 타입.
 *  7) Object (객체)
 *     Function
 *     Array
 *     Object
 */

// 1) Number
const age = 26;
const tempature = -10;
const pi = 3.14;
console.log(typeof(age));
console.log(typeof(tempature));
console.log(typeof(pi));
console.log('----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);

console.log('----------------');

// 2) String
const myName = '마이 네임';
console.log(myName);

const innerCase1 = '"마"이 네임';
console.log(innerCase1);

const innerCase2 = "'마'이 네임";
console.log(innerCase2);

/**
 * Template Literal -> tab위의 키  `` 로 감싸서 사용
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백스래시를 스트링으로 표현하고 싶다면 두번 입력. \\ 
 */

const smallQutoation = '마이 \' 네임';
console.log(smallQutoation);

const myNameTest  = `마이 네임 
테스트
`;
console.log(myNameTest);
console.log(typeof myNameTest);

const groupName = '그룹1';
console.log(groupName + ' 그룹2');
console.log(`${groupName}`);

console.log('----------------');

// 3) Boolean 타입

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);


console.log('----------------');

// 4) undefined
// 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값. 

let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log('----------------');

// 5) null 타입 
// undefined와 마찬가지로 값이 없다는 뜻이나, 
// 개발자가 명시적으로 없는 값으로 초기화할 때 사용한다. 

let init = null;
console.log(init);
console.log(typeof init); // object

console.log('----------------');

// 6) symbol 타입
// 유일무이한 값을 생성할 때 사용한다.
// 다른 primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다. 

// 표기되는 값은 같더라도 실제 값은 다르게 나온다. 

const test1 = '1';
const test2 = '1';

console.log(test1 == test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1==symbol2);

console.log('----------------');


// 7) Object 타입 

// Map  key : value

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색',
}

console.log(dictionary);
console.log(dictionary['red']);

console.log(typeof dictionary);

// Array 타입 

const colorArray = [
    '빨강',
    '노랑',
    '초록'
];
console.log(colorArray);
console.log(typeof colorArray);

/**
 * static typing -> 변수를 선엏라 때 어떤 타입의 변수를 선어할지 명시를 한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론"한다.
 */