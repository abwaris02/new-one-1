const express = require('express');
const app = express()
require("./db/mongoose")
const Book = require("./models/books.js")

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/books', async (req, res) => {
    const book = new Book({
        author: req.body.author,
        numberOfPages: req.body.numberOfPages,
        publishDate: req.body.publishDate
    })
    try{
      const saveBook = await book.save()
      res.json(saveBook)
    }catch(err){
       res.json({message: err})
       console.log(err)
    }
});





app.listen(port, () => {
    console.log(`Port listning up on port ${port}`)
})