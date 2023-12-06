/**
 * 
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티 
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만, 
 *                     다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 
 *                     ex) getter / setter
 * 
 */

const person1 = {
    name : 'Kim',
    year : 2003,
}



//  { value: 'Kim', writable: true, enumerable: true, configurable: true }
//  
console.log(Object.getOwnPropertyDescriptor(person1, 'year'));

/**
 * 
 * 1) value - 실제 프로퍼티의 값 
 * 2) writable - 값을 수정할 수 있는지 여부. 
 *               false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지의 여부. for...in loop을 사용할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능하다.
 *                   (writable을 true -> false는 가능 / 단 false -> true는 불가능)
 * 
 */


console.log(Object.getOwnPropertyDescriptor(person1, 'name'));

console.log(Object.getOwnPropertyDescriptors(person1));

const person2 = {
    name : 'Park',
    year : 2003,

    // 엑세서 프로퍼티 
    get age(){
        return new Date().getFullYear() - this.year; 
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}


console.log(person2);
console.log(person2.age);

person2.age = 32;
console.log(person2.age);
console.log(person2.year);

console.log('--------------');
/**
 * 
 * {
        get: [Function: get age],
        set: [Function: set age],
        enumerable: true,
        configurable: true
    }   
 * 
 */
console.log(Object.getOwnPropertyDescriptor(person2,'age'));

// 기본적인 방법으로 프로퍼티를 추가하면 true가 되지만,
// 해당 기능을 이용해서 writable, enumerable, configurable를 지정하지 않으면 
// 디폴트 값은 fals로 적용이 된다. 
Object.defineProperty(person2,'height',{
    value : 172,
    writable : true,
    enumerable : true,
    configurable : true,
});

console.log(person2);

person2.height = 180;
console.log(person2); // 변경 ok 

Object.defineProperty(person2, 'height',{
    writable : false,
});

person2.height = 175;
console.log(person2); // 에러는 나지 않지만, 값 변경 x 


console.log('--------------');

/***
 * Enumerable
 * 열거가 가능하게 할 것인가. 
 */

console.log(Object.keys(person2));

for(let key in person2){
    console.log(key);
}

// name 프로퍼티의 열거를 false로 
Object.defineProperty(person2,'name',{
    enumerable:false,
});

// name의 열거가 불가능. 값이 사라진 것은 아니다.
console.log(Object.keys(person2));

console.log('--------------');

/**
 * Configurable
 * 
 * false일 경우 다른 프로퍼티의 변경이 불가능하다. 
 */
Object.defineProperty(person2,'height',{
    writable : true,
    configurable : false,
});

console.log(Object.getOwnPropertyDescriptor(person2,'height'));

// Object.defineProperty(person2,'height',{
//     enumerable : false,
// });

// writable이 true일 경우, configurable이 false 더라도 값 변경이 가능하다. 
Object.defineProperty(person2,'height',{
    value : 172
});

console.log(Object.getOwnPropertyDescriptor(person2,'height'));

Object.defineProperty(person2,'height',{
    writable : false,
});

console.log(Object.getOwnPropertyDescriptor(person2,'height'));


// writable이 true일 때 
Object.defineProperty(person2,'height',{
    writable : true,
});


