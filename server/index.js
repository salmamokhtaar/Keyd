const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRouter = require("./routes/bookRouter");
const userRouter = require("./routes/userRouter");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection string
const uri = 'mongodb://localhost:27017/Keydkeena-buugaagta';

mongoose.connect("mongodb://localhost:27017/Welcome").then(()=>{
    console.log("Database connection established Si saxa")
}).catch((err) => console.log(err))


// Routes
app.use(bookRouter);
app.use(userRouter);

app.listen(3000, () => console.log("Server Wuxu ka daaranyahay 3000..."));
