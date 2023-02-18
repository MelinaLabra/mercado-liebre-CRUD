// ************ Require's ************
const router = require('express').Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
//router.post('/search', mainController.search);

module.exports = router;