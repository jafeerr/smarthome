import nodemailer from 'nodemailer';
export const sendMail =(toMail,subject,text)=>
{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jafeeralin@gmail.com',
      pass: 'jaff@123'
       }
   });    var mailOptions = {
        from: 'jafeeralin@gmail.com',
        to: toMail,
        subject: subject,
        text: text
      };
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
        log.info('Mail sending failed', error);
        }});
}