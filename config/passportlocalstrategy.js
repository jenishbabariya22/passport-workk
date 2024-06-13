const passport = require("passport")

let passportLocal = require('passport-local').Strategy

let UserModel = require('../models/user')

passport.use(new passportLocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let user = await UserModel.findOne({ email: 'email' })
        if (!user || user.password != password) {
            console.log("email and password are not valid");
            return done(null, false)
        }
        return done(null, user)
    } catch (error) {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/')
})

passport.CheckAuth = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated) {
        return next()
    }
    return res.redirect('/')
}

module.exports = passport

