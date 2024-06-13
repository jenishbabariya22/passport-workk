let port = 8000

let express = require("express")

let app = express()

app.set("view engine", 'ejs')

const db = require('./config/db')

let passport = require("passport")

let passportLocal = require('./config/passportlocalstrategy')

let session = require("express-session")

app.use(session({
    name: 'rnw',
    secret: 'milansir',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 100
    }
}))

app.use(express.urlencoded())

app.use(passport.initialize())

app.use(passport.session())

app.use('/', require("./routes"))

app.listen(port, (err) => {
    if (err) {
        console.log("error server", port);
    }
    console.log("server start", port);
})