const express = require('express');
const router = express.Router();
const { Item } = require('../models'); 

// route to display items
router.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.render('items', { items }); 
});

module.exports = router;
