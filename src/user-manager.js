const User = require("./user");

const createUser = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).send("needs a name and password");
  }

  try {
    const user = await User.createUser({ name, password });
    return res.json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    return res.json(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createUser,
  getUsers
};
