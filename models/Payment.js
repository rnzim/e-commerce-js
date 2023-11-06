const knex = require('../database/database')
class Payment{
    async createPayment(payment){
        try {
            var pay = await knex.insert(payment).table("payment")
            return pay
        } catch (error) {
            throw error
        }
     
    }
    async setPaymentToSucessFull(external_reference,payment){
        try {
            var pay = await knex.update(payment).where({external_references:external_reference})
            .table("payment")
            return pay
        } catch (error) {
            throw error
        }
    }
    async viewPayment(id){
        try {
            var pay = await knex.select().where({id_user:id}).table("payment")
            return pay
        } catch (error) {
            throw error
        }
    }
}
module.exports = new Payment