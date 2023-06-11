const express = require("express")
const port = 3000

const app = express()

app.set("view engine", "ejs")
app.set("vies", __dirname + "/views")


let pages = [
    {
        rotue: "/",
        title: "Home",
        content: "Welcome to the homepage",
    },
    {
        rotue: "/about",
        title: "About",
        content: "Learn more baout us.",
    },
    {
        rotue: "/contact",
        title: "Contact",
        content: "Get in touch with us",
    },
]

app.get("/", (req, res) => {
    const page = pages.find(page => page.rotue === "/");
    console.log(page)
    res.render("home", { page });
})

app.get("/about", (req, res) => {
    const page = pages.find(page => page.rotue === "/about");
    res.render("about", { page });
})

app.get("/contact", (req, res) => {
    const page = pages.find(page => page.rotue === "/contact");
    res.render("contact", { page });
}) 

app.get("/*", (req, res) => {
    res.send("this page was now found!")
})

app.listen(port, () => {
    console.log("listening on port", port)
})