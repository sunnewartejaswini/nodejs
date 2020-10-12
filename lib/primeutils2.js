function isPrimeSync(number) {
    if (number < 2)
        return false;

    for (let i = 2; i < number; i++)
        if (number % i == 0)
            return false;
    return true;

}

function isPrime(number, cb) {
    cb(null, isPrimeSync(number));
}

function findPrimes(min, max, cb) {


        if (min >= max)
            cb(new Error(`Invalid Range(${min}-${max})`));  //result is undefined
        else {
			let primes = [];
			var count =0;
            for (let i = min; i < max; i++)
                isPrime(i, (err, result) => {
                    if (result)
						primes.push(i);
					count++;
				});
				setTimeout(() => {count == 1000},2);

            cb(null, primes); //first parameter null indicates success
        }


}

module.exports = {
    isPrimeSync,
    findPrimes,
    isPrime
};