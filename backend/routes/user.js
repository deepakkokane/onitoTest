const { addUser, listUsers } = require("../controllers/user");

const router = require("express").Router();

router.post("/user", addUser);
router.get("/users", listUsers);

module.exports = router;
