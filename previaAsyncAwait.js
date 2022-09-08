function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`ordenando: ${producto} de freecodecamp`)
    });
    setTimeout(() => {
        if (producto == 'taza'){
            resolve('ordenando una taza con el logo de freecodecamp');
        } else {
            reject('Este producto no esta disponible actualmente');
        }
    }, 2000);
}

function procesarPedido(respuesta){
    return new Promise((resolve /*, reject*/) => {  //o reject pode ser colocado ou não, não é obrigatório, e os parenteses tb não são obrigatórios quando só tiver um parâmetro
        console.log('procesando respuesta');
        console.log(`la respuesta fue: "${respuesta}" `);
        setTimeout(()=>{
            resolve('Gracias por su compra. Disfruta su producto de freecodecamp')
        }, 3000)
    });
}

ordenarProducto('taza')
    .then((respuesta) => {
        console.log('Respuesta recibida')
        return procesarPedido(respuesta);
    })
    .then((respuestaProcesada) => {
        console.log(respuestaProcesada);
    })
    .catch((error) => {
        console.log(error);
    })

    /*Basicamente o async await é uma cadeia de promesas que vão ser executadas na ordem que vc colocar, 
    como no exemplo do código que começa na linha 24 aqui acima*/