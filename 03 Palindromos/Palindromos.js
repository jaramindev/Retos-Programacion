/* Programa que verifica si dos palabras son palindromo
   Un palindromo es cuando dos palabras  resultan de escribirse al derecho o al reves
*/

function esPalindromo(word1, word2)
{
    let flag = false;
    if(word1.length != word2.length)
    {
        flag = false;
    }
    else 
    {
        let y = 0;
        for (let x=0; x <= word1.length-1; x++)
        {
            y = (word1.length-1) - x;

            // console.log(word1.charAt(x));
            // console.log(word2.charAt(y));

            if (word1.charAt(x) == word2.charAt(y)) 
            {
    
                flag = true;
            }
            else
            {
                flag = false;
                break;
            }
        }
    }
       
    return flag;
}

let w1 = 'roma';
let w2 = 'amor';

console.log(esPalindromo(w1, w2));