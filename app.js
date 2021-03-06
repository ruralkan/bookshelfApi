import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const indexRouter = require('./routes/index')
const spidyRouter = require('./routes/spidy');
const router = require('./routes/createRouter')()



// Create Express application
module.exports = ({ logger, database }) => express()
// Install Middleware
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use((req, res, next) => {
  req.base = `${req.protocol}://${req.get('host')}`
  req.logger = logger
  req.db = database
  return next()
})
.use(morgan('tiny'))



// Path routing
.use(indexRouter)
.use('/api/test', spidyRouter)
//  Connect all our routes to our application
.use('/api', router)


// Error handling
.use((error, req, res, next) => {
  logger.error(error, error)
  res.status(error.status || 500).json({ error });
  next();
});
