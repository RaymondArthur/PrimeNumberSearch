function findPrimes(n){
    let list = [];  
    let indexedList = []; 
    let primes; 
    let numFrom = 1; 
    let numTo = n; 
    let method = 'boolean'; //method =  
    //generating our initial list from 1 to n, and our indexed list of 'true' values 
    for(let i = numFrom; i<=numTo; i++){  
        list.push(i);  
        indexedList.push(true);  
    }  
    //function findPrime(){  
    let result = [];  
    
    list.forEach(num=>{  
        //we know 1 is not a prime 
        if(num == 1){  
            indexedList[0]=false; 
            return;  
        }  
        //we know 2 is a prime 
        else if(num == 2){ 
            //result.push(num); 
            return;  
        }  
        //immediately flag all even numbers greater than 2 as 'false' in our indexed list 
        else if (num % 2 == 0){ 
            indexedList[num-1] = false; 
            return; 
        } 
        //this leaves the integer 2 and all odd numbers. If their flag is false, we continue with the next iteration of the loop, otherwise we flag the integer's multiples a false. 
        else if(indexedList[num-1] == false) 
        { 
            return; 
        }  
        else { 
            //result.push(num); 
            if(num <= Math.ceil(Math.sqrt(numTo))) 
            { 
                for(let j = num*2; j <= numTo; j = j+num){ 
                    indexedList[j-1]=false; 
                } 
            } 
        } 
    });
        return indexedList.filter(Boolean).length;
}