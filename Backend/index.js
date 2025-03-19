import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/Database.js';

import SequelizeStore from 'connect-session-sequelize';
import FileUpload from 'express-fileupload';

import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import setupSwagger from "./swagger.js";

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

/* (async() => {
    await db.sync();
})(); */

dotenv.config();

// Middleware
app.use(
  session({
      secret: process.env.SESS_SECRET || "defaultsecret",
      resave: false,
      saveUninitialized: false,
      store: store,
      cookie: { secure: false }, // Change to `true` if using HTTPS
  })
);


store.sync();


app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow common methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
    })
  );


app.use(express.json());

app.use(FileUpload());
app.use(express.static("public"));

app.use(UserRoute);
app.use(AuthRoute);

setupSwagger(app);

app.get("/", (req, res) => {
    res.send("Session setup working!");
  });
app.post("/logintest", (req, res) => {
    res.json({ message: "Login successful" });
  });

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...',process.env.APP_PORT);
});