// require('dotenv').config();
const nodemailer=require('nodemailer');


const confirmation_email=function(OTPdetails)
{
return new Promise((resolve,reject)=>{



  // console.log(process.env.PASSWORD,process.env.EMAIL);
  console.log(OTPdetails,"OTP")
  const transporter=nodemailer.createTransport({

    service:'gmail',
    auth:{
      user: 'kapilchn7@gmail.com',
      pass: 'Kapil@123'
    }
  })

  const mailOptions={
    to:`${OTPdetails.useremail}`,
    from:'chatter.com',
    subject:'testing',
    text:"this is from the text",
    html:"HI"+" "+OTPdetails.username+" "+"your one time password is "+OTPdetails.OTP+" thanks for visiting us :)",
    


  }

  transporter.sendMail(mailOptions,function(err,data){
    if(err){
      console.log("this is an error in nodemailer ",err);
      reject('error')
    }
    else{
        console.log("sent",data);
        resolve("sent");
    }
  })


})

}

module.exports= confirmation_email;