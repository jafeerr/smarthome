import {registerMessage} from '../controller/contactController.js';
export default (server) => {
    server.get('/submitAction', function(req, res){
        console.log(req)
        registerMessage(req,res);
      });
      server.post('/submitAction1', function(req, res){
        console.log(req)
        registerMessage(req,res);
      });
}