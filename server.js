const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;
const Color = require('colors');

const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/QuarentineBoardGame";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to Database'.green);
    console.log('----------------------------'.rainbow);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
    console.log('----------------------------'.rainbow);
    console.log(`Listening on http://localhost:${PORT}`.blue);
});