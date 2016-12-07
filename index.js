var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

var notify = require('./notify');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/students')(app, mongoose);
var StudentCtrl = require('./controllers/student');

var router = express.Router();

// Index
router.get('/', function(req, res) { 
 res.send("Prueba push");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/students') 
 .get(StudentCtrl.findAll)
 .post(StudentCtrl.add);

api.route('/students/:id') 
 .get(StudentCtrl.findById)
 .put(StudentCtrl.update)
 .delete(StudentCtrl.delete);

app.use('/api', api);


notify.send_push('APA91bEB8XGuP5njtvie-dAuMij8U4w-pxmw-udYthJCemJsmIYBZ8vjwO64Gjum2iip-0HvYXWdTOY4Z5I45-8TD0Siu3H2KtAYc3vZLR90nWLp07yRiOPP0nTAcUQY4ycrRbDSGs8n2LH3i8rzt2UffSssuh0WQQ');


// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});

 //DB connection
 
 mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});