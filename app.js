const express = require('express');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const photoControllers = require('./controllers/photoControllers');
const pageControllers = require('./controllers/pageControllers');
//connection DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWEARS
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', photoControllers.getAllPhoto);
app.get('/photos/:id', photoControllers.getPhoto);
app.post('/photos', photoControllers.uploadPhoto);
app.put('/photos/:id', photoControllers.updatePhoto);
app.delete('/photos/:id', photoControllers.deletePhoto);
app.get('/about', pageControllers.pageAbout);
app.get('/add', pageControllers.pageAdd);
app.get('/photos/edit/:id', pageControllers.pageEdit);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numarali porta baglandi`);
});
