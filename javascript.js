// Función para manejar una estructura if-else básica
function ejemploIfElse() {
    // Obtén el valor del input y conviértelo a un número
    const edad = parseInt(document.getElementById('edad').value.trim(), 10);
    let resultado;

    // Validar si la edad es un número válido
    if (isNaN(edad) || edad < 0) {
        // Si no es un número o es menor que 0, muestra un mensaje de error
        resultado = 'Por favor ingresa una edad válida.';
    } else if (edad >= 18) {
        // Si la edad es mayor o igual a 18, se considera mayor de edad
        resultado = 'Eres mayor de edad.';
    } else {
        // Si no es mayor de edad, se considera menor de edad
        resultado = 'Eres menor de edad.';
    }

    // Muestra el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').innerText = resultado;
}

// Función para manejar un switch para días de la semana
function ejemploSwitch() {
    // Obtén el valor del input y conviértelo a un número
    const diaNumero = parseInt(document.getElementById('dia').value.trim(), 10);
    let resultado;

    // Validar si el número está en el rango válido
    switch (diaNumero) {
        case 1:
            resultado = "Lunes";
            break;
        case 2:
            resultado = "Martes";
            break;
        case 3:
            resultado = "Miércoles";
            break;
        case 4:
            resultado = "Jueves";
            break;
        case 5:
            resultado = "Viernes";
            break;
        case 6:
            resultado = "Sábado";
            break;
        case 7:
            resultado = "Domingo";
            break;
        default:
            // Si no coincide con ninguno de los casos anteriores, se muestra un mensaje de error
            resultado = "Número de día no válido";
    }

    // Muestra el resultado en el párrafo con id="resultadoSwitch"
    document.getElementById('resultadoSwitch').innerText = resultado;
}

// Función que ejemplifica el manejo de errores con try-catch-finally
function ejecutarTryCatch() {
    // Limpiar mensajes anteriores
    const resultado = document.getElementById("resultadoTryCatch");
    resultado.innerText = "";

    try {
        // Obtener el valor ingresado por el usuario y convertirlo a número
        let numero = parseInt(document.getElementById('numeroInput').value);

        // Verificar si el número es válido
        if (isNaN(numero)) {
            // Lanza un error si no es un número
            throw new Error("El valor ingresado no es un número.");
        }

        if (numero < 0) {
            // Lanza un error si el número es negativo
            throw new RangeError("El número no puede ser negativo.");
        }

        // Si el número es válido, muestra un mensaje de éxito
        resultado.innerText = "Número ingresado correctamente: " + numero;
    } catch (error) {
        // Capturar y mostrar el mensaje de error
        resultado.innerText = "Ocurrió un error: " + error.message;
    } finally {
        // Mensaje adicional si se desea
        console.log("Fin del manejo de errores.");
    }
}

// Función que muestra el resultado de un error en un elemento específico
function mostrarResultadoError(e, id) {
    // Muestra el nombre y mensaje del error en el elemento con el ID especificado
    const resultado = document.getElementById(id);
    resultado.innerText = `${e.name}: ${e.message}`;
    // Registra el error en la consola
    console.error(e.name + ": " + e.message);
}

// Función que genera un error genérico usando la clase Error
function generarError() {
    try {
        // Lanza un error con un mensaje genérico
        throw new Error("Este es un error genérico");
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorGenerico"
        mostrarResultadoError(e, "resultadoErrorGenerico");
    }
}

// Función para generar un error de tipo TypeError
function generarTypeError() {
    try {
        let num = 5;
        // Intenta llamar un método de cadena en un número, lo cual genera un TypeError
        num.toUpperCase();
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorType"
        mostrarResultadoError(e, "resultadoErrorType");
    }
}

// Función para generar un error de tipo ReferenceError
function generarReferenceError() {
    try {
        // Intenta acceder a una variable que no ha sido declarada, lo cual genera un ReferenceError
        console.log(variableInexistente);
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorReference"
        mostrarResultadoError(e, "resultadoErrorReference");
    }
}

// Función para generar un error de tipo RangeError
function generarRangeError() {
    try {
        let numero = 1;
        // Intenta establecer un número de dígitos fraccionales fuera de rango, lo cual genera un RangeError
        numero.toFixed(101);
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorRange"
        mostrarResultadoError(e, "resultadoErrorRange");
    }
}

// Función para generar un error de tipo SyntaxError
function generarSyntaxError() {
    try {
        // Intenta ejecutar código con una sintaxis inválida, lo cual genera un SyntaxError
        eval("alert('Hola");
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorSyntax"
        mostrarResultadoError(e, "resultadoErrorSyntax");
    }
}

// Función para generar un error de tipo URIError
function generarURIError() {
    try {
        // Intenta decodificar un componente URI mal formado, lo cual genera un URIError
        decodeURIComponent("%");
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorURI"
        mostrarResultadoError(e, "resultadoErrorURI");
    }
}

// Función para generar un error de tipo AggregateError (introducido en ES2021)
function generarAggregateError() {
    try {
        // Lanza un AggregateError con múltiples errores
        throw new AggregateError([
            new Error("Primer error"),
            new TypeError("Error de tipo")
        ], "Múltiples errores ocurrieron");
    } catch (e) {
        // Muestra el error capturado en el elemento con ID "resultadoErrorAggregate"
        mostrarResultadoError(e, "resultadoErrorAggregate");
        // Itera sobre los errores individuales y los registra en la consola
        e.errors.forEach(err => console.error(err.name + ": " + err.message));
    }
}

// Función para ejecutar un bucle for
function ejecutarBucleFor() {
    // Limpiar el contenido anterior del resultado
    const resultado = document.getElementById("resultadoBucleFor");
    resultado.innerHTML = "";

    // Bucle for para imprimir números del 1 al 5
    for (let i = 1; i <= 5; i++) {
        const elemento = document.createElement("p");
        elemento.textContent = `Número: ${i}`;
        resultado.appendChild(elemento);
    }
}

// Función para ejecutar un bucle while
function ejecutarBucleWhile() {
    // Limpiar el contenido anterior del resultado
    const resultado = document.getElementById("resultadoBucleWhile");
    resultado.innerHTML = "";

    // Bucle while para imprimir números del 1 al 5
    let contador = 1;
    while (contador <= 5) {
        const elemento = document.createElement("p");
        elemento.textContent = `Número: ${contador}`;
        resultado.appendChild(elemento);
        contador++;
    }
}

// Función para ejecutar un bucle do...while
function ejecutarBucleDoWhile() {
    // Limpiar el contenido anterior del resultado
    const resultado = document.getElementById("resultadoBucleDoWhile");
    resultado.innerHTML = "";

    // Bucle do...while para imprimir números del 1 al 5
    let contador = 1;
    do {
        const elemento = document.createElement("p");
        elemento.textContent = `Número: ${contador}`;
        resultado.appendChild(elemento);
        contador++;
    } while (contador <= 5);
}

// Función para mostrar el resultado de una suma
function sumar(a, b) {
    // Suma dos números y retorna el resultado
    return a + b;
}

// Función para manejar el evento de botón y llamar la función 'sumar'
function llamarFuncion() {
    // Llamada a la función con valores 3 y 4
    const resultado = sumar(3, 4);
    // Muestra el resultado de la suma en el elemento con ID "resultadoFuncion"
    const resultadoElemento = document.getElementById("resultadoFuncion");
    resultadoElemento.textContent = "Resultado de la suma: " + resultado;
}

// Función para ejecutar una asignación y comparación estricta
function ejecutarAsignacionComparacion() {
    const resultado = document.getElementById("resultadoAsignacionComparacion");
    let x = 5; // Asignación
    let y = 10;
    // Comparación estricta de igualdad
    let comparacion = (x === y);
    resultado.textContent = "¿x es igual a y? " + comparacion;
    console.log("¿x es igual a y?", comparacion);
}

// Función para mostrar el uso de operadores aritméticos
function ejecutarOperadoresAritmeticos() {
    const resultado = document.getElementById("resultadoOperadoresAritmeticos");
    let a = 10;
    let b = 3;
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    resultado.textContent = `Suma: ${suma}, Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}`;
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
}

// Función para mostrar el uso de operadores lógicos
function ejecutarOperadoresLogicos() {
    const resultado = document.getElementById("resultadoOperadoresLogicos");
    let valor1 = true;
    let valor2 = false;
    let resultadoAND = valor1 && valor2; // AND lógico
    let resultadoOR = valor1 || valor2;  // OR lógico
    let resultadoNOT = !valor1;          // NOT lógico
    resultado.textContent = `Resultado AND: ${resultadoAND}, Resultado OR: ${resultadoOR}, Resultado NOT: ${resultadoNOT}`;
    console.log("Resultado AND:", resultadoAND);
    console.log("Resultado OR:", resultadoOR);
    console.log("Resultado NOT:", resultadoNOT);
}

// Función para mostrar las operaciones básicas del objeto Number
function ejecutarObjetoNumber() {
    const resultado = document.getElementById("resultadoObjetoNumber");
    let numero = 123.456;
    let esFinito = Number.isFinite(numero); // Verificar si es finito
    let entero = Number.parseInt(numero); // Convertir a entero
    let fijo = numero.toFixed(2); // Redondear a 2 decimales
    resultado.textContent = `Número: ${numero}, ¿Es finito? ${esFinito}, Parte entera: ${entero}, Número con 2 decimales: ${fijo}`;
    console.log("Número:", numero);
    console.log("¿Es finito?", esFinito);
    console.log("Parte entera:", entero);
    console.log("Número con 2 decimales:", fijo);
}

// Función para mostrar las operaciones básicas del objeto Math
function ejecutarObjetoMath() {
    const resultado = document.getElementById("resultadoObjetoMath");
    let raiz = Math.sqrt(16); // Raíz cuadrada de 16
    let potencia = Math.pow(2, 3); // 2 elevado a la potencia de 3
    let aleatorio = Math.random(); // Número aleatorio entre 0 y 1
    resultado.textContent = `Raíz cuadrada de 16: ${raiz}, 2 elevado a 3: ${potencia}, Número aleatorio: ${aleatorio.toFixed(2)}`;
    console.log("Raíz cuadrada de 16:", raiz);
    console.log("2 elevado a 3:", potencia);
    console.log("Número aleatorio:", aleatorio);
}

// Función para mostrar las operaciones básicas del objeto Date
function ejecutarObjetoDate() {
    const resultado = document.getElementById("resultadoObjetoDate");
    let fechaActual = new Date(); // Fecha y hora actual
    let anio = fechaActual.getFullYear(); // Obtener el año actual
    let mes = fechaActual.getMonth() + 1; // Obtener el mes actual (0-11, se suma 1)
    let dia = fechaActual.getDate(); // Obtener el día actual
    resultado.textContent = `Fecha actual: ${fechaActual}, Año: ${anio}, Mes: ${mes}, Día: ${dia}`;
    console.log("Fecha actual:", fechaActual);
    console.log("Año actual:", anio);
    console.log("Mes actual:", mes);
    console.log("Día actual:", dia);
}

// Función para mostrar el uso de cadenas literales
function ejecutarCadenasLiterales() {
    const resultado = document.getElementById("resultadoCadenasLiterales");
    let nombre = "Juan";
    let edad = 25;
    // Crea un mensaje utilizando cadenas literales
    let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    resultado.textContent = mensaje;
    console.log(mensaje);
}

// Función para mostrar operaciones con el Objeto String
function ejecutarObjetoString() {
    const resultado = document.getElementById("resultadoObjetoString");
    let texto = "Hola Mundo";
    let longitud = texto.length; // Longitud del texto
    let mayusculas = texto.toUpperCase(); // Convertir a mayúsculas
    let reemplazo = texto.replace("Mundo", "JavaScript"); // Reemplazar parte del texto
    resultado.textContent = `Texto original: ${texto}, Longitud: ${longitud}, En mayúsculas: ${mayusculas}, Reemplazo: ${reemplazo}`;
    console.log("Texto original:", texto);
    console.log("Longitud:", longitud);
    console.log("En mayúsculas:", mayusculas);
    console.log("Reemplazo:", reemplazo);
}

// Función para manipular arreglos
function ejecutarArreglos() {
    const resultado = document.getElementById("resultadoArreglos");
    let frutas = ["Manzana", "Banana", "Cereza"];
    frutas.push("Mango"); // Agregar un elemento al final
    let primeraFruta = frutas[0]; // Acceder al primer elemento
    let longitud = frutas.length; // Obtener la longitud del arreglo
    resultado.textContent = `Arreglo de frutas: ${frutas.join(", ")}, Primera fruta: ${primeraFruta}, Longitud del arreglo: ${longitud}`;
    console.log("Arreglo de frutas:", frutas);
    console.log("Primera fruta:", primeraFruta);
    console.log("Longitud del arreglo:", longitud);
}

// Función para manipular arreglos tipados
function ejecutarArreglosTipados() {
    const resultado = document.getElementById("resultadoArreglosTipados");
    let buffer = new ArrayBuffer(16); // Crear un buffer de 16 bytes
    let vistaInt32 = new Int32Array(buffer); // Crear una vista de 32 bits
    vistaInt32[0] = 42; // Asignar un valor al primer elemento
    vistaInt32[1] = 7; // Asignar un valor al segundo elemento
    resultado.textContent = `Arreglo Tipado Int32: [${vistaInt32.join(", ")}], Elemento 0: ${vistaInt32[0]}, Elemento 1: ${vistaInt32[1]}`;
    console.log("Arreglo Tipado Int32:", vistaInt32);
    console.log("Elemento 0:", vistaInt32[0]);
    console.log("Elemento 1:", vistaInt32[1]);
}

// Función para encontrar un elemento por ID
function encontrarPorID() {
    const elemento = document.getElementById("elementoID");
    const resultado = document.getElementById("resultadoID");
    resultado.textContent = `Texto del elemento con ID 'elementoID': ${elemento.textContent}`;
    console.log(elemento.textContent);
}

// Función para encontrar elementos por nombre de etiqueta
function encontrarPorEtiqueta() {
    const elementos = document.getElementsByTagName("p");
    const resultado = document.getElementById("resultadoEtiqueta");
    let texto = "";
    // Recorre cada elemento de la colección y concatena su contenido
    for (let i = 0; i < elementos.length; i++) {
        texto += `${elementos[i].textContent} `;
    }
    resultado.textContent = `Textos de los elementos con etiqueta 'p': ${texto.trim()}`;
    console.log(texto);
}

// Función para encontrar elementos por nombre de clase
function encontrarPorClase() {
    const elementos = document.getElementsByClassName("elementoClase");
    const resultado = document.getElementById("resultadoClase");
    let texto = "";
    // Recorre cada elemento de la colección y concatena su contenido
    for (let i = 0; i < elementos.length; i++) {
        texto += `${elementos[i].textContent} `;
    }
    resultado.textContent = `Textos de los elementos con clase 'elementoClase': ${texto.trim()}`;
    console.log(texto);
}

// Función para encontrar elementos mediante selectores CSS
function encontrarPorSelector() {
    // Busca el primer elemento que coincida con el selector CSS dado
    const elemento = document.querySelector(".contenedor-selector .selectorCSS");
    const resultado = document.getElementById("resultadoSelector");
    resultado.textContent = `Texto del elemento con selector CSS '.contenedor-selector .selectorCSS': ${elemento.textContent}`;
    console.log(elemento.textContent);
}

// Función para encontrar elementos por colecciones de objetos HTML
function encontrarPorColeccion() {
    // Selecciona todos los elementos de la colección especificada
    const coleccion = document.querySelectorAll(".coleccionHTML li");
    const resultado = document.getElementById("resultadoColeccion");
    let texto = "";
    // Recorre cada elemento de la colección y concatena su contenido
    coleccion.forEach((elemento) => {
        texto += `${elemento.textContent} `;
    });
    resultado.textContent = `Textos de la colección de objetos HTML: ${texto.trim()}`;
    console.log(texto);
}


/*
parseInt:
Convierte un valor de tipo string en un número entero. Toma dos parámetros: el valor a convertir y la base numérica (generalmente en base 10). Si no se puede convertir a un número, devuelve NaN (Not a Number).
*/

/*
isNaN:
Verifica si el valor proporcionado es NaN (Not a Number). Retorna true si el valor es NaN, de lo contrario, retorna false.
*/

/*
document.getElementById:
Devuelve una referencia al elemento HTML que tiene el id especificado. Si no se encuentra un elemento con ese id, devuelve null.
*/

/*
document.getElementsByTagName:
Devuelve una colección de elementos (HTMLCollection) que tienen el nombre de etiqueta especificado (por ejemplo, "p" para párrafos). Esta colección es similar a un array, pero no es exactamente un array.
*/

/*
document.getElementsByClassName:
Devuelve una colección de todos los elementos que tienen la clase CSS especificada. La colección es similar a un array y permite acceder a cada elemento por índice.
*/

/*
document.querySelector:
Devuelve el primer elemento que coincide con el selector CSS especificado. Si no se encuentra un elemento, devuelve null.
*/

/*
document.querySelectorAll:
Devuelve una lista estática de todos los elementos que coinciden con el selector CSS especificado. Esta lista es un NodeList, que permite recorrerla utilizando bucles o métodos de arrays.
*/

/*
document.createElement:
Crea un nuevo elemento HTML con el nombre de etiqueta especificado (por ejemplo, "p" para un párrafo). Este elemento es dinámico y puede ser agregado al DOM.
*/

/*
innerText:
Propiedad utilizada para establecer o devolver el texto de un elemento. A diferencia de innerHTML, innerText solo manipula el contenido textual y no se interpreta como HTML.
*/

/*
Array.push:
Método que agrega uno o más elementos al final de un array. Devuelve la nueva longitud del array.
*/

/*
Array.join:
Convierte todos los elementos de un array en una cadena de texto, utilizando un separador especificado. Si no se proporciona un separador, se usa una coma (",") por defecto.
*/

/*
Number.isFinite:
Determina si un valor numérico es un número finito. Devuelve true si el valor es finito, de lo contrario, devuelve false.
*/

/*
Number.parseInt:
Método que convierte un valor en un número entero en la base especificada (generalmente base 10).
*/

/*
toFixed:
Método utilizado para formatear un número con un número específico de dígitos después del punto decimal. Devuelve una cadena de texto.
*/

/*
Math.sqrt:
Calcula la raíz cuadrada de un número y devuelve el resultado.
*/

/*
Math.pow:
Calcula la potencia de un número, tomando dos parámetros: la base y el exponente. Por ejemplo, Math.pow(2, 3) devuelve 8.
*/

/*
Math.random:
Genera un número aleatorio entre 0 y 1 (no incluye el 1). Es comúnmente utilizado para generar valores aleatorios en un rango determinado.
*/

/*
Date:
Objeto que representa una fecha y hora. Cuando se crea un nuevo objeto Date(), representa la fecha y hora actuales.
*/

/*
getFullYear:
Método del objeto Date que devuelve el año completo de la fecha.
*/

/*
getMonth:
Método del objeto Date que devuelve el mes de la fecha en un formato de índice (0 para enero, 11 para diciembre).
*/

/*
getDate:
Método del objeto Date que devuelve el día del mes (del 1 al 31) de la fecha.
*/

/*
toUpperCase:
Método del objeto String que convierte una cadena de texto a mayúsculas y devuelve la cadena resultante.
*/

/*
replace:
Método del objeto String que reemplaza una subcadena por otra y devuelve la nueva cadena de texto.
*/

/*
ArrayBuffer:
Objeto que representa un área de memoria sin formato y se usa para crear vistas tipadas, como Int32Array.
*/

/*
Int32Array:
Vista tipada que permite trabajar con un array de enteros de 32 bits dentro de un ArrayBuffer. Cada elemento es un número entero con signo de 32 bits.
*/
/*
Resultado de un operador lógico AND (&&):
Devuelve true si ambos operandos son true. Si uno de los operandos es false, devuelve false.
*/

/*
Resultado de un operador lógico OR (||):
Devuelve true si al menos uno de los operandos es true. Si ambos operandos son false, devuelve false.
*/

/*
Resultado de un operador lógico NOT (!):
Invierte el valor lógico de un operando. Si el operando es true, devuelve false, y viceversa.
*/

/*
switch:
Estructura de control que permite evaluar una expresión y ejecutar el código correspondiente según el caso coincidente. Si no se encuentra ningún caso coincidente, se ejecuta el bloque default.
*/

/*
try-catch-finally:
Estructura de manejo de excepciones. El bloque try contiene el código que puede lanzar una excepción, el bloque catch maneja las excepciones lanzadas, y el bloque finally contiene el código que se ejecuta siempre, independientemente de si ocurrió una excepción o no.
*/

/*
throw:
Instrucción que lanza una excepción definida por el programador. Puede lanzar un objeto de tipo Error o cualquiera de sus subclases.
*/

/*
console.log:
Método que imprime información en la consola del navegador o entorno de desarrollo, útil para depuración y pruebas.
*/

/*
for:
Bucle que se utiliza para repetir un bloque de código un número determinado de veces. Se define con una condición inicial, una condición de continuación y una actualización en cada iteración.
*/

/*
while:
Bucle que se ejecuta mientras una condición sea verdadera. La condición se evalúa antes de ejecutar el bloque de código.
*/

/*
do...while:
Bucle que se ejecuta al menos una vez, y luego repite la ejecución mientras la condición sea verdadera. La condición se evalúa después de ejecutar el bloque de código.
*/

/*
Array.length:
Propiedad que devuelve el número de elementos en un array.
*/

/*
Array.forEach:
Método que ejecuta una función proporcionada una vez por cada elemento en un array.
*/

/*
NodeList:
Colección de nodos (elementos HTML) devuelta por métodos como querySelectorAll. Es similar a un array, pero no tiene todas las propiedades de un array.
*/

/*
Object.create:
Método que crea un nuevo objeto utilizando un prototipo especificado como base.
*/

/*
instanceof:
Operador que comprueba si un objeto es una instancia de una clase o de una función constructora.
*/

/*
AggregateError:
Objeto de error introducido en ES2021, que representa un conjunto de errores agrupados en un solo error. Puede contener múltiples errores y proporciona una propiedad 'errors' para acceder a ellos.
*/

/*
RangeError:
Objeto de error que representa un error cuando un valor numérico está fuera del rango permitido.
*/

/*
TypeError:
Objeto de error que representa un error cuando un valor no es del tipo esperado.
*/

/*
ReferenceError:
Objeto de error que representa un error cuando se intenta acceder a una variable que no ha sido declarada.
*/

/*
SyntaxError:
Objeto de error que representa un error de sintaxis en el código JavaScript.
*/

/*
URIError:
Objeto de error que representa un error al codificar o decodificar una URI mal formada.
*/

/*
Error:
Clase base para crear objetos de error en JavaScript. Los errores específicos como TypeError, RangeError y otros heredan de esta clase.
*/
