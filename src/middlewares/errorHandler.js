function errorHandler(err, req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).json({ message: 'Erro interno do servidor!' });
  }

  console.error(err.stack);

  res
    .status(500)
    .json({ message: 'Erro interno do servidor!', error: err.stack });
}

module.exports = errorHandler;
