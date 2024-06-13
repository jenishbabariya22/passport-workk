
const user = require('../models/user')

let login = async (req, res) => {
    return res.render("login")
}

let index = async (req, res) => {
    return res.redirect('/dashboard')
}

let dashboard = async (req, res) => {
    return res.render('dashboard')
}

let register = async (req, res) => {
    return res.render("register")
}

let RegisterUser = async (req, res) => {
    try {
        let userr = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log("User create");
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = {
    login, index, register, dashboard, RegisterUser
}