const { Router } = require("express");
const router = Router();
const Menu = require("../models/menu");
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async (req, res) => {
  try {
    const chair = await Chair.find();
    const about = await About.find();
    const product = await Product.find();
    const menu = await Menu.find();
    res.render("thank-you", { title: "Thank you", menu, product, about, chair });
  } catch (error) {
    console.log(error);
    
  }
});

module.exports = router;
