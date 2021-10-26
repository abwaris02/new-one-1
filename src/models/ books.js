const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema

const BookSchema = new Schema({
    
    bookName :{
      type: String,
      required: true,
      validate(value){
          if(!validator==value){
              throw new Error('Invalid name')
          }
      }
    },


    author :{
        type: String,
        required: true,
        minlength :4,
        maxlength: 10,
        validate(value){
            if(!validator==value){
                throw new Error('Name is invalid should be minimum 4 character')
            }
        }

    },
    numberOfPages:{
        type: Number,
        min: 30,
        max: 60,
        required: true,
        validate(value){
            if(!validator==value){
                throw new Error('Length of pages minimum 30 pages')
            }
        }
        },
    });
  

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book