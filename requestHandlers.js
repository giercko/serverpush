var querystring = require("querystring");
var notify = require("./notify");

function a_donde_vas(response) {
    console.log("Handler for request 'a_donde_vas' dispatched.");
    var html = '<html>'+
        '    <head>'+
        '        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
        '    </head>'+
        '    <body>'+
        '        <form action="/enviar" method="post">'+
        '            <p><label for="regID">Escribe el id del dispositivo: </label></p>'+
        '            <input type="text" name="regID" id="regID" />'+
        '            <p><label for="title">Escribe el titulo de la notificacion: </label></p>'+
        '            <input type="text" name="title" id="title" />'+
        '            <p><label for="msg">Escribe el mensaje de la notificacion: </label></p>'+
        '            <textarea name="msg" id="msg"></textarea>'+
        '            <p><input type="submit" value="Enviar" /></p>'+
        '        </form>'+
        '    </body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}
function disimula_disimula(response) {
    console.log("Handler for request 'disimuladisimula' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Y la mula dijo si");
    response.end();
}
function quieneres(response){
	console.log("Handler for request 'quieneres' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("que quieres");
    response.end();
}


function enviar(response, postData) {
    postData = querystring.parse(postData);
    console.log(postData);
	notify.send_push(postData.nullregID, postData.msg, postData.title);
	
    console.log("Handler for request 'enviar' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Notificacion enviada correctamente</p>");
    response.end();
}

exports.a_donde_vas = a_donde_vas;
exports.disimula_disimula = disimula_disimula;
exports.quieneres = quieneres;
exports.enviar = enviar;