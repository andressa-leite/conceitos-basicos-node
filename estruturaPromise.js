const promesaCumplida = true
/*aqui estamos colocando true ou false para testarmos no terminal o que acontence no then. 
Se ali em cima colocamos true o then vai dar mensagem de sucesso e se colocamos false da mensagem de reject*/

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('Promesa cumplida!');
        } else {
            reject('Promesa Rechazada')
        }
    }, 3000);
});

/*a função then se associa somente ao êxito e não ao reject
miPromesa.then((valor) => {
    console.log(valor);
}); */


const manejarPromesaCumplida = (valor) => {
    console.log(valor);
} 

const manejarPromesaRchazada = (razonRechazo) => {
    console.log(razonRechazo);
} 

miPromesa.then(manejarPromesaCumplida, manejarPromesaRchazada);