const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api');
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api/v2', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));