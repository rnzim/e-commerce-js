const knex = require('../database/database')
class UserPurchases{
   async buyItem(idClient,idProduct){
      try {
        var result = await knex.insert({id_user:idClient
         ,id_product:idProduct,
         status_product:1,
         id_payment:54,
         aproved:1}
          ).table("purchase")
        return result
      } catch (error) {
         throw error
      }
   }
   async viewBuys(id){
      try {
         var result = await knex.
         raw("select u.username,pd.name_product,pd.pricing from users u join purchase p on u.id = p.id_user join products pd on pd.id = id_product WHERE u.id ="+id)
         return result
      } catch (error) {
         throw error
      }
   }
   
}

module.exports = new UserPurchases