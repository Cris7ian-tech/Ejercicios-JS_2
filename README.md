# Primeras Condicionales

Bienvenido al espacio de trabajo "Mis Primeras Condicionales". Aquí aprenderemos a utilizar estructuras condicionales en JavaScript a través de varios ejercicios prácticos.

## Ejercicios

1. Sentencia if que siempre ejecute su bloque de código
En este ejercicio, debes escribir una sentencia if que siempre ejecute su bloque de código.

2. Sentencia if que nunca ejecute su bloque de código
En este ejercicio, debes escribir una sentencia if que nunca ejecute su bloque de código.

3. Preguntar al usuario cómo está y mostrar un mensaje de aliento si responde "triste"
En este ejercicio, debes escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.

4. Preguntar al usuario cuál es el número secreto
En este ejercicio, debes escribir una sentencia que le pregunte al usuario cuál es el número secreto. Solamente deberás advertirle con un mensaje en caso de que esté equivocado.

5. Pedir al visitante que ingrese una contraseña y redirigirlo si es correcta
En este ejercicio, debes pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirígelo usando la siguiente línea de código: window.location = "http://www.google.com".


Claro, aquí tienes el archivo README actualizado con el ejercicio adicional "Caminos":

Mis Primeras Condicionales
Bienvenido al espacio de trabajo "Mis Primeras Condicionales". Aquí aprenderemos a utilizar estructuras condicionales en JavaScript a través de varios ejercicios prácticos.

Ejercicios
1. Sentencia if que siempre ejecute su bloque de código
En este ejercicio, debes escribir una sentencia if que siempre ejecute su bloque de código.

Ejemplo:

javascript
Copiar código
if (true) {
    console.log("Este bloque de código siempre se ejecutará.");
}
2. Sentencia if que nunca ejecute su bloque de código
En este ejercicio, debes escribir una sentencia if que nunca ejecute su bloque de código.

Ejemplo:

javascript
Copiar código
if (false) {
    console.log("Este bloque de código nunca se ejecutará.");
}
3. Preguntar al usuario cómo está y mostrar un mensaje de aliento si responde "triste"
En este ejercicio, debes escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.

Ejemplo:

javascript
Copiar código
let estado = prompt("¿Cómo estás?");

if (estado.toLowerCase() === "triste") {
    console.log("Lo siento que te sientas así. Recuerda que siempre hay alguien dispuesto a escucharte. ¡Ánimo!");
}
4. Preguntar al usuario cuál es el número secreto
En este ejercicio, debes escribir una sentencia que le pregunte al usuario cuál es el número secreto. Solamente deberás advertirle con un mensaje en caso de que esté equivocado.

Ejemplo:

javascript
Copiar código
let numeroSecreto = prompt("¿Cuál es el número secreto?");
const numeroCorrecto = "1234";  // Cambia esto al número secreto correcto

if (numeroSecreto !== numeroCorrecto) {
    alert("Número incorrecto. Por favor, inténtalo de nuevo.");
} else {
    console.log("¡Número correcto!");
}
5. Pedir al visitante que ingrese una contraseña y redirigirlo si es correcta
En este ejercicio, debes pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirígelo usando la siguiente línea de código: window.location = "http://www.google.com".

Ejemplo:

javascript
Copiar código
let contrasena = prompt("Por favor, ingrese la contraseña:");
const contrasenaCorrecta = "miContrasenaSecreta";  // Cambia esto a la contraseña correcta

if (contrasena === contrasenaCorrecta) {
    window.location = "http://www.google.com";
} else {
    alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
}
6. Par o Impar
En este ejercicio, debes pedirle al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usa la estructura condicional if...else.

7. Caminos
En este ejercicio, debes modificar el siguiente código para que cumpla con las nuevas consignas:

let edad = prompt("Ingrese su edad.");
edad = Number(edad); // Convertir la entrada a número

if (edad < 0) {
    console.log("Error, su edad no es válida.");
} else {
    let mensaje = "";

    if (edad < 18) {
        mensaje = "No puede pasar al bar.";
    } else if (edad < 21) {
        mensaje = "Puede pasar al bar, pero no puede tomar alcohol.";
    } else {
        mensaje = "Puede pasar al bar y tomar alcohol.";
        if (edad === 21) {
            mensaje += " ¡Felicidades por haber llegado a la mayoría de edad!";
        }
    }

    if (edad % 2 !== 0) {
        mensaje += " ¿Sabías que tu edad es impar?";
    }

    if (mensaje) {
        alert(mensaje);
    }
}

### Este código cumple con las siguientes condiciones:

Si la edad es negativa, se muestra en la consola el mensaje: "Error, su edad no es válida."
Si tiene 21 años, además de darle la bienvenida, se le felicita por haber llegado a la mayoría de edad.
Si su edad es impar, se le dice en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

De a poco vamos recordando y aprendiendo cosas nuevas. 
Perdon por tan poco. A seguir mejorando...
