

/**
 * 
 * JS에서는 프로퍼티를 직접 지정하지 않아도 된다. 그러나 웬만하면 정의를 해주는 것이 좋다. 
 * 
 */


class PersonModel{
    // name;
    // year; 
    

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `이름 : ${this.name}, 연도 : ${this.year}`;
    }
}


const person1 = new PersonModel('Kim',2003);


console.log(person1.sayName());


console.log(typeof PersonModel); // function으로 인식
console.log(typeof person1); // object로 인식


