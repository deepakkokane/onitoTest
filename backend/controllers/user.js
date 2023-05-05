const User = require("../models/user");

exports.addUser = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "cant create user !" });
      }
      res.status(201).json({ message: "user added successfully", user });
    })
    .catch((err) => res.status(400).json({ msg: "somthing went wrong ", err }));
};
exports.listUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(201).json({ message: "user fetch successfully", users });
    })
    .catch((err) => res.status(400).json({ msg: "somthing went wrong ", err }));
};
