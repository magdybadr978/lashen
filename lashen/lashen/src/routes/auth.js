const router = require("express").Router();
const authController = require("./../controllers/auth");
const { validateRequestBody } = require("../middleware/validate-request");
const { signUp, loginSchema } = require("./../validators/auth");
const { auth } = require("./../middleware/auth.js");
const { roles } = require("./../constants/enums.js");

router.post("/signUp", validateRequestBody(signUp), authController.signUp);

router.post("/login", validateRequestBody(loginSchema), authController.login);

router.get("/", authController.getUsers);

router.get("/:id", authController.getUserById);

router.put("/:id", authController.updateUser);

router.delete("/:id", authController.deleteUser);

module.exports = router;
