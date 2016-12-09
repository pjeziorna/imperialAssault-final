'use strict';

var express = require('express');
var controller = require('./campaign.controller');

var router = express.Router();

router.get('/:userName', controller.index);
router.get('/:userName/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.put('/:id/:mission', controller.updateMission);
router.patch('/:id/:mission', controller.updateMission);
router.delete('/:id', controller.destroy);

module.exports = router;
