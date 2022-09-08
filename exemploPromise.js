const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
}

const miPedidoDePizza =  new Promise ((resolve, reject) =>{
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido exitoso! Su pizza esta en camino')
        } else {
            reject('Ocurio un error. Por favor intente nuevamente')
        }
    }, 3000);
});

/* const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(mensajeDeConfirmacion, mensajeDeError)
*/

//o codigo comentado acima é igual ao que está aqui abaixo

miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion)
    })
    /*.then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });*/
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

    //usar o then e o catch é um method chaining
