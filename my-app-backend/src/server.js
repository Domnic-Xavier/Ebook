// server.js
import express from "express";
// import books from "./dummy";

const app = express();
app.use(express.json());

app.get('/api/books/:genre/:name', (req, res) => {
    const { name } = req.params;
    // const book = books.find((book) => book.name === name);
    res.send(name);
});

app.get('/api/books/:name', (req, res) => {
    const { name } = req.params;
    // const book = books.find((book) => book.name === name);
    res.send(name);
});

app.get('/api/books/:name', (req, res) => {
    const { name } = req.params;
    // const book = books.find((book) => book.name === name);
    res.send(name);
});

console.log("successfully connected to port")
app.listen(800, () => {
  console.log("listening on http://");
})
