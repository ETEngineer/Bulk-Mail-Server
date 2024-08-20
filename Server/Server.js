import express from "express";
import dotenv from 'dotenv';
import cors from  'cors';
import bodyParser from "body-parser";
import MailServer from "./Routes/MailServer.js";

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json({ extended : "true"}));
app.use(cors());

app.use("/messages", MailServer);

app.listen(5000, (req, res) => {
    console.log("Mail Server Started");  
})