const express = require ('express')
const router= express.Router()

const characters = require('./controllers/characters.js')

router.post("/persons", characters.postCharacter)


router.get('/persons', characters.getCharacters)

router.get('/persons/:id', characters.getById)


router.patch('/persons/:id', characters.updateById)


router.delete('/persons/:id', characters.deleteById)

module.exports = router
