const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
<<<<<<< HEAD
	res.sendFile('index.html', { root: __dirname });
=======
    res.sendFile('index.html', { root: __dirname });
>>>>>>> dc005fa3095047c5f7702cbdf885fe67c279f1e4
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
<<<<<<< HEAD
	console.log(__dirname);
	console.log("Listening Port " + port);
=======
    console.log(__dirname);
    console.log("Listening Port " + port);
>>>>>>> dc005fa3095047c5f7702cbdf885fe67c279f1e4
});