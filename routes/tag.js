const express = require('express');
const router = express.Router();

//controllers
const { requestTag , registerTag, list, photo } = require('../controllers/tag');
const { adminMiddleware } = require('../controllers/auth')
// validators
const { runValidation } = require('../validators');
const { requestTagValidator, registerTagValidator } = require('../validators/tag');

router.get('/requestTag',requestTagValidator, runValidation, requestTag);
router.post('/registertag', registerTag);

router.get('/tag/list', list);
router.get('/tag/photo/:id', photo);

module.exports = router;
