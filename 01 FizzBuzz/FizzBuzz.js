for (let num=1; num<=100; num++)
{  
    let esMultiploTres = false;
    let esMultiploCinco = false;
    
    if(num % 3 == 0){
        esMultiploTres = true;
    }

    if(num % 5 == 0){
        esMultiploCinco = true;
    }

    if (esMultiploTres === true && esMultiploCinco === true)
    {
        console.log(`el numero ${num} es multiplo de 3 y 5 ñzzbuzz`);
    } 
    else if(esMultiploTres === true) 
        {
            console.log(`el numero ${num} es multiplo de 3 ñzz`);
        }
        else if(esMultiploCinco === true) 
        {
                console.log(`el numero ${num} es multiplo de 5 buzz`);
        
        }
        else {
            console.log(`el numero ${num} NO es multiplo de 3 o de 5`);
        }
}