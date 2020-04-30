const { check } = require('express-validator');

exports.requireTagValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
<<<<<<< HEAD
    check('houseNumber')
=======
   check('houseNumber')
>>>>>>> 295f55222062516e27a15e9d2ba1a55b997c214e
        .not()
        .isEmpty()
        .withMessage('House number is required'),
    check('district')
        .not()
        .isEmpty()
        .withMessage('district is required'),
    check('zone')
        .not()
        .isEmpty()
        .withMessage('zone is required'),
    check('province')
        .not()
        .isEmpty()
        .withMessage('zone is province'),
    check('postalCode')
        .not()
        .isEmpty()
<<<<<<< HEAD
        .withMessage('postal Code is required'),
=======
        .withMessage('postal Code is required')
>>>>>>> 295f55222062516e27a15e9d2ba1a55b997c214e
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
