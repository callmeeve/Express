const express = require('express');
const routerEcommerce = express.Router()

let ecommerce = [
    {
        name: "Produk 1",
        image: "Image 1",
        title: "Udang",
        text: "lorem ipsum....", create:new Date()
    },
    {
        name: "Produk 2",
        image: "Image 2",
        title: "Ikan",
        text: "lorem ipsum....", create:new Date()
    },
    {
        name: "Produk 3",
        image: "Image 3",
        title: "Gurita",
        text: "lorem ipsum....", create:new Date()
    },
    {
        name: "Produk 4",
        image: "Image 4",
        title: "Cumi - cumi",
        text: "lorem ipsum....", create:new Date()
    }
]

const cari = (arrData,title) => {
    ketemu = -1
    indeks = 0
    while(ketemu == -1 && indeks < arrData.length) {
        if(arrData[indeks].title == title){
            ketemu=indeks
            return indeks
        }
        indeks++
    }
    return -1
}


routerEcommerce.route('/ecommerce')
    .get((req, res)=>{
        res.json(ecommerce)
    })

    .post((req, res) => {
        const newItem = {
            name : req.body.name,
            image : req.body.image,
            title : req.body.title,
            text : req.body.text
        }
        ecommerce.push(newItem)
        res.status(201).json(newItem)
    })

routerEcommerce.route('/ecommerce/title')
    .put((req, res) => {
        title = req.params.title
        indeks = cari(ecommerce,title)
        if(indeks != -1){
            ecommerce[indeks].name = req.body.name;
            ecommerce[indeks].image = req.body.image;
            ecommerce[indeks].title;
            ecommerce[indeks].text = req.body.text;

            res.json(ecommerce[indeks]);
        }
        else{
            res.send('Data dari Produk Ecommerce tidak ditemukan')
        }
    })

    .delete((req, res) => {
        title = req.params.title
        indeks = cari(ecommerce,title)
        if(indeks != -1){
            ecommerce.splice(indeks,1)
            res.send('Produk Ecommerce dengan title' + title + 'terhapus')
        }
        else{
            res.send('Data dari ProduK Ecommerce tidak dapat ditemukan')
        }
    })
    .get((req, res) => {
        title = req.params.title
        indeks = cari(ecommerce,title)
        if(indeks != -1){
            const dataEcommerce = {
                name:ecommerce[indeks].name,
                image:ecommerce[indeks].image,
                title:ecommerce[indeks].title,
                text:ecommerce[indeks].text
            }
            res.json(dataEcommerce)
        }
        else{
            res.send('Data Produk Ecommerce dengan Title : ' + req.params.title + 'tidak dapat ditemukan')
        }
    })

routerEcommerce.get('/ecommerce/name/image', (req, res) => {
    const name = req.params.name
    const image = req.params.image
    res.send('Data Produk dengan nama : ' + name + 'gambar :' + image)
})
module.exports = routerEcommerce