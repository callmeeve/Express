const ecommerce = require('../models/ecommerce')
const modelEcommerce = require('../models/ecommerce')

module.exports = {
    getEcommerce: (req, res) => {
        ecommerce = modelEcommerce.getEcommerce
        res.json(ecommerce)
    },
    insert: (req, res) => {
        // ambildata request dari frontend
        newItem = modelEcommerce.insert(req)
        res.status(201).json(newItem)

    },
    getEcommerceByTitle: (req, res) => {
        // MENAMPILKAN DATA 
        title = req.params.title
        indeks = cari(ecommerce, title)
        if (indeks != -1) {
            const dataEcommerce = {
                name: ecommerce[indeks].name,
                image: ecommerce[indeks].image,
                title: ecommerce[indeks].title,
                text: ecommerce[indeks].text
            }
            res.json(dataEcommerce)
        } else {
            res.send('Data Produk Ecommerce dengan title : ' + title + 'tidak ditemukan')
        }
        res.send('Data Produk Ecommerce dengan title : ' + req.params.title)
    },

    update: (req, res) => {
        // UPDATE
        title = req.params.title
        indeks = cari(ecommerce, title)
        if (indeks != -1) {
            ecommerce[indeks].name = req.body.name;
            ecommerce[indeks].image = req.body.image;
            ecommerce[indeks].title;
            ecommerce[indeks].text = req.body.text;

            res.json(ecommerce[indeks])
        } else {
            res.send('Data Produk Ecommerce dengan title : ' + req.params.title + 'tidak ketemu')
        }

    },

    delete: (req, res) => {
        title = req.params.title
        indeks = cari(ecommerce, title)

        if (indeks != -1) {
            ecommerce.splice(indeks, 2)


            res.send('Data Produk dengan title ' + title + 'telah dihapus')

        } else {
            res.send('Data Produk dengan title ' + req.params.title + 'tidak ditemukan')
        }

    }
}