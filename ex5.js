/**
 * CUAN VIEJO/A VOY A SER?
 *
 * Completa el script para que, estableciendo tu año de nacimiento, el programa muestre por pantalla el próximo mensaje, en función de tu edad de nacimiento. Es decir, si yo he nacido en 1982. el mensaje debería ser el siguiente:
 * 
 * "En el año {futureYear} yo voy a tener 67 o 68  años"
 * 
 * 
 */

 let futureYear = 2050;
 let birthYear = 1990;

 let message = "En el año" + " " + futureYear + " " + " yo voy a tener" + " " + (futureYear - birthYear -1) + " " + "o" + " " + (futureYear - birthYear) + " " + "años";

 console.log(message);
 

