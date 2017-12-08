
/*
 * GET home page.
 */
var setupController = require('../controllers/setupController');
var apiController = require('../controllers/apiController');
var Todos = require('../models/todoModel');
var Catalog = require('../models/catalogModel');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


module.exports = function(app){
	//API's
	app.get('/catalog/all',function (req,res){
			
			Catalog.find(function(err,results){
				if(err) throw err;
				res.send(results);
			})
		});
	app.get('/api2/:id', function(req, res){
		console.log(req.params.id);
		res.json({firstname: 'John', lastname: 'Doe', ID: req.params.id});
	});
	app.get('/api2',function(req,res) {
		console.log("BOI");
		res.send("");
	});
	app.get('/api3', function(req,res){
		console.log("YO DAWG");
		res.json({firstname: 'Joni', lastname: 'Depth'});
	});
	app.get('/crud', function(req,res){
		res.render('../views/CRUDPage.ejs');
	});
//	app.get('/catalog', function (req, res){
//		res.render('../views/catalog.ejs');
//	});
	app.get('*',function(req,res){
		console.log("DETECTED!");
		res.sendfile('app_client/views/index.html');
	});
	
	

	setupController(app);
	apiController(app);
};