const express = require('express');
const router = express.Router();




router.use('/', (req, res) => {
    res.render('home', {
      title: 'De Origen | Coffee Shop',
      pageHeader: 'De Origen | Coffee Shop - Pug Version',});
  });
  
router.use('/categories', (req, res) => {
    res.render('categories', {
      title: 'Categories | De Origen | Coffee Shop',
      pageHeader: 'Categories - Pug Version',
    });
  });
  
router.use('/about-us', (req, res) => {
    res.render('about-us', {
      title: 'About Us | De Origen | Coffee Shop',
      pageHeader: 'About Us - Pug Version',
    });
  });
  
router.use('/contact', (req, res) => {
    res.render('contact', {
      title: 'Contact | De Origen | Coffee Shop',
      pageHeader: 'Contact Us - Pug Version',
    });
  });