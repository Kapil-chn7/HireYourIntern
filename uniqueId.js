const bcrypt=require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'KapilChauhan@123';
const someOtherPlaintextPassword = 'not_bacon';
async function encrypt(password){ 


    const salt=await bcrypt.genSalt(10);
const passwordHash=await bcrypt.hash(password,salt);
return passwordHash;
   

}


module.exports.encrypt=encrypt;