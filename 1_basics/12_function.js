function calculate(){
    console.log((2*10 / 2% 3).toString());
}

//calculate();

// parameter
function calculate(number){
    console.log((number*10 / 2% 3).toString());

}

// agrument
calculate(4);

function multiply(x,y){
    console.log(x * y);
}

multiply(3,5);

function multiply(x,y=10){
    console.log(x * y);
}
multiply(2,4);
multiply(2)

console.log('--------------');

function multiply(x,y){
    return x*y;
}

const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(4,5);
console.log(result2);

/**
 * Arrow 함수 
 */

const multiply2 = (x,y) => {
   return x*y;
}

const result3 = multiply2(3,4);
console.log(result3);

const multiply3 = (x,y) => x*y;

console.log(multiply3(4,5));

const multiply4 = x => y => z=> `x: ${x} y: ${y} z:${z}`;
console.log(multiply4(2)(5)(6));

const multiplyTwo = function(x,y){
    return x * y;

}

console.log(multiplyTwo(4,5));

console.log('--------------');

const multiplyThree = function(x,y,z){
    console.log(arguments['0']);
    return x * y * z;
}
multiplyThree(1,2,3);

// 파라미터에 제한을 두지 않고 다양하게 받음
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b) => a *b, 1);
}

const result4 = multiplyAll(3,4,5,1);
console.log(result4);

// immediately invoked function
// 즉시 실행 함수 
// 괄호로 감싸준 후 괄호에 파라미터를 넘겨주면 즉시 실행할 수 있다. 
(function(x,y){
    console.log(x * y);
})(2,4)


console.log(typeof multiply );
console.log(multiply instanceof Object);


