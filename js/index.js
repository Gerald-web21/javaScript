//let nota1 = prompt("ingresa la nota Lapso N°1");
//let nota2 = prompt("ingresa la nota Lapso N°2")
//let nota3 = prompt("ingresa la nota Lapso N°3")

//console.log("su nota del Lapso 1: " +nota1)
//console.log("su nota del Lapso 2: " +nota2)
//console.log("su nota del Lapso 3: " +nota3)

const calificaciones = [4,6,8,10,7,2,8,5,1]

let suma = 0;
let contador = 0;

for (let i = 0; i < calificaciones.length; i++) {
    const calificacion = calificaciones[i];

    if (calificacion >= 6) {
        suma += calificacion;
        contador++;
    }
}

const promedio = contador > 0 ? suma / contador : 0;

console.log("la suma total de calificaciones aprobadas es:", suma.toFixed(2));
console.log("el promedio de las calificaciones aprobadas es:", promedio.toFixed(2));

console.log("cantidad de notas aprobadas son: ", contador);