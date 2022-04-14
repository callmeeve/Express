const express = require('express')
const routerEcommerce = require('./routers/ecommerce')
const app = express()
const port = 5000

//Menerima Req.Body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(routerEcommerce)
app.listen(port, ()=>{
    console.log('Server berjalan pada Port' + port)
})