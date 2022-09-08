const miUrl = new URL('www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=baciso');

console.log(miUrl.hostname); // aparece no terminal: www.ejemplo.org
console.log(miUrl.pathname); //  /cursos/programacion
console.log(miUrl.searchParams); // {'ordenar' => 'vistas', 'nivel' => '1'} 
console.log(typeof miUrl.hostname); //object
console.log(miUrl.searchParams.get('ordenar')); // 'vistas'
console.log(miUrl.searchParams.get('nivel')); // 1   
console.log(miUrl.protocol); //https:
