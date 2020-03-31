const { check } = require('express-validator');

exports.requireTagValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('address')
        .not()
        .isEmpty()
        .withMessage('Address is required'),
];

exports.registerTagValidator = [
    check('email')
        .not()
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('id')
        .not()
        .isEmpty()
        .withMessage('id is required'),
    check('pin')
        .not()
        .isEmpty()
        .withMessage('pin is required'),
];
