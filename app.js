require('dotenv').config()
const express = require('express');
const { run } = require('./config');
const router = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

run().catch(console.dir)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('This server running on port ', port)
})