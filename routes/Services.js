const { Router } = require("express");
const router = Router();
const Hero = require("../models/hero")
const Shop = require("../models/shop");
const Info = require("../models/info");
const Comfort = require("../models/comfort");
const Slider = require("../models/slider")
const Menu = require("../models/menu")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async (req, res) => {
    try {
        const shop = await Shop.find();
        const hero = await Hero.find();
        const info = await Info.find();
        const slider = await Slider.find();
        const menu = await Menu.find();
        const comfort = await Comfort.find();
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        res.render("services", { title: "Services", activeServices: true, hero, shop, info, comfort, slider,menu, product, about, chair});
    } catch (error) {

    }
});

module.exports = router;