const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body",
    title: "Главная",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/catalog.html",
    filename: "catalog.html",
    inject: "body",
    title: "Каталог",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
];
