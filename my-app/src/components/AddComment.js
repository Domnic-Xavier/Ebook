import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ bookName, onBookUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const user = useUser(); // Call useUser as a function

  const addComment = async () => {
      const token = user && (await user.user.getIdToken()); // Call getIdToken as a function
      const headers = token ? { authtoken: token } : {}; // Use Authorization header

      const response = await axios.post(`/api/books/${bookName}/comments`,
      { 
        // by: name,
        comment: commentText 
      },
        { headers }
      );

      const updatedBook = response.data;
      onBookUpdated(updatedBook);
      // setName('');
      setCommentText('');
   
  };

  return (
    <div id="add-comment-form">
      <h3>Add Comment</h3>
      {/* <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label> */}
      <label>
        Comment:
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          cols="50"
        />
      </label>
      <button onClick={addComment} className="but">
        Send Comment
      </button>
    </div>
  );
};

export default AddCommentForm;
