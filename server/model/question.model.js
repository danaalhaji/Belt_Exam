const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [
            true,
            " Question is required"
        ],
        unique: [
            true,
            "Question must be unique"],
        minlength:[10 , "The minimum character is 2!"]
    },
    countryOne:{
            type:String,
            required:[
            true,
            " country one name is required" 
        ]},
    C1likes:{
            type:Number,
            default: 0
        }
    ,

    countryTwo:{
            type:String,
            required:[
            true,
            " country two name is required" 
        ]},
    likesC2:{
            type:Number,
            default: 0
        },

    countryThree:{
            type:String},
    likesC3:{
            type:Number,
            default: 0
        },
    totalLikes:{
        type:Number,
        default: 0
    }

    }

, { timestamps: true })

module.exports = mongoose.model("question",questionSchema);