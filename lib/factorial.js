
function promisedfactorial(n) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0)
                reject(`invalid number`);
            else {

                let fn = 1;
                    while (n>1)
                    {
                        fn=fn*n;
                        n--;
                    }
                    resolve(fn);
            }

        }, n*100); //just to simulate that job may take long time.
    });
}

module.exports={
    promisedfactorial
};