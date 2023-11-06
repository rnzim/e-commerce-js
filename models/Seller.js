const knex = require('../database/database')
class Seller{

    async mySales(id){
        try {
            var sales = await knex.select().where({id_user:id}).table("purchase")
            return sales
        } catch (error) {
            throw error
        }
        
    }
    async alterInfo_store(id,store){
        try {
            var result = await knex.select().
            update(store)
            .where({id_user:id})
            .table("seller")
            return result
        } catch (error) {
            throw error
        }
        
    }

    async setSeller(id){
        try {
            var result = await knex.select()
            .update({seller:1})
            .where({id:id})
            .table("users")
            return result
        } catch (error) {
            throw error
        }
    
    }

    async createSeller(newSeller){
        try {
            var result = await knex.insert(newSeller)
            .table("seller")
            return result
        } catch (error) {
            throw error
        }
    }
    async findSellerById(id){
        try {
           var seller = await knex.select().where({id_user:id}).table("seller")
           return seller 
        } catch (error) {
            throw error
        }
    }
    async findSellerByNameStore(name){
        try {
           var seller = await knex.select("name_store","description_store").where({name_store:name}).table("seller")
           return seller 
        } catch (error) {
            throw error
        }
    }
    async infoSeller(id){
        try {
            var seller = await knex.select().where({id_user:id}).table("seller")
            return seller 
         } catch (error) {
             throw error
         }
    }

}

module.exports = new Seller