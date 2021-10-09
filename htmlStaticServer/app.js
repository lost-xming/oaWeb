const express = require('express');

const app = express();
const path = require('path');

app.use(express.static('/wwl-code/oaWeb/build/'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './../build/index.html'));
});
const server = app.listen(8088, () => {
	const host = server.address().address;
	const { port } = server.address();

	console.log('Example app listening at http://%s:%s', host, port);
});
