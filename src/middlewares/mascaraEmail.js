function mascaraEmail(req, res, next) {
  const method = req.method;

  if (method === 'GET') {
    const originalJson = res.json;
    res.json = function (data) {
      const maskData = data.map((value) => {
        if (value.email) {
          const [user, domain] = value.email.split('@');
          const maskEmail = user[0] + '*'.repeat(user.length - 1);

          return {
            ...value,
            email: `${maskEmail}@${domain}`,
          };
        }
        return value;
      });

      return originalJson.call(this, maskData);
    };
  }

  next();
}

module.exports = mascaraEmail;
