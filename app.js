const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});