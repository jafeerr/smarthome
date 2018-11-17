import contactRoutes from './contactRoutes.js';
//import User from '../modal/User.js';
export default (server) => {
    server.get('/', function(req, res){
        res.sendFile('./public/index.html');
      });
    //call all routes here
    contactRoutes(server);
}