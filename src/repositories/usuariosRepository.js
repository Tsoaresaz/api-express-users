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

exports.atualizarUsuario = async (id, nome, email) => {
  const [result] = await pool.query(
    'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  );
  return result.affectedRows; // retorna a quantidade de linhas afetadas
};

exports.deletaUsuario = async (id) => {
  const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows;
};
