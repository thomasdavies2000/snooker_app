import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import AddImage from './components/AddImage';
import ShowImage from './components/ShowImage';

import './styles.css'; // Import CSS file

const App = () => {
  const [uploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageUploadComplete = () => {
    setIsUploaded(true);
    setLoading(false);
  };

  const imageIsLoading = () => {
    setLoading(true);
    setIsUploaded(false);
  };

  return (
    <BrowserRouter>
    <div className="app-container"> 
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <br />
              <h1 className="title is-1">Computer Vision Snooker Tool</h1>
              <hr />
              <br />
              <p>I've put this project together to showcase some of my skills and interests. </p>
              <hr />
              <AddImage onUploadComplete={handleImageUploadComplete} onLoading={imageIsLoading} />
              <ShowImage isUploaded={uploaded} isLoading={loading} />
              <Link to="24.jpg" target="_blank" download>Download</Link>
              
              <br />
              <br />
              

            </div>
          </div>
        </div>
      </section>
    </div>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
