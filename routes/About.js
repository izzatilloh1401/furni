const { Router } = require("express");
const router = Router();
const Hero = require("../models/hero")
const Why = require("../models/why")
const Services = require("../models/services")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
const Slider = require("../models/slider")
const Menu = require("../models/menu")

router.get("/", async (req, res) => {
    try {
        const hero = await Hero.find();
        const why = await Why.find();
        const services = await Services.find();
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        const slider = await Slider.find();
        const menu = await Menu.find();
        res.render("about", { title: "About", active: true, hero, why, services, product,about, chair, slider, menu});
    } catch (error) {

    }
});

module.exports = router;