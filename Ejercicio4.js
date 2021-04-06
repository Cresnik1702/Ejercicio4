// En este ejercicio nos piden que solicitemos al usuario un número cualquiera y
// digamos si este número es par o inpar.

// El pseudocódigo es:

//  Proceso Ejercicio04
//  	Definir numero1 Como Real; 
		
//  	Escribir "Dame un número al Azar";
	
//  	Leer numero1;
	
//  	Si numero1 mod 2 = 0 Entonces
//  		Escribir "Tu Número es par";
//  	SiNo
//  		Escribir "Tu Número es par";
//  	FinSi
	
//  FinProceso


let num = parseInt (prompt ("Dame un número al azar"));

if ((num % 2) == 0) {
    
    console.log ("El número " + num + " es par.");

} else {

    console.log ("El número " + num + " es inpar.");

}