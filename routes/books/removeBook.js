const Router = require('express').Router
module.exports = Router({mergeParams: true})
.delete('/books/:id', async (req, res, next) => {
    try {
        await req.db.Book.findByIdAndRemove(req.params.id);
        /*
        const location = `${req.base}${req.originalUrl}`
        res.setHeader('Location', location)
        if(!book){
            res.status(404).send('Book id '+ req.params.id + ' not found');
        }
        */

        res.status(204).send('Book successfully deleted')



    } catch (error) {
        //res.status(500).send('Unknown server error when trying to delete bookmark with id ' + req.params.id);
        next(error)
    }
})
