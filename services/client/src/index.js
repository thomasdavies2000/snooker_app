import { createRoot } from 'react-dom/client';
import { Component, useState } from 'react';

import AddImage from './components/AddImage';
import ShowImage from './components/ShowImage';

class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      imageUploaded: false
    };
    this.handleImageUploadComplete = this.handleImageUploadComplete.bind(this);
    
  }

  handleImageUploadComplete() {
    console.log("hellooooo")
    this.setState({ imageUploaded: true }, () => {
      console.log(this.state.imageUploaded);
    });
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">

            <div className="column is-half"> 
            <br/>
            <h1 className="title is-1">Computer Vision Snooker Tool</h1>
            <hr/><br/>
            <p>This is a project I've put together to showcase some of my skills and interests. </p>
            <hr></hr>

            <AddImage onUploadComplete={this.handleImageUploadComplete} /> 
            {<ShowImage />}
            <br/><br/> 
            
          </div>
          </div>
        </div>
      </section>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);