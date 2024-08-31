const { Router } = require("express");
const router = Router();
const Menu = require("../models/menu")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async(req, res) => {
    try {
    const menu = await Menu.find();
    const chair = await Chair.find();
    const about = await About.find();
    const product = await Product.find();
    res.render("checkout", { title: "Checkout",activeAbout: true, menu, product,about, chair});
    } catch (error) {
        console.log();
    }
});

module.exports = router;