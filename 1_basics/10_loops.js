/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

let square = '';
let side = 6;

for(let i =0; i< side;i++){
    for(j = 0 ; j < side ; j++){
       square +='*';
        
    
    }
    square +='\n';
    
}
console.log(square);

console.log('--------------');

/**
 * for...in
 * 
 * 1) Object에서 사용하면 키 값을 가져올 수 있다. 
 * 2) Array에서 사용시 인덱스를 가져올 수 있다. 
 */

const person = {
    name : 'Kim',
    year : 2003,
}

for(let key in person){
    console.log(person[`${key}`]);
}

const numberArray = [1,2,3,4,5,6,7];

// 인덱스 값을 가지게 된다. 
for(let num in numberArray){
    console.log(num); // 0,1,2.... 인덱스가 출력,,
    console.log(numberArray[`${num}`]);
}

console.log('--------------');

/**
 * for ... of
 * 
 * // 인덱스가 아닌 실제 값을 출력한다. 
 */

for(let value of numberArray){
    console.log(value);
}


console.log('--------------');


/**
 * while
 */

let number = 0 ;

while (number <4) {
    console.log(number);
    number++;
    
}

console.log('--------------');

/**
 * break 
 * continue 는 다른 언어와 마찬가지.
 */