import React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from 'react';
import axios from 'axios'; 

class ShowImage extends Component {
    
    constructor() {
      super();

    };
  
    render() {
      return (
        <section className="section">
          <div className="container">
            <div className="columns">
              
                <br/>
                <div className='column is-half'>
                    
                    <img src="http://localhost:5004/original_image" alt="Output Image" />
                </div>
                
                <div className='column is-half'>
                    
                    <img src="http://localhost:5004/transform_image" alt="Output Image" />
                </div>
                <hr/><br/>
              
            </div>
          </div>
        </section>
      )
    }
  };

export default ShowImage;   