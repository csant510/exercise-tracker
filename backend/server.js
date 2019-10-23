const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//exercisetracker
/*
mongoose.connect('mongodb://localhost:27017/exercisetracker',
    {useNewUrlParser: true, useCreateIndex: true}
);
*/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//routes


const exercisesRouter = require('./routes/exercises');


app.use('/exercises', exercisesRouter);
app.use('/api/users', require('./routes/api/users'));



// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
