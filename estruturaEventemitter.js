const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra $${total}`);
    console.log(`Numero de productos $${numProductos}`);
});

emisorProductos.emit('compra', 500, 5)

//event Handlers front x back end, instancia, classes,
//método on, método emit
//promises

