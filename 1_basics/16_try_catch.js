/**
 * 
 * try catch
 * 
 */

function runner(){

    try{

        console.log('Hello');

        throw new Error('에러 던지기');

        console.log('World');

    }catch(e){
        console.log('----catch----');

        console.log(e);
    }
    
    
}

runner();








