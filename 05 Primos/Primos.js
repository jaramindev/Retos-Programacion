function Primos() {
    let esPrimo;
    for(let x = 2; x<=100; x++)
    {
        esPrimo = true;
        for (let z = 1; z <= 9; z++) 
        {
            if (x != z && z != 1) 
            {
                if (x % z == 0) 
                {
                    esPrimo = false;
                }
            }
        }
        if(esPrimo==true)
        {
            console.log(`${x} es un numero primo ${esPrimo}`)
        }
    }
}

Primos();