const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('===> req (solicitud)')
    console.log(req.url)
    console.log(req.method)

    res.setHeader('content type', 'application/json') // nos permite configurar o cabeçalho
    console.log(res.getHeaders());

    res.end('Hola mundo')
    console.log(res('===> res (respuesta)'))
    console.log(res.statusCode) // 200 ok
});

//res.statusCode = 404 posso colocar o status de proposito de acordo com o que eu quero

const puerto = 3000

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}`)
});

//instalar a extensão REST CLIENT para testar as reqs http