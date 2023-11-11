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
    async viewPaymentTrue(id){
        try {
            var pay = await knex.select(
                'products.id',
                'products.name_product',
                'products.img',
                'payment.status_paid',
                'payment.pricing',
                'payment.payment_type',
                'users.username'
              )
              .from('payment')
              .join('products', 'products.id', '=', 'payment.id_product')
              .join('users', 'users.id', '=', 'payment.id_user')
              .where('payment.paid_out', '=', 1);
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
    async findPaymentByExternalReference(reference){
        try {
            var pay = await knex.select().where({external_references:reference}).table("payment")
            return pay
        } catch (error) {
            throw error
        }
    }
}
module.exports = new Payment