const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 8086;

const query = "SELECT name FROM sqlite_master WHERE type='table';";
db.all(query, (err, tables) => {
  if (err) {
    console.error("Could not find table in your sqlite file:", err.message);
  } else {
    console.log(
      "Tables in the database :- ",
      tables.map((table) => table.name)
    );
  }
});

// Fetch sub_category.........
app.get("/sub_category", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, rows) => {
    if (err) {
      console.error("Query error occured.....", err.message);
      res.status(500).send("Server error occured.....");
    } else {
      res.status(200).json(rows);
    }
  });
});

// Fetch category.........
app.get("/category", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.error("Query error occured.....", err.message);
      res.status(500).send("Server error occured.....");
    } else {
      res.status(200).json(rows);
    }
  });
});

// Fetch dua.........
app.get("/dua", (req, res) => {
  db.all("SELECT * FROM dua", (err, rows) => {
    if (err) {
      console.error("Query error occured.....", err.message);
      res.status(500).send("Server error occured.....");
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
