function isPrime(num)
{
    if(num <= 1)
    {
        return false;
    }

    for(i=2;i<num;i++)
    {
        if(num%i == 0)
        {
            return false;
        }
    }
    return true;
}

for(x=1; x<=100; x++)
{
    if(isPrime(x))
    {
        console.log(x);
    }
}