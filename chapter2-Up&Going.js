//cosas raras que hace js

var a = "";
var c = 2;

console.log("" + c);

//dot notation vs bracket notation to access objects.
//var b is another weir js thing.
var b = "a";

var obj = {
	a: "hello",
	b: 43,
	c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj["c"]);



console.log(obj[b]);
console.log(obj["b"]);

/*arrays are (a specialized version of) objects que contiene valores en posiciones numéricas indexadas más que valores con propiedad/key,
aunque puede contenerlos de cualuier tipo*/
var array = [
	"hello array",
	24,
	true

];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(typeof array);

//Methods nativos y formas primitivas de valores. Hay métodos que llevan detrás definidos prototipos/objetos que no vemos.
var a = "hello world";
var b = 24;

console.log(a.length);

console.log(a.toUpperCase());
console.log(b.toFixed(1));

//COMPARING VALUES

//Explicit coertion: cuando lo ves perfectamente el cambio de un type a otro en el código
var a = "42";

var b = Number( a );

console.log( a ); //42 String
console.log( b ); // 42 the Number

//Implicit coertion: cuando no ves claramente en el código que el type vaya a cambiar. 
//console.log(JSON.stringify("24"))
var a = "42";
var b = a * 2; //cambia a number porque lo multiplico. 

console.log( a );
console.log( b );

/* Truthy y Falsy: cuando un valor no booleano es cohercido a un booleano, se convierte en falsy or truthy respectivamente. 
Solo siguen estas reglas cuando son no booleanos a los que se les coercita a ser booleanos.
Cuando cohercionas a valores lógicos a no serlo o viceversa.

Falsy: todos los string vacíos; 0 - 0 NaN; null, undefined; false (todos los que son cero)
Truty: strings llenos; números diferentes a 0, [], [1,3,"4"] arrays; {}, { a: 23 } objetos; function foo(){...} funciones. 
(todo lo que es 1)
*/

var a = "hello";
var b = 0;
var c = true;
var d = [1,2,3];
var e = NaN;

if(a === e) {
	console.log( "true" );
}

else {
	console.log( "false" )
};

/*Comparision: Equality (== ===)and
non-equality (!== !===)*/
var a = 24;
var b = "24"

// == LOOSE EQUALITY: checks for value equality with coertion allowed. Checks true: stirng. String value becomes Number value and 24 is equal.
console.log(a == b);

// === STRICT EQUALITY: checks for value without allowing coertion and for type equality. Checks false.
console.log(a === b);

//Comparision con valores no primitivos como arrays y funciones, los dos comprueban si la referencia coincide (nada sobre su valor ni type)
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

console.log( a == c ); //es true porque un Array coerce a String, manteniendo las comas entre los números.
console.log( a === c ); //Habrá que ver por qué es false si dice que los dos hacen lo mismo???
console.log( b == c ); //es true porque un Array coerce a String, manteniendo las comas entre los números.
console.log( a == b ); //es false porque no son el mismo "objeto" o referencia en memoria.

/*Comparision: INEQUALITY are relational comparison. Se usan normalmente con números (<, >, <=, >=)
Aunque se pueden comparar Strings usando reglas alfabéticas.*/
var a = 41;
var b = "42";
var c = "23";

console.log( a < b ); //Si solo uno de los dos es String, lo coerce a Number.
console.log( c > b); //Si los dos valores de la comparación son Strings, la comparación se hace alfabéticamente. 





