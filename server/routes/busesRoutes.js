const express = require('express');
const router = express.Router();
const busesController = require('../controller/busesController');

router.post('/', busesController.createBus);
router.get('/', busesController.getBuses);
router.get('/:id', busesController.getBusById);
router.put('/:id', busesController.updateBus);
router.delete('/:id', busesController.deleteBus);

module.exports = router;
