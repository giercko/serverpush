var gcm = require('node-gcm');
var sender = new gcm.Sender('AIzaSyDOZ0MT28iyjKK5vSQ-WC7SNjXbRx00zkg');

var registrationIds = [];
//Creamos el mensaje a enviar

var message = new gcm.Message();
message.addData('message',"Prueba 1 notificaciones");
message.addData('title','Almuerzo utilizado');


message.timeToLive = 3000; //tiempo que se mantendra "vivo" la notificacion, en segundos, por defecto 4 semanas (2419200)
//agregar en push el string con token geenerado en  la app
registrationIds.push('APA91bEB8XGuP5njtvie-dAuMij8U4w-pxmw-udYthJCemJsmIYBZ8vjwO64Gjum2iip-0HvYXWdTOY4Z5I45-8TD0Siu3H2KtAYc3vZLR90nWLp07yRiOPP0nTAcUQY4ycrRbDSGs8n2LH3i8rzt2UffSssuh0WQQ');

sender.send(message, registrationIds, 4, function(err, response){
	if(err){
		console.error(err);
	} else{
		console.log(response);
	}
});