/**
 * Closure
 * 
 * A closure is the combination of a functio nand the lexical 
 * environment within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다. "
 * 
 * "상위 함수보다 하위함수가 더 오래 살아있는 경우를 closure라고 한다."
 * 
 * 
 */

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber());

function getNumber(){
    var number= 5;
     
    function innerGetNumber(){
        return number; 
    }

    return innerGetNumber;
}


const runner = getNumber();

// 이미 getNumber()가 사라진 이후에 호출
console.log(runner());


/**
 * 1) 데이터 캐싱 
 */
function cacheFunction(newNumb){
    // 아래 계산이 매우 오래걸린다는 가정.
    var number = 10 * 10;
    function innerCacheFunction(newNumb){
        return number * newNumb;
    }
    return innerCacheFunction
}

// 오래 걸리고 복잡한 값을 한번만 계산하고 inner에서 값을 가지고 계산해서 데이터를 캐싱한다. 
const runner2 = cacheFunction();
console.log(runner2(10));


/**
 * 2) 반복적으로 특정값을 변경할 떄 사용 
 */


function cacheFunction2(){
    var number= 99;
    function increment(){
        number ++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100 
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3()); // 103
console.log(runner3()); // 104


/**
 * 3) 정보 은닉
 */
function Person(name,year){
    this.name = name;
    
    var _year = year; 

    this.sayNameAndYear = function(){
        return `이름 ${this.name}, 연도 : ${_year}`;
    }
}
const p1 = new Person('K',2001);
console.log(p1.sayNameAndYear());
console.log(p1.name);
console.log(p1._year); // this로 저장하지 않았기 때문에 객체의 프로퍼티로 접근할 수 없다. 
