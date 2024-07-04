
//#1

//if (true) {
//    ("este codigo correra")
//};
//console.log()

//#2

// if (false) {
//     ("este codigo No se correra.")
// };


//#3

// if(saludo == "triste") {
//     console.log("No te dasanimes!!, la programacion y Js en particular, te levantaran el animo. Comencemos!")
// } else {
//     console.log("perfecto, no como tu compañero de recien que estaba re bajon. Continuemos...");
// }

//#4

// let numeroSecreto = parseInt(prompt("Cual es el numero secreto?: "));
// let contraseña = 8;
// if (numeroSecreto === contraseña) {
//     console.log("Tu respuesta es correcta. Diregite a: http://www.google.com") 
//         } else {
//             console.log("Lamentamos, tu respuesta no es valida. Vuelve a intentarlo usuario.")
// }

// #5


// let numero1 = parseInt(prompt("ingrese  un  Numero  por  favor,  Usuario: "));
// let numero2 = 2;

// if (numero1 % numero2 === 0) {
//     console.log("Es par.")
// }else {
//     console.log("es impar.")
// }


//#6


let numero = 2;
let edad = parseInt(prompt("Ingrese se edad joven: "));
if (edad >= 22 && edad % numero === 0 && edad > 0){
    alert("Felicitaciones!! llegaste a la mayoria de edad y puedes beber alcohol sin que el patovica te moleste.");
}
    else if (edad >= 21 && edad % numero != 0 && edad > 0){
        alert("Felicitaciones!! llegaste a la mayoria de edad y puedes beber alcohol sin que el patovica te moleste. Pero sabia q su edad es un numero impar?");
    }
    else if (edad <= 20 && edad % numero === 0 && edad > 0){
        alert("Ud es menor de edad joven. Circule.")
    }
    else if (edad <=20 && edad % numero != 0 && edad > 0){
        alert("Ud es menor de edad joven, pero sabia que es numero impar?. Ahora lo sabe y Circule.")
    }
else {
    alert("Error, su edad no es válida.")
}

//Primer intento fallido!!!

// let edad = prompt("Ingrese su edad.");

// if (edad < 0) {
// alert("Error, su edad no es válida.");
// } 
// else if( edad >= 21){
// alert("Felicitaciones!! llegaste a la mayoria de edad y puedes beber alcohol sin que el patovica te moleste.");
// } 
// else if (edad < 0 && edad % 2  === !0){
//     alert("Tu edad es incorrecta, y sabias que es impar?");
// }
// else if (edad >= 21 && edad % 2  === !0){
// alert("Felicitaciones!! llegaste a la mayoria de edad y puedes beber alcohol sin que el patovica te moleste pero sabias que es impar?");
// }
// else if (edad < 21 && edad % 2  === !0){
//     alert("Usted es menor de edad jovencito, y sabia q la misma es imapar?. Circule.")
// }
// else {
//     (edad < 21)
//     alert("Ud es menor de edad. Circule joven.");
// }


