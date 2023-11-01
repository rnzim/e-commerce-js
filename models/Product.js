const knex = require('../database/database')
class Product{
    async createProduct(product){

    }
    async editProduct(product){

    }
    async deleteProduct(product){

    }
    async viewProduct(){
        try {
            var result = await knex.select().table('product')
            return result
        } catch (error) {
            console.log(error)
            return
        }
     
    }
    async findByIdProduct(){

    }
}