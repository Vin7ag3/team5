const express = require('express');
const router = express.Router();
const { Product } = require('../models'); 

// route to display products
router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.render('products', { products }); 
});

module.exports = router;
