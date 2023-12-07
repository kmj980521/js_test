/**
 * Async theory
 * 
 * 비동기 함수는 Task Queue / Event Queue로 이동해서 따로 수행.
 * 종료된 함수를 다시 Call Stack으로 이동
 * 비동기가 끝났으니, 동기로 실행될 함수를 실행 
 * 
 */

// function longWork(){
//     const now = new Date();
    
//     /**
//      * milliseconds since epoch
//      * : 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2*1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }
// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
    // 비동기로 실행 
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');

