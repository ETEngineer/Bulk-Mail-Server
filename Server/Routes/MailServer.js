import express from "express";
import sendMail from "../Controllers/MaileController.js";

const router = express.Router();

router.post("/send", sendMail);

export default router;