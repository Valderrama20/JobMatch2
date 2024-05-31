const catchError = require('../utils/catchError')
const Publication = require('../models/Publication')

const getAll =  catchError(async(req,res) => {
    const publication = await Publication.findAll()
    return res.json(publication)
})

const createPublication = catchError(async(req,res) => {
    const { description, category, zone, userId } = req.body
    const publication = await Publication.create({description, category, zone, userId})
    return res.status(201).json(publication)
})

const remove = catchError(async(req,res) => {
    const { id } = req.params
    await Publication.destroy({where: {id}})
    return res.status(204).json(publication)
    //return res.sendStatus(204)
})

module.exports = {
    getAll,
    createPublication,
    remove
}