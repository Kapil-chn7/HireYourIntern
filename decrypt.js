const bcrypt=require('bcrypt');


// }
const Cryptr = require('cryptr');
async function decrypt(password, Otherstring){

  return new Promise(async (resolve,reject)=>{
      console.log("Inside of the promise",password);
       
const cryptr = new Cryptr('$2b$10$tNj3LbpwF6z7CT6z3ILKXuW7IJTGWg8A.NDeuJoFpCjEfFQiWgh16');
 



if(Otherstring=='E'){
    console.log("This is the below")
    var encryptedString = await cryptr.encrypt(password);
    resolve(encryptedString);

}
else if(Otherstring=='D'){
    console.log("This is the above",password);
  try{
    var decryptedString = await cryptr.decrypt(password);
    
    resolve(decryptedString)
  }
  catch(err){
      console.log("This is the error",err);
      reject(false)
  }
}
  })



}

module.exports.decrypt=decrypt;