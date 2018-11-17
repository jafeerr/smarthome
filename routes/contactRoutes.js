import {registerMessage} from '../controller/contactController.js';
import azureBlob from '../utils/azureBlob.js';
import formidable  from  'formidable';
export default (server) => {
    server.get('/submitAction', function(req, res){
        registerMessage(req,res);
      });
}