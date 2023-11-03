const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'miznr'
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
          await User.createUser({
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
        var {email,pass} = req.body
        var user = await User.findByEmail(email)
        if(user.length > 0){
            var comparePass = await bcrypt.compare(pass,user[0].pass)
            if(comparePass){
                var token = jwt.sign({
                    id:user[0].id,
                    fullname:user[0].fullname,
                    username:user[0].username,
                    email:user[0].email,
                    seller:user[0].seller},secret,{expiresIn:'1h'})
                res.status(200).json({token})
            }else{
                res.status(401).send('password incorrect')
            }
           
        }else{
            res.status(404).send("Email Not Found")
        }
        
    }
}
module.exports = new UserController