const CustomerModel = require('./customer.model');
const jwt = require('jsonwebtoken');

const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
    getAllCustomers: getAllCustomers,
    getCustomerById: getCustomerById,
    deleteCustomerById: deleteCustomerById,
    createCustomer: createCustomer,
    updateCustomer: updateCustomer
}

function getAllCustomers(req, res) {
    CustomerModel.find()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))

}

function getCustomerById(req, res) {
    CustomerModel.findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function deleteCustomerById(req, res) {
    CustomerModel.findById(req.params.id)
        .remove()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function createCustomer(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token, 'Perfect', (err, decoded) =>{
        if (err) return res.sendStatus(403);
        req.body.createdBy = decoded.userName;
        req.body.lastUpdate = decoded.userName;
    })
    req.body.createdAt = new Date();
    CustomerModel.create(req.body)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function updateCustomer(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token, 'Perfect', (err, decoded) =>{
        if (err) return res.sendStatus(403);
        req.body.lastUpdate = decoded.userName;
    })
    CustomerModel.findByIdAndUpdate(req.params.id, req.body, _UPDATE_DEFAULT_CONFIG)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function handdleError(err, res){
    return res.status(400).json(err);
}