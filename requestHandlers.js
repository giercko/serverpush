var querystring = require("querystring");
var notify = require("./notify");

function notificacion_personalizada(response) {
    console.log("Handler for request 'notificacion_personalizada' dispatched.");
    var html = '<html>'+
        '    <head>'+
        '        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
        '    </head>'+
        '    <body>'+
        '        <form action="/enviar_personalizado" method="post">'+
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

function ocupado(response){
	console.log("Handler for request 'notificacion_ocupado' dispatched.");
    var html = '<html>'+
        '    <head>'+
        '        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
        '    </head>'+
        '    <body>'+
        '        <form action="/enviar" method="post">'+
        '            <p><label for="regID">Escribe el id del dispositivo: </label></p>'+
        '            <input type="text" name="regID" id="regID" ></textarea>'+
        '            <p><input type="submit" value="Enviar" /></p>'+
        '        </form>'+
        '    </body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}

function enviar_personalizado(response, postData) {
    postData = querystring.parse(postData);
    console.log(postData);
	notify.send_push(postData.nullregID, postData.msg, postData.title);
	
    console.log("Handler for request 'enviar' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Notificacion enviada correctamente</p>");
    response.end();
}
function enviar(response, postData) {
    postData = querystring.parse(postData);
    console.log(postData);
	a = new Date();
	notify.send_push(postData.nullregID, a, "Usaste un almuerzo");
	
    console.log("Handler for request 'enviar' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Notificacion enviada correctamente</p>");
    response.end();
}

exports.ocupado = ocupado;
exports.notificacion_personalizada = notificacion_personalizada;
exports.enviar = enviar;
exports.enviar_personalizado = enviar_personalizado;