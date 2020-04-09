const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;
const Color = require('colors');
const path = require('path');

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


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log('----------------------------'.rainbow);
    console.log(`Listening on http://localhost:${PORT}`.blue);
});