const knex = require('../database/database')
class Product{
    //create a new product
    async createProduct(product){  
        try {
            if(product != undefined){
                var result = await knex.insert(product).table('products')  
                return result
            }
        } catch (error) {
            console.log(error)
            throw error
        }
        
    }
    //edit product
    async editProduct(id,name,desc,amount,pricing,img_name){
       
        var product = await this.findByIdProduct(id)
        console.log(product)
        if(product.length > 0){
           var editData = {
            name_product: name == undefined ? product.name_product : name,
            description_product: desc == undefined ? product[0].description_product : desc,
            amount: amount == undefined ? product[0].amount : amount,
            pricing:pricing == undefined ? product[0].pricing : pricing,
            img:img_name
           }
           try {
            var result = knex.update(editData).where({id:id}).table('products')
            return result
           } catch (error) {
             console.log(error)
           }
        }else{
            return {status:false,err:'product does not exist'}
        }
        
    }
    //delete product
    async deleteProduct(id){
       try {
         await knex.delete().where({id:id}).table("products")
         return {status:true}
       } catch (error) {
        return {status:false,error}
       }
    }
    //preview in home page
    async previewProduct(){
        try {
            var result = await knex.select("name_product","pricing","img","id_seller").table('products')
            return result
        } catch (error) {
            console.log(error)
            return[]
        }
     
    }
    async viewProduct(){
        try {
            var result = await knex.select(["products.*","seller.name_store"])
            .table('products')
            .innerJoin('seller','seller.id','products.id_seller')
            .orderBy('products.id', 'desc')
            return result
        } catch (error) {
            console.log(error)
            return[]
        }
     
    }
    async findByIdProduct(id){
        try{
            var result = await knex.select(["products.*","seller.name_store"]).table('products')
            .innerJoin('seller','seller.id','products.id_seller').where({"products.id":id})
            return result
        }catch(error){
            console.log(error)
            return []
        }
    }
    async seachProductByName(name){
        try {
            var result = await knex.select(["products.*","seller.name_store"]).table("products")
            .whereRaw('name_product like ?', [`%${name}%`])
            .orWhere('description_product ', 'like', `%${name}%`).innerJoin('seller','seller.id','products.id_seller')
            
            return result
        } catch (error) {
            throw error            
        }
    }
    async viewMyProducts(id){
        try {
            var result = await knex.select("*").where({id_seller:id})
            .table('products').orderBy('products.id', 'desc')
            return result
        } catch (error) {
            console.log(error)
            return[]
        }
     
    }
    async setSold(id){
      try {
        var result = await knex.increment('sold',1)
        .where({id:id}).table("products")
        return result
      } catch (error) {
        throw error
      }
    }
}
module.exports = new Product