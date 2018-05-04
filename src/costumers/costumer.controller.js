const CostumerModel = require('./costumer.model');
const jwt = require('jsonwebtoken');

const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
    getAllCostumers: getAllCostumers,
    getCostumerById: getCostumerById,
    deleteCostumerById: deleteCostumerById,
    createCostumer: createCostumer,
    updateCostumer: updateCostumer
}

function getAllCostumers(req, res) {
    CostumerModel.find()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))

}

function getCostumerById(req, res) {
    CostumerModel.findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function deleteCostumerById(req, res) {
    CostumerModel.findById(req.params.id)
        .remove()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function createCostumer(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token, 'Perfect', (err, decoded) =>{
        if (err) return res.sendStatus(403);
        req.body.createdBy = decoded.userName;
        req.body.lastUpdate = decoded.userName;
    })
    req.body.createdAt = new Date();
    CostumerModel.create(req.body)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function updateCostumer(req, res) {
    const token = req.headers.authorization;
    jwt.verify(token, 'Perfect', (err, decoded) =>{
        if (err) return res.sendStatus(403);
        req.body.lastUpdate = decoded.userName;
    })
    CostumerModel.findByIdAndUpdate(req.params.id, req.body, _UPDATE_DEFAULT_CONFIG)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function handdleError(err, res){
    return res.status(400).json(err);
}