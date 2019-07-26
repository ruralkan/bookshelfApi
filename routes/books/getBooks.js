const Router = require('express').Router
module.exports = Router({mergeParams: true})
.get('/books', async (req, res, next) => {
    try {
        const book = await req.db.Book.find({});
        res.status(200)
        //res.send(books)
        res.json({ book })
    } catch (error) {
        next(error)
    }
})
