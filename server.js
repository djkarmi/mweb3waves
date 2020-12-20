const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/styles/style.css', (req, res) => {
	res.sendFile('styles/style.css', { root: __dirname });
});

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

let port = process.env.PORT || 5001;
app.listen(port, () => {
	console.log(__dirname);
	console.log("Listening Port " + port);
});