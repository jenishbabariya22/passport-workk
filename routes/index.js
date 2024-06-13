let express = require("express")
const { login, index, dashboard, register, RegisterUser } = require("../controllers/AuthController")

let routes = express.Router()

routes.get('/', login)
routes.post('/LoginUser', index)
routes.get('/dashboard', dashboard)
routes.post('/RegisterUser', RegisterUser)
routes.get('/register', register)

module.exports = routes