const { Router } = require("express");
const router = Router();
const User = require("../models/user")
const Menu = require("../models/menu")
const Chair = require("../models/chair");
const About = require("../models/about");
const Product = require("../models/product");
router.get("/", async(req, res) => {
    try {
        const menu = await Menu.find();
        const error = req.flash("error")
        const success = req.flash("success");
        const chair = await Chair.find();
        const about = await About.find();
        const product = await Product.find();
        res.render("login", { title: "Login", error, success, menu, product, about, chair});
    } catch (error) {
        console.log(error);
    }

});


router.post("/", async (req, res) => {
    try {
        const { login, parol } = req.body;
        const bazaUser = await User.findOne({ login })
        if (bazaUser) {
            if (await bazaUser.tekshirish(parol)) {
                req.session.user = bazaUser;
                req.session.tizimgakirildi = true
                req.session.save((err) => {
                    if (err) throw err;
                    res.redirect("/admin")
                });

            }
            else {
                req.flash("error", "parol xato");
                res.redirect("/login")
            }
        }
        else {
            req.flash("success", "Foydalanuvchi topilmadi")
            res.redirect("/login")
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;