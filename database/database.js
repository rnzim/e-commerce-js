const knex = require('knex')({client:'mysql2',connection:{
    host:'localhost',
    port:3306,
    password:'',
    user:'root',
    database:'e_commerce'

}})

module.exports = knex