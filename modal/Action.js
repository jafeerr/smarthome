import Mongoose from '../utils/mongoose';
var mongoose = Mongoose();
var Schema = mongoose.Schema;
var actionSchema = Schema({
  place:String,
  device:String,
  action:String
});
var Action=mongoose.model('action', actionSchema);
module.exports = Action;