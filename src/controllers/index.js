import express from "express";
import * as pizzas from "../services/PizzaService"
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", pizzas.Lire());
});

router.get("/login", (req, res) => {
  res.render("page_login");
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

export default router;
