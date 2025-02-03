import express from "express"
import {authCheck, login, logout, signup} from "../controllers/auth.controller.js";
import { protectRoute } from "../Middleware/protectRoute.js";
const router = express.Router();

// A good practice to set the version of api's for extension
// using post request as we will send it to the db
router.post("/signup",signup);

router.post("/login", login);

router.post("/logout", logout);
router.get("/authCheck", protectRoute,authCheck);

export default router;