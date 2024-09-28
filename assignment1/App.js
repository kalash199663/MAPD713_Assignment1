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

