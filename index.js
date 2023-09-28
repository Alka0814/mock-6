const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./Routes/server.routes');
app.use(express.json())
app.use(cors());
app.use("/api", router)
app.listen(8080, async () => {
    await mongoose.connect("mongodb+srv://alkatrivedi0814:alkatrivedi@cluster0.08hlzdp.mongodb.net/blogdata?retryWrites=true&w=majority")
    console.log("Server started on PORT 8080");
})