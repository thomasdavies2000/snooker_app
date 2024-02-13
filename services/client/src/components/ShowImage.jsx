import {React, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from 'react';
import axios from 'axios'; 


function ShowImage({ isUploaded, isLoading }) {
  const [originalImageUrl, setOriginalImageUrl] = useState('http://localhost:5004/original_image');
  const [outputImageUrl, setOutputImageUrl] = useState('http://localhost:5004/transform_image');

  return (
    <section className="section">
      {isLoading && <h1>Analysing image...</h1>}
      {isUploaded && (
        <div className="container">
          <div className="columns">
            <br />
            <div className="column is-half">
              <img src={`${originalImageUrl}?${new Date().getTime()}`} alt="Output Image" />
            </div>
            <div className="column is-half">
              <img src={`${outputImageUrl}?${new Date().getTime()}`} alt="Output Image" />
            </div>
            <hr />
            <br />
          </div>
        </div>
      )}
    </section>
  );
}

export default ShowImage;