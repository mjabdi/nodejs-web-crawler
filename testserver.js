const translate = require('./src/routes/translate');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/translate', translate);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));