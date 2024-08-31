const { Router } = require("express");
const router = Router();
const Hero = require("../models/hero")
const BigBlog = require("../models/bigblog")
const Slider = require("../models/slider")
const Menu = require("../models/menu")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async (req, res) => {
    try {
        const hero = await Hero.find();
        const bigblog = await BigBlog.find();
        const slider = await Slider.find();
        const menu = await Menu.find();
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        res.render("blog", { title: "Blog", active: true, hero, bigblog, slider, menu, product,about, chair});
    } catch (error) {

    }
});

module.exports = router;