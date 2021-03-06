var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var catalogSchema = new Schema({
	prodcode: String,
	prodname: String,
	prodtype: String,
	prodprice: Number,
	isavailable: Boolean,
	imgname: String,
	tags: [{
	    type: String
	}],
	prodcolor: String,
	prodbrand: String,
	prodsizes: [{
	    type: Number
	}],
	gender: String,
	ratercount: Number,
	rateavg: Number,
	salerate: Number,
	reviews: [{
		type: String
	}],
	proddesc: String
	
},{ collection : 'catalogdata' });

var Catalog = mongoose.model('Catalog', catalogSchema);

module.exports = Catalog;