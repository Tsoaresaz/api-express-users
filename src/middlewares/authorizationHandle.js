const jwt = require('jsonwebtoken');

function authorizationToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader)
    return res.status(401).json({ message: 'Token não fornecido ou inválido' });

  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.usuario = usuario;
    next();
  });
}

module.exports = authorizationToken;
