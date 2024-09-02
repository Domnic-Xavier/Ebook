import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Send form data including image URL
      const formData = { name, author, genre, content, image };
  
      const response = await axios.post('/api/books', formData);
  
      setUploadStatus(response.data.message);
      setName('');
      setAuthor('');
      setGenre('');
      setContent('');
      setImage('');
      
      navigate('/');
    } catch (error) {
      console.error('Error adding book:', error);
      setUploadStatus('Failed to add book');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br />
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required /><br />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required /><br />
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br />
        <button onClick={handleSubmit}>Add Book</button>
      <div className='error'>
      {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default AddBook;
