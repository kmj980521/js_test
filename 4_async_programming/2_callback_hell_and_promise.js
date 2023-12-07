/**
 * Callback
 * 
 * resolve = 전달값             resolve + then
 * reject = error를 던질 때 .   reject + catch
 */

function waitAndRun(){
    setTimeout(()=> {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2(){
    setTimeout(()=>{
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000 );
}

//waitAndRun2();

/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// })
// // res는 resovle 한 값.
// timeoutPromise.then((res)=>{
//     console.log(res);
// });

const getPromise = (seconds)=> new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

// getPromise(1)
// .then(
//     (res)=>{
//     console.log(res);
   
// }).catch((res)=>{
//     console.log('first catch');
// }).finally((res)=>{

// });


// 모두 동시에 실행을 시작하고 
// 전부 다 기다린 다음에 결과를 받아온다. 
Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});



