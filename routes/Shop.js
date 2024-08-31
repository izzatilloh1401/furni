const { Router } = require("express");
const router = Router();
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
const Menu = require("../models/menu")
router.get("/", async (req, res) => {
    try {
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        const menu = await Menu.find();
        res.render("shop", { title: "Shop", activeShop: true, product , menu, about, chair });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;