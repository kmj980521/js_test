/**
 * 
 * Immutable Object
 * 
 */


const person = {
    name : 'Kim',
    year : 2002,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age; 
    }
}


/**
 * Extensible 
 * -> 확장이 가능한지 설정
 * 
 * -> 프로퍼티가 삭제는 되지만, 확장은 되지 않는다. 
 * + 확장하려고 할 때 에러는 없지만, 실제로 작동하지는 않는다. 
 * 상위 Object에 적용해도 하위 Object에는 적용이 되지 않는다.
 */

console.log(Object.isExtensible(person));

person['height'] = 173;

Object.preventExtensions(person);


console.log(Object.isExtensible(person));

// 에러는 발생하지 않지만, 실제로 작동하지는 않는다.
person['height2'] = 173;

console.log(person);

// 삭제는 된다. 
delete person['height']; 
console.log(person);

console.log('--------------');


/**
 *  Seal
 * 
 *  -> 값을 추가하지 못하게 방지할 수 있다. 
 *  -> 값을 삭제하지 못하게 방지할 수 있다.
 * 
 *  configurable을 false로 해주는 작업과 동일하다. 
 *  프로퍼티 애트리뷰트 또한 설정이 가능하다.
 *  상위 Object에 적용해도 하위 Object에는 적용이 되지 않는다.
 * 
 */

const person2 = {
    name : 'Park',
    year : 2003,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age; 
    }
}

console.log(Object.isSealed(person2));

Object.seal(person2);

console.log(Object.isSealed(person2));

person2['height'] = 173;

console.log(person2);

delete person2['year'];
console.log(person2);



Object.defineProperty(person2,'name',{
    value : 'Lee',
});

console.log(Object.getOwnPropertyDescriptor(person2,'name'));


console.log('--------------');


/**
 * 
 * Freezed 
 * 
 * 읽기 외의 모든 기능을 불가능하게 만든다. 
 * // enumerable을 제외하고 writable과 configurable은 false로 지정된다.
 * 
 * 상위 Object에 적용해도 하위 Object에는 적용이 되지 않는다.
 * 
 */

const person3 = {
    name : 'Lee',
    year : 2003,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age; 
    }
}

console.log(Object.isFrozen(person3));
Object.freeze(person3);

// true
console.log(Object.isFrozen(person3));


delete person3['name'];
console.log(person3);  // 삭제되지 않음 


// 프로퍼티를 변경할 수 없다는 에러가 발생. 
// Object.defineProperty(person3,'name',{
//     value : 'Park'
// });

// enumerable을 제외하고 writable과 configurable은 false로 지정된다. 
console.log(Object.getOwnPropertyDescriptor(person3,'name'));


const person4 = {
    name : 'Park',
    year : 2003,
    person5  : {
        name : 'Lee',
        year : 2002,
    }
}


Object.freeze(person4);

console.log(Object.isFrozen(person4));

console.log(Object.isFrozen(person4['person5']));



