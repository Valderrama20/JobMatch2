const express = require('express')
const { createPublication, getAll, remove } = require('../controllers/publication.controller.js')


const publicationRouter = express.Router()

publicationRouter.route('/publications')
.get(getAll)
.post(createPublication)

publicationRouter.route('/publications/:id')
.delete(remove)

module.exports = publicationRouter