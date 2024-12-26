var num = parseInt(prompt("Enter number"));
        let isPrime=true;
        if(num===1) console.log(`${num} is not a prime`);
        else if(num===2||num===3) console.log(`${num} is a prime number`);
        else if(num%2===0||num%3===0) console.log(`${num} is a not prime number`);
        else{for(let i =5;i*i<=num;i+=6){
            if(num%i==0||num%(i+2)==0){
                isPrime=false;
                break;
            }
            
        }
        if(isPrime){
            console.log(`${num} is a prime number`);
        }
        else{
            console.log(`${num} is a not prime number`);
        }}