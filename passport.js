const googleStrategy=require('passport-google-oauth20').Strategy;
const localStrategy=require('passport-local').Strategy
const passport=require('passport');
const mongoose=require('mongoose')
const {User,signindata} = require('./database');







// passport.use(new localStrategy(
//     function(username, password, done) {
//       signindata.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//google authentication
passport.use(new googleStrategy({
    callbackURL:'http://localhost:5000/auth/google/redirect',
    clientID:'74755662919-9uthu46ev4a2hff3cti5t6cml19fqmcs.apps.googleusercontent.com',
    clientSecret:'JJTCE3QrhoJfpCR9Eb4CCc5O',
    proxy:true

}, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our own db

//    signindata.findOne({googleId: profile.id})
//    .then((currentUser) => {
//         if(currentUser){
//             // already have this user
//             console.log('user is: ', currentUser);
//             done(null, currentUser);
//         } else {
//             // if not, create user in our db
//             console.log("this is the profiel info",profile.id)
//             new signindata({
//                 _id:mongoose.Types.ObjectId(),
//                 googleId: profile.id,
//                 username: profile.displayName
//             }).save().then((newUser) => {
//                 console.log('created new user: ', newUser);
//                 done(null, newUser);
//             });
//         }
//     });


}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    signindata.findById(id).then((user) => {
        done(null, user);
    });
});