const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    var auth = req.headers['authorization']
    var secret = "miznr"
    if(auth != undefined){
        var bearer = auth.split(" ")
        var token = bearer[1]
        try{
            var isvalid = jwt.verify(token,secret)
            if(Object.keys(isvalid).length > 0){
                if(isvalid.seller == 1){
                    req.userToken = isvalid
                    next()
                }else{
                    res.status(403).json({msg:"Voce nao e vendedor"})
                }
                
            }else{
                res.status(400).json({msg:"Token Desconecido"})
            }
           
        }catch(error){
            res.status(403).json({msg:"Token Invalido"})
        }
        

    }else{
        res.status(403).json({msg:"Token Vazio"})

    }
}