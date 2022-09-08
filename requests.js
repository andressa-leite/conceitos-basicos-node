//as 4 horas e 22 minutos temos os métodos de request http, escrever os significados em outro arquivo

//as 4 horas e 29 minutos anotar o codigo dos erros, no minuto 30 mostra onde consigo copiar e os mais comuns estão em 34,5 min

//AS 4 E 42 ESTÁ O PRIMEIRO SERVIDOR
//O PRIMEIRO PARAMETRO DO LISTEN É A PORTA E A FUNÇÃO É O QUE O SERVIDOR DEVE "ESCUTAR" 

const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola mundo');
});

servidor.listen(3000, () => {
    console.log('El servidor está escuchando...')
});

/*const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola mundo');
});

const porta = 3000

servidor.listen(porta, () => {
    console.log(`El servidor está escuchando en http://localhost: ${porta}`)
});  */