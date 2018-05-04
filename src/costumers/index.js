
const router = require('express').Router();
const { getAllCostumers, getCostumerById, deleteCostumerById, createCostumer, updateCostumer } = require ('./costumer.controller');

router.get('/', getAllCostumers);
router.get('/:id', getCostumerById);
router.delete('/:id', deleteCostumerById)
router.post('/', createCostumer);
router.patch('/:id' , updateCostumer)

module.exports = router;