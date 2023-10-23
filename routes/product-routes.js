const express = require('express');
const router = express.Router();
const { Product } = require('../models'); 

// route to display products
router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.render('products', { products }); 
});






//@MB delete product by ID @MB
// should pull the product based on req id.
router.delete('products/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product listing found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// call the product controller method
// router.get('/products/:id', ProductController.getProduct);



module.exports = router;
