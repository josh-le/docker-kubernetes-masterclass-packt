const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello from notebooks'}));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Notebooks server listening on port ${port}`);
});