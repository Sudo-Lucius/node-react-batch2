require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const cors = require('cors')
const express = require('express')
const router = require('./src/routes/main')

const app = express()
const port = 3000

var corsOptions = {
origin: process.env.CORS_ALLOW_LIST.split(','),
optionsSuccessStatus: 200
}
console.log(corsOptions);

app.use(cors());
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello from the root!'); // Or res.sendFile('index.html');
});

app.get('/api/category', (req, res) => {
  res.json([
    { id: 1, name: 'Action' },
    { id: 2, name: 'Drama' },
    { id: 3, name: 'Comedy' },
  ]);
});

app.listen(3000, () => console.log('Server running on port 3000'));



