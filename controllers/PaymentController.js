const Payment = require('../models/Payment')
const Products = require('../models/Product')

const MercadoPago = require('mercadopago')

MercadoPago.configure({
    sandbox:true,
    access_token:"TEST-5167050113879566-110411-c72bf261a520a355915b70adfcb822c2-839637711"
    

})

class PaymentController{
    async createPayment(req,res){
        var {idProduct} = req.params
        var IdUser = req.userToken.id
        var email = req.userToken.email
        var idBuy = `${IdUser}rnzim${Date.now()}${idProduct}`
        
        var result = await Products.findByIdProduct(idProduct)
        if(result.length > 0){
            console.log(result)
            var dataPayment = {
                items:[
                    {
                        id:idBuy,
                        title: result[0].name_product,
                        quantity: 1,
                        currency_id: "BRL",
                        unit_price: parseFloat(result[0].pricing)
                    }
                ],
        
                payer:{
                    email:email
                },
                external_reference:idBuy
                
            }
             //criar o pagamento do mercado pagp
             try {
                var payment = await MercadoPago.preferences.create(dataPayment)
                await Payment.createPayment({
                    id_product:idProduct,
                    id_user:IdUser,
                    id_seller:result[0].id_seller,
                    paid_out:false,
                    status_paid:"Aguadando Pagamento",
                    payment_type:"Mercado Pago",
                    pricing:result[0].pricing,
                    external_references:idBuy,
                    payment_url:payment.body.init_point
                })
                return res.redirect(payment.body.init_point)
            } catch (error) {
                console.log(error)
            }
            res.status(200)
        }else{
            res.status(404).json({msg:"Voce Esta tentando Comprar Um produto Inexistente"})
        }
       
    }
    async viewPayment(req,res){
        var id = req.userToken.id
        var payments = await Payment.viewPayment(id)
        if(payments.length > 0){
            res.status(200).json(payments)
        }else{
            res.status(404).json({msg:"Voce Ainda Não Gerou Nenhum Pagamento"})
        }
    }
    async verifyPayments(req,res){
        setTimeout(()=>{
            var filter={
                "order.id":id
            }
            MercadoPago.search({
                qs:filter
            }).then(data=>{
               var payment = data.body.results[0]
    
               if(payment != undefined){
                var reference = payment.external_reference
                console.log(reference)
                console.log(payment.status)
                try {
                     var savePayment = Payment.setPaymentToSucessFull(reference,{
                     status_paid:"Pagemento Realizado",
                     paid_out:true,
                     payment_type:"Mercado Pago",
                     payment_url:"Item Pago Com Sucesso"
                }) 
                console.log(savePayment)
                } catch (error) {
                    console.log(error)
                }
               }else{
                 console.log("Esse Pagamento Nao existe")
               }
            }).catch(e=>{
                console.log(e.message)
            })
          
        },20000)
    }
}

module.exports = new PaymentController