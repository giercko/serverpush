var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handler = {}
handler["/"] = requestHandlers.formulario;
handler["/formulario"] = requestHandlers.formulario;
handler["/enviar"] = requestHandlers.enviar;

server.start(router.route, handler);