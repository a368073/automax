const http = require('http');
const fs = require('fs');

// HTTP => (request, response)

http.createServer((request, response) => {
    // Si la url es '/' cargar landing page (index.html)
    // Si no, cargar archivo según ruta en carpeta WWW
    const file = request.url == '/' ?
        './WWW/index.html' : `./WWW${request.url}`;

    fs.readFile(file, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("No se concontró la página");
            response.end();
        } else {
            // Obtener la extensión para saber Content-Type
            const ext = request.url == '/' ? 'html' : request.url.split('.').pop();
            switch (ext) {
                case 'html':
                    response.writeHead(200, { "Content-Type": "text/html" });
                    break;
                case 'css':
                    response.writeHead(200, { "Content-Type": "text/css" });
                    break;
                case 'js':
                    response.writeHead(200, { "Content-Type": "application/javascript" });
                    break;
                case 'png':
                    response.writeHead(200, { "Content-Type": "image/png" });
                    break;
                case 'jpg':
                case 'jpeg':
                    response.writeHead(200, { "Content-Type": "image/jpeg" });
                    break;
                default:
                    response.writeHead(200, { "Content-Type": "text/plain" });
            }
            response.write(data);
            response.end();
        }
    });
}).listen(8888);
