const express = require("express");
const cors = require('cors');
const app = express();
    
require("./config/question.config");
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require("./routes/question.routes")(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
