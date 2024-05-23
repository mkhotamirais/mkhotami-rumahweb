const ok = (res, status, message, data = {}) => {
  return res.status(status).json({ message, data });
};

const err = (res, status, error) => {
  return res.status(status).json({ error: error?.message || error });
};

module.exports = { ok, err };
