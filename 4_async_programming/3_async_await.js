/**
 * Async / Await
 * 
 * try catch로 resolve는 반환값을,
 * reject는 error 값으로 처리한다. 
 * 
 * 
 */

const getPromise = (seconds) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject('완료');
    }, seconds*1000);
});

async function runner(){

    try {
        const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
    } catch (e) {
        console.log(e);
    }
    
}

runner();

