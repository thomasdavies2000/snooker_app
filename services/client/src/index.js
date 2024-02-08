import { createRoot } from 'react-dom/client';
import { Component } from 'react';

import AddImage from './components/AddImage';
import ShowImage from './components/ShowImage';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      image: {}
    };
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">

            <div className="column is-half"> 
            <br/>
            <h1 className="title is-1">Snooker Computer Vision Tool</h1>
            <hr/><br/>
            <p>This is a project I've put together to showcase some of my skills and interests. </p>
          

            <AddImage/>  
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