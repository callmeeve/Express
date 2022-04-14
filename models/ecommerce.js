const req = require("express/lib/request")

let ecommerce = [{
        name: "Produk 1",
        image: "Image 1",
        title: "Udang",
        text: "lorem ipsum....",
        create: new Date()
    },
    {
        name: "Produk 2",
        image: "Image 2",
        title: "Ikan",
        text: "lorem ipsum....",
        create: new Date()
    },
    {
        name: "Produk 3",
        image: "Image 3",
        title: "Gurita",
        text: "lorem ipsum....",
        create: new Date()
    },
    {
        name: "Produk 4",
        image: "Image 4",
        title: "Cumi - cumi",
        text: "lorem ipsum....",
        create: new Date()
    }
]

const cari = (arrData, title) => {
    ketemu = -1
    indeks = 0
    while (ketemu == -1 && indeks < arrData.length) {
        if (arrData[indeks].title == title) {
            ketemu = indeks
            return indeks
        }
        indeks++
    }
    return -1
}

module.exports = {
    getEcommerce: ecommerce,

    insert: (req) => {
        const newItem = {
            name: req.body.name,
            image: req.body.image,
            title: req.body.title,
            text: req.body.text
        }
        ecommerce.push(newItem)
        return newItem
    }
}