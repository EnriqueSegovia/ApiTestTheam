
const router = require('express').Router();
const { getAllCustomers, getCustomerById, deleteCustomerById, createCustomer, updateCustomer } = require ('./customer.controller');

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.delete('/:id', deleteCustomerById)
router.post('/', createCustomer);
router.patch('/:id' , updateCustomer)

module.exports = router;