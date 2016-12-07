var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handler = {}
handler["/"] = requestHandlers.a_donde_vas;
handler["/a_donde_vas"] = requestHandlers.a_donde_vas;
handler["/disimula_disimula"] = requestHandlers.disimula_disimula;
handler["/quieneres"] = requestHandlers.quieneres;
handler["/enviar"] = requestHandlers.enviar;

server.start(router.route, handler);