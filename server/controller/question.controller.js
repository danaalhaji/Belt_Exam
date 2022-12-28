const Question = require("../model/question.model");

module.exports.findAllPlayers = (req, res)=>{
    Question.find().sort({
        createdAt:-1})
    .then(pro => res.json(pro))
    .catch(err => res.json(err))
    };

module.exports.findTop3 =(req,res)=>{
    Question.find().sort({totalLikes : -1})
        .then(pro => res.json(pro))
    .catch(err => res.json(err))
    };

module.exports.findOnePlayer = (req,res)=>{
    Question.findOne({ _id: req.params.id })
        .then(oneSingleAuther => res.json({ oneQuestion :oneSingleAuther }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

module.exports.createNewPlayer = (req, res) => {
    const { question, countryOne, countryTwo, countryThree } = req.body;
    Question.create({
        question :question,
        countryOne :countryOne,
        countryTwo : countryTwo,
        countryThree :countryThree,
    })
.then(auther =>res.json(auther))
.catch(err =>res.status(400).json(err));
}

module.exports.deletePlayer = (req, res) =>{
    Question.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updateOnePlayer = (req, res) =>{
    Question.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true })
    .then(player =>res.json(player))
    .catch(err =>res.status(400).json(err));
    }
