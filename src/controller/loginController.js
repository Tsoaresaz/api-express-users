const jwt = require('jsonwebtoken');

exports.loginUsuarioFake = (req, res) => {
  const usuario = {
    id: 1,
    nome: 'usuario teste',
    email: 'teste@email.com',
  };

  const token = jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
