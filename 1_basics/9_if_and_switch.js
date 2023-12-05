

let number = 5;

if(number%2 === 0 ){
    console.log('짝수입니다.');
}
else{
    console.log(`${number}는 홀수입니다.`);
}

if(number %2 ===0){
    console.log('2의 배수입니다.');
}else if(number %3 ===0){
    console.log('3의 배수입니다.');
}


const englishDay = 'monday'; 

let koreanDay; 

switch (englishDay) {
    case 'monday':
        koreanDay = '월요일'
        break;

    default:
        break;
}

console.log(koreanDay);