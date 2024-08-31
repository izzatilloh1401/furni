const { Router } = require("express");
const router = Router();
const Hero = require("../models/hero")
const Menu = require("../models/menu")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async (req, res) => {
    try {
        const menu = await Menu.find();
        const hero = await Hero.find();
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        res.render("contact", { title: "Contact", activeContact: true, hero, menu, product,about, chair});
    } catch (error) {

    }
});

module.exports = router;