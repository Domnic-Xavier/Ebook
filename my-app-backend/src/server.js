// const express=require('express');

import {db,connectToDb} from './db.js';
import express from "express";

const app = express();
app.use(express.json());


//finding particular boook
app.get('/api/books/:name', async (req, res) => {
  const { name } = req.params;
  const book = await db.collection("books").findOne({name});
  if (book) {
    res.send(book);
  }
  else {
    res.send('not found!');
  }
});

//inserting books
app.post('/api/books/',async (req, res) => {
  // const { username,password } = req.params;
  const { name,author,genre,content } = req.body;
  const book = await db.collection("books").insertOne({name,author,genre,content})
  if(book) {
    res.send(book);
  } else {
    res.send('not found')
  }
});

//delete the books
app.delete('/api/books/:name',async (req, res) => {
  // const { username,password } = req.params;
  const { name} = req.body;
  const book = await db.collection("books").deleteOne({name})
  if(book) {
    res.send(book);
  } else {
    res.send('not found')
  }
});

//inserting genres
app.post('/api/books/',async (req, res) => {
  // const { username,password } = req.params;
  const { genre,alt } = req.body;
  const genres = await db.collection("genres").insertOne({genre,alt})
  if(genres) {
    res.send(genres);
  } else {
    res.send('not found')
  }
});

//finding particular genre
app.get('/api/genres/:genre', async (req, res) => {
  try {
    const { genre } = req.params;
    const genreData = await db.collection("genres").findOne({ genre });
    
    if (!genreData) {
      return res.status(404).send('Genre not found!');
    }
    const books = await db.collection("books").find({ genre: genreData }).toArray();
    
    if (books.length === 0) {
      return res.status(404).send('No books found for this genre!');
    }

    res.send({ books});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//delete the books
app.delete('/api/genres/:name',async (req, res) => {
  // const { username,password } = req.params;
  const { genre} = req.body;
  const genres = await db.collection("genres").deleteOne({genre})
  if(genres) {
    res.send(genres);
  } else {
    res.send('not found')
  }
});

//sign up page
app.post('/api/signup/',async (req, res) => {
  // const { username,password } = req.params;
  const { username,password } = req.body;
  const signup = await db.collection("signup").insertOne({username,password})
  if(signup) {
    res.send(signup);
  } else {
    res.send('not found')
  }
});

//login page
app.get('/api/login/:username',async (req, res) => {
  const { username } = req.params;
  const login = await db.collection("signup").findOne({username})
  if(login) {
   res.send(login);
  } else {
    res.send('not send')
  }
});

connectToDb(() =>{
  console.log("successfully connected to port")

  app.listen(8000, () => {
  console.log("listening on http://8000");
})
});