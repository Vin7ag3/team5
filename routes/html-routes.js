const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/product');
const ProductController = require('../controllers/productController');

// multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// display products
router.get('/', async (req, res) => {
  try {
    ProductController.displayProducts(req, res);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal server error');
  }
});

//route to display members page TEST!!!
router.get('/members', async (req, res) => {
  ProductController.display
})


// route to display images
router.get('/products', async (req, res) => {
  try {
    ProductController.displayProducts(req, res);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal server error');
  }
});

// display the product upload form
router.get('/upload', (req, res) => {
  res.render('products', {}); 
});

// handle the form submission
router.post('/upload', upload.single('input-file-preview'), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const imageUrl = req.file.path;

    const newProduct = {
      name,
      description,
      price,
      imageUrl: '/uploads/' + req.file.filename,
    };

// new product into the database using sequelize
    await Product.create(newProduct);

// respond with a success message or err
    res.status(200).send('Product uploaded successfully');
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
