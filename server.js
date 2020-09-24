const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/ar', (req, res) => {
    res.render('ar');
})
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, console.log(`Server started on port ${PORT}`));