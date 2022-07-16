const { Router } = require('express');
const countroller = require('./countroller');

const router = Router();

router.get('/', countroller.getCards);
router.post('/', countroller.addCard);
router.get('/:name', countroller.findCard);
router.patch('/:id',countroller.updateCard);
router.delete('/:id', countroller.removeCard);


module.exports = router;