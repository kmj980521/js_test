
/**
 * 
 * Super and Override
 * 
 */


class PersonModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year; 
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다`;
    }
}


class FemaleModel extends PersonModel{
    age;

    constructor(name,year,age){
        super(name,year);
        this.age = age;
    }
    sayHello(){
        
        return `${super.sayHello()}, ${this.age}살`;
    }
}

const person1 = new FemaleModel('Lee',2003,25);

console.log(person1);

console.log(person1.sayHello());
