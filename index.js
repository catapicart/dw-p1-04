/* Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

- Promedio de edad general
- Promedio de edad de las mujeres
- Promedio de edad de los hombres
- Porcentaje de mujeres menores a 21 años
- Porcentaje de hombres mayores a 21 años
- La mayor edad ingresada de las mujeres
- La menor edad ingresada de los hombres

Los tres valores ingresados deben ser validados según corresponda*/

/*contador*/
var cantPersonas = 0;
var cantMujeres = 0;
var cantMujeresMenores = 0;
var cantHombres = 0;
var cantHombresMayores = 0;
/* Acumuladores*/
var acumEdad = 0;
var acumEdadMujer = 0;
var acumEdadHombre = 0;
/*Min y max*/
var max = undefined;
var min = undefined;

do{
    var dato_ciudad = prompt("Ingrese su ciudad"); 

do{
    var dato_sexo = prompt("Ingrese su sexo (h o m)");

}while(!((dato_sexo == "h") || (dato_sexo == "m"))) /*Validación: Necesitamos que se ingrese "h" o "m", entonces el do va a pedirlo while lo que se ingrese sea distinto (!) de lo que se necesita especificamente */

do{
    var edad = parseInt(prompt("Ingrese su edad (0 a 110)"));

}while(!((edad >= 0) && (edad <= 110))) /*Se necesita si o si un número entre esos dos valores, entonces se lo va a pedir hasta que se ingrese un numero que cumpla con ambas condiciones (&&)*/

cantPersonas++;
acumEdad = edad + acumEdad;

if(dato_sexo == "m"){   /*Si ingreso mujer */
    
    cantMujeres++; /*Se suma 1 a la cant de mujeres total */
    acumEdadMujer = edad + acumEdadMujer; /*Se acumulan las edades.  edad (10) + acumEdadMujer (0) = acumEdadMujer (10)  */

    if(edad <= 21){

        cantMujeresMenores++;
    }
    if(edad > max || max === undefined) { /*Si la edad está sin definir todavía, toma el valor ingresado como max, si el numero ingresado es mayor al guardado como max se actualiza*/
        max = edad;    
    }
}

else{ /*Si se ingreso h en vez de m*/

    cantHombres++;
    acumEdadHombre = edad + acumEdadHombre;

    if(edad >= 21){ /*Si la edad es mayor o igual a 21 agregarlo al contador de hombres mayores*/

        cantHombresMayores++;
 
    }
    if(edad < min || min === undefined) {
        min = edad;
    }  
}

}while(confirm("¿Seguir?") )


document.write(`- Promedio de edad general: ${acumEdad / cantPersonas}<br>
    - Promedio de edad de las mujeres: ${acumEdadMujer / cantMujeres}<br>
    - Promedio de edad de los hombres: ${acumEdadHombre / cantHombres}<br>
    - Porcentaje de mujeres menores a 21 años: ${((cantMujeresMenores / cantMujeres) * 100).toFixed(0)}%<br>
    - Porcentaje de hombres mayores a 21 años: ${((cantHombresMayores / cantHombres) * 100).toFixed(0)}%<br>
    - La mayor edad ingresada de las mujeres: ${max}<br>
    - La menor edad ingresada de los hombres: ${min}`)

    /*Para sacar porcentaje: cantidad de casos / cantidad total * 100, toFixed para arreglar los decimales */