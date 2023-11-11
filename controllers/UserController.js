const User = require('../models/User')
const bcrypt = require('bcrypt')
const Payment = require('../models/Payment')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const secret = 'miznr'
class UserController{
    async meProfile(req,res){
        var p = await Payment.viewPaymentTrue(req.session.user.id)
        res.render('profile/profileUser.ejs',{user:req.session.user,products:p})
    }
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
    async login(req,res){
        res.render('user/login.ejs')
    }

    async loginUserSession(req,res){
        var {email,pass} = req.body
        var user = await User.findByEmail(email)
        if(user.length > 0){
            var comparePass = await bcrypt.compare(pass,user[0].pass)
            if(comparePass){
                req.session.user = ({
                    id:user[0].id,
                    fullname:user[0].fullname,
                    username:user[0].username,
                    email:user[0].email,
                    seller:user[0].seller})
                    res.redirect('/')
                   
            }else{
                res.send('senha errada')
            }
           
        }else{
            res.send('email not found')
        }
        
    }

    //api
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
                    seller:user[0].seller},secret,{expiresIn:'7d'})
                res.status(200).json({token})
            }else{
                res.status(401).send('password incorrect')
            }
           
        }else{
            res.status(404).send("Email Not Found")
        }
        
    }
    async viewUser(req,res){
        try{
            var result = await User.viewAllUser()
            res.json(result).status(200)
        }catch(error){
            throw error
        }
    }
    async updatePhotoProfiler(req,res){
        var id = req.userToken.id
        try{
            var result = await User.editPhotoProfile(id,name_photo)
            res.json(result).status(200)
        }catch(error){
            throw error
        }
    }
}
module.exports = new UserController