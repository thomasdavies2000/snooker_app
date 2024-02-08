import React from 'react';
import axios from 'axios';  // new
const AddImage = (props) => {
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputFile = document.getElementById('input-image');
    const uploadedFile = inputFile.files[0];
    
    const formData = new FormData();
    formData.append('image', uploadedFile);
    formData.append('name', uploadedFile.name);
    formData.append('test', 'hello');
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/ping`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        
        let imageUrl = `${process.env.REACT_APP_API_SERVICE_URL}/image`
        
        
      });
      
      
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

