import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello from express'));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});
