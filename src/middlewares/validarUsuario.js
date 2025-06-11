const { z } = require('zod');

const usuarioSchema = z.object({
  nome: z.string().min(3),
});

function validarUsuario(req, res, next) {
  const resultado = usuarioSchema.safeParse(req.body);

  if (!resultado.success) {
    // return res.status(400).json({ message: resultado.error.errors[0].message });
    return res.status(400).json({ message: resultado.error.errors });
  }

  next();
}

module.exports = validarUsuario;
