const express = require('express');

const groupRouter = require('./routes/estado-route');

const productRouter = require('./routes/cidade-route');

const app = express();

const PORT = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Está piscando está gravando `);
});

app.use('/estado', groupRouter);

app.use('/cidade', productRouter)

app.listen(PORT, () => {
    console.log(`Implementando a porta ${PORT}`);
    
});