'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const catRouter = require('./routes/cats-route');
const dogRouter = require('./routes/dogs-route');


const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use('/api', catRouter);
// app.get('/api/cat', (req, res)=>{
//   return res.json(cats[0]);
// });

// app.delete('/api/cat', (req, res)=>{
//   let removed = cats.shift();
//   console.log(removed);
//   return res.json(removed).status(204);
// });

app.use('/api', dogRouter);


// app.get('/api/dog', (req, res)=>{
//   return res.json(dogs[0]);
// });

// app.delete('/api/dog', (req, res)=>{
//   let removed = dogs.shift();
//   console.log(removed);
//   return res.json(removed).status(204);
// });

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  //dbConnect();
  runServer();
}

module.exports = { app };
