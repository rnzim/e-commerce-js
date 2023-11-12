const knex = require('knex')({client:'mysql2',connection:{
    host:'roundhouse.proxy.rlwy.net',
    port:26453,
    password:'4gAfB13f5eGGHHd6A1-aha5bacdDH64H',
    user:'root',
    database:'e_commerce'

}})

module.exports = knex
