import {registerMessage} from '../controller/contactController.js';
export default (server) => {
    server.get('/submitAction', function(req, res){
        registerMessage(req,res);
      });
}