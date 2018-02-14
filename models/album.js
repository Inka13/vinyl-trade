const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const albumSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title:  { type : String , required : true },
	artist:  { type: String , required : true },
	category: { type: String },
	year: { type : String },
	state: [ { type: String } ],
	owners:[ { type: mongoose.Schema.Types.ObjectId, ref : 'User' } ],
});

module.exports = mongoose.model('Album', albumSchema);
