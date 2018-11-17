import Action from '../modal/Action.js';
import formidable from 'formidable';
import {createContainer,upload} from '../utils/azureBlob.js';
import {sendMail} from '../utils/MailSender.js';
export const registerMessage = (req,res) => {
 var action=new Action({place:req.query.place,device:req.query.device,action:req.query.action});
 action.save(function (err) {
   if (err) return handleError(err);
   // saved!
   
   //console.log("Message Saved Sucessfully"+req.params);
 })
      sendMail("aboutjafeer@gmail.com","Device Event triggered","Event\n"+action);
    res.send("Thanks For Contacting Me!");
}