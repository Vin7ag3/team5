const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.get('/', async (req, res) => {
  try {
// fetch products using the displayProducts method
    ProductController.displayProducts(req, res);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal server error');
  }
});

// route to display images
router.get('/products', ProductController.displayProducts);

module.exports = router;
