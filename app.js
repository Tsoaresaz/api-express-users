const express = require('express');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');
const helmet = require('helmet');

const usuariosRoutes = require('./src/routes/usuarios');
const loginRoutes = require('./src/routes/login');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self"],
      scriptSrc: ["'self"],
    },
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá mundo! Esta é minha primeira API com NodeJS!');
});

app.use('/usuarios', usuariosRoutes);
app.use('/login', loginRoutes);

app.use(errorHandler);

module.exports = app;
