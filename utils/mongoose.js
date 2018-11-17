import mongoose from 'mongoose';
export default ()=>
{
mongoose.connect('mongodb://root:root123@ds163683.mlab.com:63683/smart_home');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose Conection! Open")
});
return mongoose;
}
//module.export =mongoose;
