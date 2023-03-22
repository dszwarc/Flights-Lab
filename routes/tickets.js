var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */ 
router.get('/:id/tickets/new', ticketsCtrl.new)

router.post('/:id/tickets',ticketsCtrl.create)

module.exports = router;