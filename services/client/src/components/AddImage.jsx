import React, { useState } from 'react';
import axios from 'axios';  // new
const AddImage = (props) => {

  const [message, setMessage] = useState('');
  
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputFile = document.getElementById('input-image');
    const uploadedFile = inputFile.files[0];
    
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('image', uploadedFile);

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/ping`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setMessage(response.data.message);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      setMessage('No image selected.');
    }
    // send 'hello' to the server
    // axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/ping`, { image: uploadedFile })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="field">
        <label
          className="label is-large"
          htmlFor="input-image"
        >Upload Image</label>
        <input
          name="image"
          id="input-image"
          className="input is-large"
          type="file"
          accept="image/*"
          required
        />
      </div>
      <input
        type="submit"
        className="button is-primary is-large is-fullwidth"
        value="Apply Perspective Transform"
      />
    </form>
  );
};

export default AddImage;

