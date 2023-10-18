const express = require('express');
const router = express.Router();
const { Category } = require('../models'); 

// get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Internal Server Error');
  }
});

// create a new category
router.post('/categories', async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).send('Internal Server Error');
  }
});

// delete a category by ID
router.delete('/categories/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.destroy({ where: { id: categoryId } });
    if (deletedCategory === 1) {
      res.status(200).send('Category deleted successfully');
    } else {
      res.status(404).send('Category not found');
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;