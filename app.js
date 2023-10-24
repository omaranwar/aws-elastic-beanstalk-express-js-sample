const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I have added a review to the stage with manual approval to our pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

