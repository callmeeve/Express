const express = require("express");
const routerEcommerce = express.Router()
const controllerEcommerce = require('../controllers/ecommerce');


// squential search


routerEcommerce.route('/ecommerce')
    .get(controllerEcommerce.getEcommerce)

    .post(controllerEcommerce.insert)

routerEcommerce.route('/ecommerce')
    .get((req, res) => {
        res.send(ecommerce)
    })

    .post((req, res) => {
        res.send('Data Produk Ecommerce Sukses Tersimpan')
    })

routerEcommerce.route('/ecommerce/title')
    .put(controllerEcommerce.update)

    // session delete 
    .delete(controllerEcommerce.delete)
    .get(controllerEcommerce.getEcommerceByTitle)

routerEcommerce.get('/ecommerce/name/image', (req, res) => {
    const name = req.params.name
    const image = req.params.image
    res.send('Data Produk dengan nama : ' + name + 'gambar :' + image)
})
module.exports = routerEcommerce