/* 
POST - Criar um registro novo (CREATE)
GET - Obter um recurso (READ)
PUT - Modificar um registro (UPDATE)
DELETE - Eliminar registros (DELETE)
*/

/* ROTA = método (o que?) + path (onde?) + como administrar a solicitação (como?)
   Foi instalada a extensão REST CLIENT aqui no VS code para fazer os testes das solicitações http
   Instalar no chrome uma extensão chamada JSON viewer 
   Para instalar NODEMON digitar: npm install -g nodemon
   NODEMON deve ser executado no command prompt porque os scripts não podem ser executados no powershell
*/


const { Console } = require('console');
const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPost(req, res);
            //abaixo o que acontece se não usamos get ou post
                default:
                    res.statusCode = 501;
                    res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);                   
    }
});


function manejarSolicitudGet(req, res) {
    const path = req.url;
    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end('Bien venidos a mi primer servidor y API creados con Node.js');
    } else if (path === '/cursos'){
        return res.end(JSON.stringify(cursos.infoCursos)); //stringfy transforma JSON em formato obj javascript
    } else if (path === '/cursos/programacion'){
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
    res.statusCode = 404;
    res.end('El recurso solicitado no existe...')
}

function manejarSolicitudPost(req, res) {
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data', (contenido)=> {
            cuerpo += contenido.toString();
        });
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo); //converter a um obj de javascript
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo)
            res.end('El servidor recibio una solicitud POST para /curso/programacion');
        })
        //return res.end('El servidor recibio una solicitud POST para /curso/programacion');
    }
}

const PUERTO = 2000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
});




