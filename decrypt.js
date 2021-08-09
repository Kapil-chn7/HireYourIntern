const bcrypt=require('bcrypt');


// async function decrypt(someOtherPlaintextPassword){
    
//     bcrypt.compare("hello",someOtherPlaintextPassword ).then(function(result) {
//     // result == false
//     console.log("Inside of the decrypt",result);
//     return result;
// });
// }
const Cryptr = require('cryptr');
async function decrypt(password, Otherstring){

  return new Promise(async (resolve,reject)=>{
      console.log("Inside of the promise");
       
const cryptr = new Cryptr('$2b$10$tNj3LbpwF6z7CT6z3ILKXuW7IJTGWg8A.NDeuJoFpCjEfFQiWgh16');
 



// console.log("promise enctypy",encryptedString); // e7b75a472b65bc4a42e7b3f78833a4d00040beba796062bf7c13d9533b149e5ec3784813dc20348fdf248d28a2982df85b83d1109623bce45f08238f6ea9bd9bb5f406427b2a40f969802635b8907a0a57944f2c12f334bd081d5143a357c173a611e1b64a
// console.log("Promise dectypt",decryptedString); // bacon

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