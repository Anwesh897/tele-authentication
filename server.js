const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`Server is runnig on port ${5678}`));
