const Payment = require('../models/Payment')
const Products = require('../models/Product')

const MercadoPago = require('mercadopago')

MercadoPago.configure({
    sandbox:true,
    access_token:"TEST-5897717864758760-103120-90767efa126074d54b1cc29dda9bd22b-1078459919"
    

})

class PaymentController{
    async createPayment(req,res){
        var {idProduct} = req.params
        var IdUser = req.session.user.id
        var email = req.session.user.email
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

                var setSold = Products.setSold(idProduct)
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
        var id = req.session.user.id
        var payments = await Payment.viewPayment(id)
        if(payments.length > 0){
            res.render('payment/main.ejs',{payments,user:req.session.user})
        }else{
            res.render('payment/main.ejs',{payments,user:req.session.user})
        }
    }
    async verifyPayments(req,res){
        var id = req.query.id
        console.log("Chegou! Verificando Se O Pagemento E Valido Aguade 10s  ID:"+id)
        setTimeout(()=>{
            var filter={
                "order.id":id
            }
            //Pesquisa O pagamento No db Do mercado Livre
            MercadoPago.payment.search({
                qs:filter
            }).then(data=>{
               var payment = data.body.results[0]
    
               if(payment != undefined){
                var reference = payment.external_reference
                //console.log(reference)
                console.log('///////////\u001b[33m')
                console.log(payment.status)
                console.log(payment.payment_type_id)
                console.log(payment.payment_method_id)
                console.log(payment.external_reference)
                //pequisa a external reference no db
                Payment.findPaymentByExternalReference(payment.external_reference)
                .then((veryEx_ref )=>{
                    if(veryEx_ref.length > 0){
                        console.log('True! pagamento validado com sucesso')
                        if(payment.status =='approved'){
                            try {
                                //salvar o pagamento no banco de dados
                                Payment.setPaymentToSucessFull(reference,{
                                status_paid:"Pagemento Realizado",
                                paid_out:true,
                                payment_type:payment.payment_type_id,
                                payment_url:"Item Pago Com Sucesso"
                                
        
                            }).then((savePayment)=>{
                                console.log('Sucesso Ao salvar')
                            }).catch(e=>{
                                console.log('Erro Ao Salavar No DB')
                            })
                            
                           } catch (error) {
                                console.log(error)
                            }
                        }
                        
                    }else{
                        console.log("Validação Falhou! Suspeita DE Fraude O Adm Foi Avisado")
                    }
                })
               
              
               }else{
                 console.log("Esse Pagamento Nao existe")
               }
            }).catch(e=>{
                console.log(e.message)
            })
          
        },10000)
        res.status(200)
    }
}

module.exports = new PaymentController