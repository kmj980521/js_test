/**
 * 
 * Scope
 * 
 * 
 */

var numberOne = 20;

function levelOne(){
    var numberOne = 30;
    console.log(numberOne); // 30 
}
levelOne(); // 3

console.log(numberOne); // 20 


function levelOne(){
    var numberOne = 40;
    function levelTwo(){
        var numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne(); // 99 40 40 출력
 
console.log(numberOne); // 20


/**
 * 
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다. 
 * 
 * 
 * Dynamic Scope
 * : 실행한 위치가 상위 스코프를 정한다. 
 * 
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}
function functionTwo(){
    console.log(numberThree);
}

functionOne(); // 3이 출력이 된다.. 



/**
 *  var 키워드를 사용했을 때, 
 *  스코프가 새로 생기는 경우는, 함수를 선언했을 때이다.
 *  for, if와 같은 statement가 있을 때는 새로운 scope를 만들지 않는다. 
 * 
 *  let, const 키워드를 사용했을 때 
 *  for loop, if, while loop 같은 block level scope를 만들 수 있다.
 */

var i = 999;
for(var i=0 ; i< 10 ; i++){
    console.log(i);
}

console.log(`i in global scope : ${i}`);


i = 999;
// block level scope
for(let i = 0; i< 10 ; i++){
    console.log(i);
}
console.log(`i in global scope2 : ${i}`);

/**
 * 
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 ㅅ스코프를 만들어낸다. 
 * 
 */


