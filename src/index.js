const express = require("express");
const bodyParser = require("body-parser");
const UserManager = require("./user-manager");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.get("/users", UserManager.getUsers);
app.post("/users", UserManager.createUser);

app.put("/", (req, res) => {
  console.log(req.body);
  return res.send(req.body);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Example app listening on port 3000!");
});
