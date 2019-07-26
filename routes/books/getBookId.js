const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/books/:id', async (req, res, next) => {
    try {
        const book = await req.db.Book.findById(req.params.id);
        if(!book){
            res.status(404).send('Book id '+ req.params.id + ' not found');
        }else{
            res.status(200)
            //res.send(books)
            res.json({ book })
        }
    } catch (error) {
        next(error)
    }
})
