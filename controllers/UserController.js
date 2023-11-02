const User = require('../models/User')
const bcrypt = require('bcrypt')
class UserController{
    async registerUser(req,res){
        var {
            fullname,
            username,
            email,
            pass,
            sald,
            seller,
            registration_date,

        }
         = req.body
         var hash = await bcrypt.hash(pass,8)
         try{
          var result = await User.createUser({
            fullname,
            username,
            email,
            pass:hash,
            sald,
            seller,
            registration_date,
          })
          res.status(200).send('ok')
         }catch(erro){
            console.log(erro)
            res.status(500)
         }
    }
    async loginUser(req,res){
        var email = req.body.email
        var user = await User.findByEmail(email)
        console.log(user)
        res.status(200)
    }
}
module.exports = new UserController