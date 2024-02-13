import { React, useState } from 'react';
import axios from 'axios'; 


const AddImage = ({ onUploadComplete, onLoading }) => {

  
  const handleFormSubmit = async (event) => {
    event.preventDefault(); 
    onLoading();

    const inputFile = document.getElementById('input-image');
    const uploadedFile = inputFile.files[0];
    console.log('added')
    const formData = new FormData();
    formData.append('image', uploadedFile);
    formData.append('name', uploadedFile.name);
    
    
    try {
      
      const response = await axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/ping`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log("done")
        onUploadComplete();
      })
      
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
      
      
    </div>
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

