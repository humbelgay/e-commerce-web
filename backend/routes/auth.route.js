import express from 'express';
import { login, getProfile, logout, signup, refreshToken} from '../controller/auth.controller.js';
import { protectRoute,adminRoute } from '../middlewear/auth.middle.js';

const router =express.Router()

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout",logout)

router.post("/refresh-token",refreshToken);

router.get("/profile",protectRoute, getProfile);






export default router;
