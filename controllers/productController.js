const Product = require('../models/product');
const Item = require('../models/items');

const ProductController = {
// fetch and display product and item data w/img
    displayProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            const items = await Item.findAll();

            if (products.length === 0 || items.length === 0) {
                console.log('No products or items found in the database.');
            } else {
                console.log('Fetched products:', products);
                console.log('Fetched items:', items);

// transform the product data for proper rendering
                const transformedProducts = products.map(product => {
                    return {
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        imageUrl: product.imageUrl,
                    };
                });

                res.render('body', { products: transformedProducts });
            }
        } catch (error) {
            console.error('Error fetching products and items:', error);
            res.status(500).send('Internal server error');
        }
    },
};

module.exports = ProductController;
