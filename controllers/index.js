import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { pizzas: [{ img: "/static/pepperoni.jpg", name: "Pepperoni", prix: "8,50" }, { img: "/static/hypnotika.png", name: "Hypnotika", prix: "9,50" }, { img: "/static/savoyarde.png", name: "Savoyarde", prix: "9" },
  { img: "/static/fromag.png", name: "4 fromages", prix: "9,25" }, { img: "/static/canib.png", name: "Cannibale", prix: "9,75" }, { img: "/static/bacon.png", name: "Bacon Groovy", prix: "8,99" }] });
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

export default router;
