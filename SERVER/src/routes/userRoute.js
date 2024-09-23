import { Router } from "express";
import UserService from "../services/userService.js";
import UserDao from "../dao/userDao.js";
import User from "../models/userModel.js";
import UserController from "../controllers/userController.js";
import catchedAsync from "../utils/catchedAsync.js";

const userDao = new UserDao(User);
const userService = new UserService(userDao);
const userController = new UserController(userService);

const router = Router();

router.post("/create", (req, res) =>
  catchedAsync(userController.createUser(req, res)),
);
router.get("/:id", (req, res) =>
  catchedAsync(userController.getUser(req, res)),
);
router.put("/:id", (req, res) =>
  catchedAsync(userController.userUpdate(req, res)),
);
router.delete("/:id", (req, res) =>
  catchedAsync(userController.deleteById(req, res)),
);
//router.get("/:id",catchedAsync(userController. ));

export default router;
