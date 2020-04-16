const { check } = require('express-validator');

exports.requestTagValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('houseNumber')
        .not()
        .isEmpty()
        .withMessage('House number is required'),
    check('district')
        .not()
        .isEmpty()
        .withMessage('District is required'),
    check('zone')
        .not()
        .isEmpty()
        .withMessage('Zone is required'),
    check('province')
        .not()
        .isEmpty()
        .withMessage('Province is required'),
    check('postalCode')
        .not()
        .isEmpty()
        .withMessage('Postal Code is required'),
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
