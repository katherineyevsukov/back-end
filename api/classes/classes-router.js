const router = require("express").Router()
const Classes = require('./classes-model')

router.get("/", async (req, res, next) => {
    try {
        const classList = await Classes.getAll()
        res.status(200).json(classList)
    } catch(err){
        next(err)
    }
})

router.get("/:class_id", async (req, res, next) => {
    try {
        const theClass = await Classes.getById(req.params.class_id)
        res.status(200).json(theClass)
    } catch(err){
        next(err)
    }
})

module.exports = router
