const Character=require('../models/character.js')


const postCharacter= function (req,res){
    const character= new Character(req.body)
    character.save().then(function(){
		return res.send(character)
	}).catch(function(error){
		return res.status(418).send(error)
	})
}

const getCharacters = function (req, res){
    Character.find({}).then(function(characters){
		if(!characters){
			return res.status(404).send(characters)
		}
		return res.send(characters)
	}).catch(function(error){
		return res.status(500).send(error)
	})
}

const getById = function(req, res){
	const _id = req.params.id
	Character.findById(_id).then(function(character){
		if(!character){
			return res.status(404).send(character)
		}
		return res.send(character)
	}).catch(function(error){
		return res.status(500).send(error)
	})
}

const updateById = function(req, res){
	const _id = req.params.id
	const update = Object.keys(req.body)
	Character.findOneAndUpdate(_id, req.body).then(function(character){
		if (!character){
			return res.status(404).send()
		}
		return res.send(character)
	}).catch(function(error){
		res.status(500).send(error)
	})
}

const deleteById = function(req, res){
	const _id = req.params.id
	Character.findOneAndDelete(_id).then(function(character){
		if(!character){
			return res.status(404).send()
		}
		return res.send(character)
	}).catch(function(error){
		return res.status(500).send(error)
	})
}


module.exports={
  postCharacter: postCharacter,
	getCharacters: getCharacters,
	getById: getById,
	updateById: updateById,
	deleteById: deleteById
}