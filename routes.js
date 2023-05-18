const router = require('express').Router();

const {
  aboutHandaler,
  contactHndaler,
  htmlHandaler,
  indexHndaler,
} = require('./controler');

// we can also use router for make this path moduler
router.get('/', htmlHandaler);

router.get('/contact', contactHndaler);

// router.get('/index', indexHndaler);
router.get('/about', aboutHandaler);

module.exports = router;
