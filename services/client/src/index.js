import { createRoot } from 'react-dom/client';
import { Component } from 'react';
import axios from 'axios';  // new
import AddImage from './components/AddImage';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      image: {}
    };
  }

  getOutPut() {
    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/ping`)
      .then((res) => {
        this.setState({ image: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { image } = this.state;

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br />
              <h1 className="title is-1">Snooker tool</h1>
              <hr /><br />
              

              {/* Render the image message directly */}
              <p className="box title is-4 image">{image.message}</p>
              
              {/* Button to trigger the getOutPut method */}
              <button onClick={() => this.getOutPut()}>Convert image</button>
            </div>
            <div className="column is-half">  {/* new */}
            <br/>
            <h1 className="title is-1">Snooker Computer Vision Tool</h1>
            <hr/><br/>
            <p>This is a little project I've </p>
          

            <AddImage/>  {/* new */}
            <br/><br/>  {/* new */}
            
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