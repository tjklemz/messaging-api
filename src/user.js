const uuidv4 = require("uuid/v4");
const argon2 = require("argon2");
const db = require("./db");

const createUser = async ({ name, password }) => {
  const id = uuidv4();
  try {
    const hash = await argon2.hash(password);
    await db.query(
      "INSERT INTO users(user_id, name, password) VALUES($1, $2, $3)",
      [id, name, hash]
    );
    return {
      id,
      name
    };
  } catch (err) {
    throw new Error("Could not create user");
  }
};

const getUsers = async () => {
  const { rows: users } = await db.query("SELECT user_id, name from users");
  return users.map(({ user_id: id, name }) => ({ id, name }));
};

module.exports = {
  createUser,
  getUsers
};
