const express = require("express");

const port = process.env.PORT || 8080;
const app = express();

app.listen(port, () => console.log(`Listening on Port ${port}`));

// api here

app.get("/api/people", async (req, res) => {});

module.exports = app;
