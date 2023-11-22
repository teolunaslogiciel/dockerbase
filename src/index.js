const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());

const listProducts = [];

app.get('/all-products', (req, res) => {
    if (listProducts.length === 0) {
        res.status(200).json({ msg: 'Aun no se crea productos' });
        return
    }
    res.status(200).json({products: listProducts});
})

app.post('/create-product', (req, res) => {
    const { name } = req.body;
    if (!name || name.length === 0) {
        res.status(201).json({ msg: 'Todos los campos son obligatorios' });
        return
    }

    const newProdct = {
        id: Date.now(),
        name
    }
    
    listProducts.push(newProdct);

    res.status(201).json({ msg: 'Product create' })
})

app.listen(port, console.log(`Api running on port ${port}`));