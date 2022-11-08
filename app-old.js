const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);

    // res.writeHead(201, { "Content-Type": "text/plain" });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(201, { "Content-Type": "application/csv" });


    

    res.write( 'Hola Mundo')

    res.end();

    
  })

  .listen(8080);

console.log("Escuchando el puerto", 8080);
