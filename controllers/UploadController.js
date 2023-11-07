const User = require('../models/User')
class UploadController{

    async uploadPhoto(req,res,){
       var name = req.name_file
       var id = req.userToken.id
       if(name != undefined){
        try {
          var result =  await User.editPhotoProfile(id,name)
          if(result >0){
            res.status(200).json({msg:"Upload Com Sucesso"})
          }else{
            res.send(409).json({msg:"Erro Desconhecido"})
          }
          console.log(result)
        } catch (error) {
            res.status(409)
        }
        
       }
    }
}
module.exports = new UploadController