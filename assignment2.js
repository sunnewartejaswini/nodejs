let {myfunction} =require('./lib/primeutils');

const testFindPrimesSync= function(min,max){
    try{
        let primes= myfunction(min,max);
        console.log('total primes is ', primes.length);
    } catch(err){
        console.log('error',err.message);
    } 
}

testFindPrimesSync(2,500000); //this is a long time taking operation!
testFindPrimesSync(100,2);    //this call has potential to finish very quickly
testFindPrimesSync(2,10000);  //but must wait till previous operation has finished
