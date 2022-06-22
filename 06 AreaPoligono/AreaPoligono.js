function areaPoligono(n, l, a)
{
    let area = 0;
    area = ((n*l) * a) / 2;
    return area;
}

let nlados = 5;
let lado = 6;
let apotema = 4.13;

console.log(`Un poligono con ${nlados} lados, cada lado mide ${lado} y su apote es de ${apotema} el area resultante es de ${areaPoligono(nlados, lado, apotema)} `)