/* Programa que verifica si dos palabras conforman un anagrama
   Un anagrama se forma cuando dos palabras contienen el mismo numero de caracteres iguales
*/

function esAnagrama(word1, word2)
{
    let flag = false;

    if(word1.length != word2.length || word1==word2)
    {
        flag = false;
    }
    else 
    {

        let arrayWord1 = word1.split("");
        arrayWord1.sort();

        let arrayWord2 = word2.split("");
        arrayWord2.sort();

        console.log(arrayWord1);
        console.log(arrayWord2);
        
        for (i=0; i<=arrayWord1.length-1; i++)
        {
            if (arrayWord1[i] == arrayWord2[i]) {
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

let w1="amparo";
let w2="paramo";

console.log(esAnagrama(w1, w2));