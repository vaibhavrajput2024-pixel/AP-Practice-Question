const express = require("express");
const fs = require("fs");
const path = require("path");
const checkAccess = require("./middleware");

const app = express();

app.get("/data/:user", checkAccess, (req, res) => {
  const filePath = path.join(__dirname, "data.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    res.status(200).json({ message: data });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
