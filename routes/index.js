const express = require('express')
const router = express.Router()
const storeController = require('../controllers/StoreController')


// Do work here
router.get('/', storeController.homePage)
router.get('/add', storeController.addStore)

module.exports = router
