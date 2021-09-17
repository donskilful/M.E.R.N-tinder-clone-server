import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCardsSchema.js";
import Cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 3001;
const dbConnection_url =
  "mongodb+srv://admin:Newpassword24680@cluster0.hiug0.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// Db config
mongoose.connect(dbConnection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Api Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () =>
  console.log(`tinder server is running on port: ${port}`)
);
