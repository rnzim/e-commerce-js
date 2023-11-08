const express = require('express')
const app = express()
const router = require('./routers/routers')
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/',router)

app.listen(3000,()=>{
    console.log('running')
})