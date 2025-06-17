const { z } = require('zod');

const usuariosSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
});

function validarUsuario(req, res, next) {
  const resultado = usuariosSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ message: resultado.error.errors[0].message });
  }

  next();
}

module.exports = validarUsuario;
