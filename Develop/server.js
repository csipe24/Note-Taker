// Add Dependencies
const express = require("express");
const path = require("path");
const app = express();

const apiRoutes = require("./routing/api-routes");
const htmlRoutes = require("./routing/html-routes");

const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Use static pub dir
app.use(express.static("public"));


// Use Api/HTML Routes
app.use("/api", apiRoutes);
app.use(htmlRoutes);

// Prints if server is running
app.listen(PORT, function(){
    console.log("App is working on PORT:" + PORT)
});
