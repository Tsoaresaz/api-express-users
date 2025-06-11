require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3200;

app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
