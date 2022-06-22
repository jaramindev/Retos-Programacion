function Fibo (x, y) {

    let z = 0;

    let count = 1;

    console.log(`Pos: ${count} - Fibo: ${x}`);
    console.log(`Pos: ${count++} - Fibo: ${y}`);
   
    do {
        count ++;
        z = x + y
        console.log(`Pos: ${count} - Fibo: ${z}`);
        x = y;
        y = z;        
    } while ( count < 50)
}

let n1 = 0;
let n2 = 1;

Fibo(n1, n2);