
/**
 * 
 * Inheritance 상속
 * 
 */


class PersonModel{
    name;
    year;


    constructor(name, year){
        this.name = name;
        this.year = year; 
    }
}


class MaleModel extends PersonModel{
    walk(){
        return `${this.name} 산책`;
    }
}

class FemaleModel extends PersonModel{
    sing(){
        return `${this.name} 노래`;
    }
}

const person1  = new MaleModel('Kim',2003);
console.log(person1.walk());

const person2  = new FemaleModel('Park',2001);
console.log(person2.sing());

// 상속의 관계로 true
console.log(person1 instanceof PersonModel );






