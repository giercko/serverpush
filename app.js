var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handler = {}
handler["/"] = requestHandlers.ocupado;
handler["/formulario"] = requestHandlers.notificacion_personalizada;
handler["/enviar"] = requestHandlers.enviar;
handler["/enviar_personalizado"] = requestHandlers.enviar_personalizado;

server.start(router.route, handler);