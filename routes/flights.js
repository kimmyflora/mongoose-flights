var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')




router.get('/', flightCtrl.index)

/* GET users listing. */
router.get('/new', flightCtrl.new)
router.get('/:id', flightCtrl.show)
router.post('/', flightCtrl.create)



module.exports = router;
