/**
 * Getter and Setter
 * 
 */

class PersonModel{
    name;
    year; 
    

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `이름 : ${this.name}, 연도 : ${this.year}`;
    }
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name} - ${this.year}`;
    }
    set setName(name){
        this.name = name;
    }
}



const person1 = new PersonModel('Kim',2003);
console.log(person1.nameAndYear);

person1.setName = 'Park';

console.log(person1);

console.log('--------------');


// private는 #을 붙여준다.

class PersonModel2{

    #name;
    year;


    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set setName(name){
        this.#name = name;
    }

}

// private 변수는 출력이 되지 않는다. 
const person2 = new PersonModel2('Lee',25);

console.log(person2);

// getter가 호출된다. 
console.log(person2.name);

person2.setName = 'Kikm';

console.log(person2);
