import fs from "fs";
import { db, connectToDb } from './db.js';
import express from "express";
import admin from "firebase-admin";
import multer from 'multer';
// import bodyParser from 'body-parser';


const app = express();
app.use(express.json());

const upload = multer({ dest: 'uploads/' });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

// Initialize Firebase Admin with credentials
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

// Middleware to verify authentication token
app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      return res.sendStatus(400);
    }
  }
  req.user = req.user || {};
  next();
});

// Middleware to check for user authentication
app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

// Endpoint to find a particular book
app.get('/api/books/:name', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  try {
    const book = await db.collection("books").findOne({ name });

    if (book) {
      // const likeIds = book.likeIds || [];
      // book.canLike = uid && !likeIds.includes(uid);
      res.json(book);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("Error finding book:", error);
    res.sendStatus(500);
  }
});

app.put("/api/books/:name/like", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const book = await db.collection("books").findOne({ name });

  if (book) {
    const likeIds = book.likeIds || [];
    const index = likeIds.indexOf(uid); // Check if user already liked the book
    console.log("before"+index)
    if (index === -1) {
      // User hasn't liked the book yet
      await db.collection("books").updateOne(
        { name },
        {
          $inc: { likes: 1 },
          $push: { likeIds: uid }

        }
      );
      book.likes += 1;
      book.liked = true;
    } else {
      // User has already liked the book, toggle the like
      await db.collection("books").updateOne(
        { name },
        {
          $inc: { likes: -1 },
          $pull: { likeIds: uid }
        }
      );
      book.likes -= 1;
      book.liked = false;
    }

    res.send(book);
  } else {
    res.sendStatus(404);
  }
});

//comments for particular authentication
app.post('/api/books/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { email } = req.user;
  const { comment } = req.body;

    await db.collection("books").updateOne(
      { name },
      { $push: { comments: { by: email, comment } } }
    );

    const book = await db.collection("books").findOne({ name });
    if (book) {
      res.json(book);
    } else {
      res.sendStatus(404);
    }

});

//finding particular boook
app.get('/api/books', async (req, res) => {
  
  // const { name } = req.params;
  const book = await db.collection("books").find().toArray();
  if (book) {
    res.send(book);
  }
  else {
    res.send('not found!');
  }
});

//inserting books
app.post('/api/books', async (req, res) => {
  const { name, author, genre, content, image } = req.body;

  try {
    // Assuming db is your MongoDB database instance
    const book = await db.collection("books").insertOne({ image, 
      name, author, genre, content });
    
    if (book) {
      res.json(book);
    } else {
      res.send('Error adding book');
    }
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).send('Failed to add book');
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

// inserting genres
app.get('/api/genres', async (req, res) => {
  
  // const { name } = req.params;
  const book = await db.collection("genres").find().toArray();
  if (book) {
    res.send(book);
  }
  else {
    res.send('not found!');
  }
});

//finding particular genre
app.get('/api/genres/:genre', async (req, res) => {
    const { genre } = req.params;
    // const genreData = await db.collection("genres").findOne({ genre });
    
    // if (!genreData) {
    //   return res.status(404).send('Genre not found!');
    // }
    // const books = await db.collection("books").find({ genre: genreData }).toArray();
    const book = await db.collection("books").find({genre}).toArray();
  if (book) {
    res.send(book);
  }
  else {
    res.send('not found!');
  }
  } 
);


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
// app.get('/api/signup',async (req, res) => {
//   // const { username,password } = req.params;
//   const { email,password, } = req.body;
//   const signup = await db.collection("signup").insertOne({email,password})
//   if(signup) {
//     res.send(signup);
//   } else {
//     res.send('not found')
//   }
// });

//login page
app.get('/api/login',async (req, res) => {
  // const { id } = req.params;
  const { email } = req.body;
  const login = await db.collection("signup").findOne({email})
  if(login) {
   res.send(login);
  } else {
    res.send('not send')
  }
});

//contacts post 
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const newContact = new Contact({
      name,
      email,
      message
  });

  try {
      const savedContact = await newContact.save();
      res.json(savedContact);
  } catch (err) {
      res.status(500).json({ msg: 'Server error' });
  }
});

// // index.js or app.js
// // Multer configuration
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// //
// //mutler
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   if (err) throw err;
//   console.log('Connected to MongoDB');
//   db = client.db(dbName);
// });
// //add image
// app.post('/upload', upload.single('image'), (req, res) => {
//   // Get the binary data of the uploaded image
//   const imageBuffer = req.file.buffer;

//   // Store the image in MongoDB
//   db.collection('images').insertOne({ image: imageBuffer }, (err, result) => {
//       if (err) {
//           console.error('Error storing image:', err);
//           res.status(500).send('Error storing image');
//           return;
//       }
//       console.log('Image stored successfully');
//       res.status(200).send('Image stored successfully');
//   });
// });

connectToDb(() =>{
  console.log("successfully connected to port")

  app.listen(8000, () => {
  console.log("listening on http://8000");
})
});