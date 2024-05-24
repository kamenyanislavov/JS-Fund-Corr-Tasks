function solve(num) {
    let isPrime = false;
    
    for (let divisor = 1; divisor <= num; divisor++) {
        if (num % divisor === 0) {
            isPrime = true;
        }
    }

    // the loop must start with 2 and end with < num, otherwise every number can be devided by 1 and 
    // itself and the outpu would always be true
    // the default value of boolean isPrime must be true and the num can be devided without leftover
    // to any of the checked devisor the output must get false

    // THE CORRECT CODE WOULD BE:
    
    // let isPrime = true;
    
    // for (let divisor = 2; divisor < num; divisor++) {
    //     if (num % divisor === 0) {
    //         isPrime = false;
    //     }
    // }

    console.log(isPrime);
}

solve();