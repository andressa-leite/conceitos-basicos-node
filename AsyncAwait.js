/*TODAS AS FUNÇÕES COM ASYNC RETORNAM UMA PROMESSA,
O AWAIT ESTÁ DIZENDO QUE ESPERE ATÉ QUE ESTE PROCESSO SE COMPLETE
E A PROMESSA SE CUMPRA OU SEJA REJEITADA ANTES DE CONTINUAR A EXECUÇÃO DA FUNÇÃO*/


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



async function realizarPedido (producto) {
     try{
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
     } catch (error) {
        console.log(error);
     }

}

realizarPedido('taza');