const express = require('express');
const path = require('path');

const app = express();

var cors = require('cors');
app.use(cors({
	optionsSuccessStatus: 200
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'build'));

app.use(express.static(path.resolve(path.join(__dirname, 'build'))));
app.get('/', (req, res) => {
	res.render('index');
});

app.listen(process.env.PORT || 3001);


console.log('Service running on ' + (process.env.PORT || 3001))