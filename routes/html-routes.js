const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
// renders body.handlebars
  res.render('body');
});

module.exports = router;
