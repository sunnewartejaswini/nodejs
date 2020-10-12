let {promisedfactorial} =require('./lib/factorial');

const testPromisedPrimes= function(num){
    let start=new Date();
    promisedfactorial(num)
        .then(primes=>{
            console.log(`factorial of (${num})`,primes);
            let end=new Date();
            console.log(`Total time taken to find factorial of (${num}) is ${end-start}`);
        })
        .catch(error=>{
            console.log('error', error);
            let end=new Date();
            console.log(`Total time taken to find factorial of (${num}) is ${end-start}`);
            console.log();
        });

}



testPromisedPrimes(5);
testPromisedPrimes(4);
testPromisedPrimes(3);
