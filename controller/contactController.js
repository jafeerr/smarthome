import Action from '../modal/Action.js';
import formidable from 'formidable';
import {sendMail} from '../utils/MailSender.js';
export const registerMessage = (req,res) => {
  var result=req.body.queryResult.parameters
  console.log("debug"+result.action)
 var action=new Action({place:result.place,device:result.device,action:result.action});
 action.save(function (err) {
   if (err) return handleError(err);
   // saved!
   
   //console.log("Message Saved Sucessfully"+req.params);
 })
      sendMail("aboutjafeer@gmail.com","Device Event triggered","Event\n"+action);
    res.send("Thanks For Contacting Me!");
}
export const getLatestAction = (req,res) => {

  Action.find({}, function(error, actions) {
    var action=actions[0].place+":"+actions[0].device+":"+actions[0].action
    res.send(action)
});
}