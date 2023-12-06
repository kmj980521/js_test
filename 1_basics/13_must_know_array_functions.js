/**
 * Array Function Methods
 */


let names = [
    'Kim',
    'Park',
    'Jang',
    'Hong',
]

// push() 
// 마지막 인덱스에 데이터 추가 
// 직접적으로 Object를 변경한 것
// push한 후의 반환값은 array의 길이가 반환됨. 
console.log(names.push('Sim'));
console.log(names);

console.log('--------------');

// pop()
// 마지막 인덱스의 데이터를 삭제 및 반환
console.log(names.pop());
console.log(names);

console.log('--------------');

// shift()
// 첫번째 값을 반환 및 삭제 
console.log(names.shift());
console.log(names);

console.log('--------------');

// unshift()
// 0번째 인덱스에 데이터 삽입
// 삽입 후 데이터의 길이를 반환
console.log(names.unshift('Lee'));
console.log(names);

console.log('--------------');

// splice()
// (어디부터 삭제할지, 어디까지 삭제할지(미만))
// 삭제한 값을 반환 
console.log(names.splice(0,2));
console.log(names);

console.log('--------------');

names = [
    'Kim',
    'Park',
    'Jang',
    'Hong',
]


// concat()
// push와 다르게 반환값이 새로운 값을 push한 Object를 반환한다. 
// 기존의 Object는 변경하지 않고 새로운 Object를 반환하는 기능.
console.log(names.concat('Lee'));
console.log(names);

console.log('--------------');

// slice()
// splice()의 변형 버전.
// 삭제한 값을 반환값으로 가진다.
// 원래의 Object가 변경되지 않음 
console.log(names.slice(0,2));
console.log(names)

console.log('--------------');

// spread operator
// 실제 데이터들만 펼쳐준다. 
let names2 = [
   ...names
];

console.log(names2);

console.log('--------------');

let names3 = [
    names,
];

console.log(names3);
console.log('--------------');


let names4 = names;
console.log(names4);
console.log(names4===names);
console.log('--------------');

// 완전히 새로운 array를 생성하기 때문에 값이 다르다고 나온다. 
console.log([
    ...names,
] === names);

console.log('--------------');

// join() 
// , 기준으로 String으로 합친다. 
console.log(names.join());
// 합칠 때 기준값을 지정할 수 있다. 
console.log(names.join('/'));
console.log(names.join(', '));
console.log('--------------');


// sort() 정렬
// 오름차순 정렬
names.sort();
console.log(names);

console.log('--------------');

// reverse() 정렬
// 내림차순 정렬
// 내림차순으로 된 값을 반환 
console.log(names.toReversed());
// console.log(names.reverse());

console.log('--------------');

let numbers = [
    1,9,7,5,3
];

console.log(numbers);

// a,b를 비교했을 때 
// 1) a를 b 보다 뒤에 두려면 0보다 큰 숫자를 반환
// 2) a를 b 보다 앞에 두려면 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환.
numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});

console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);

console.log(numbers);
console.log('--------------');

// map() 
// array의 값을 순회하며 각각의 값을 변형시키는 역할
// 새로운 array를 반환 
console.log(names.map((x) => `이름 : ${x}`));


console.log(names.map((x) => {
    if(x==='Kim'){
        return `김씨입니다. ${x}`;
    }
    else{
        return x;
    }
}));


console.log('--------------');

// filter()
numbers = [1,8,7,6,3];

// true를 반환하는 값들을 필터해서 return 한다. 
console.log(numbers.filter((x)=> x%2===0));

console.log('--------------');

// find()
// 순서대로 보다가 첫번째로 조건에 부합하는 값만 return 하고 끝남.
console.log(numbers.find((x) => x%2===0));


// findIndex()
// find()와 같지만, 해당 값이 위치한 인덱스가 반환이 된다.
console.log(numbers.findIndex((x) => x%2===0));

console.log('--------------');

// reduce()
console.log(numbers.reduce((p,n) => p + n ,0));


