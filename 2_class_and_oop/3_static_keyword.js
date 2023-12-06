/**
 * 
 *  Static Keyword
 * 
 *  -> 인스턴스에 특정 프로퍼티가 귀속되는 것이 아니라, 
 *     클래스 자체에 프로퍼티가 귀속된다. 
 * 
 */

// class PersonModel{
//     name;
//     year;
//     static age = 25;

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }


// const person1 = new PersonModel('Kim', 2003);

// console.log(person1.age);

// console.log(PersonModel.age);

/**
 * 
 * factory constructor
 * 
 */


class PersonModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new PersonModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new PersonModel(
            list[0],
            list[1]
        );
    }
}

const person1 = PersonModel.fromObject({
    name : 'Kim',
    year : 2003,
});

console.log(person1);


const person2 = PersonModel.fromList([
    'Park', 2002
]);

console.log(person2);
