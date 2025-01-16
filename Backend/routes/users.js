import express from "express";
import {
  updateUser,
  getAllUser,
  getUser,
  deleteUser,
} from "../controllers/user.js";
import {
  verifyIsAdmin,
  verifyToken,
  verifyUser,
} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, You are Logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, You are Logged in!");
// });

// router.get("/checkadmin/:id", verifyIsAdmin, (req, res, next) => {
//   res.send("Hello Admin, You are Logged in!");
// });

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyIsAdmin, getAllUser);

export default router;
