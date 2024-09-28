const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
let products = [];

let getCount = 0;
let postCount = 0;

// Logging on startup
app.listen(PORT, () => {
    console.log('Server is listening at http://127.0.0.1:' + PORT)
    console.log(`Endpoints:`);
});

// GET products
app.get('/products', (req, res) => {
    getCount++;
    console.log("> products GET: received request")
    console.log(`Processed Request Count --> Get: ${getCount}, Post: ${postCount}`);
    console.log("> products GET: sending response")
    res.json(products);
});

// POST products
app.post('/products', (req, res) => {
    postCount++;
    console.log(`> products POST: received re quest`);
    const newProduct = req.body;

    if (products.some(product => product.productId === newProduct.productId)) {
        return res.status(400).json({ error: 'Product ID must be unique.' });
    }

    products.push(newProduct);
    console.log(`< products POST: sending response`);
    console.log(`Processed Request Count --> Get: ${getCount}, Post: ${postCount}`);
    res.status(201).json(newProduct);
});


