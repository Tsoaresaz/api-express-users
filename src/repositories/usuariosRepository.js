const pool = require('../config/db');

exports.listarUsuarios = async () => {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
};

exports.criarUsuario = async (nome, email) => {
  const [result] = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES (?,?)',
    [nome, email]
  );
  return { id: result.insertId, nome, email };
};
