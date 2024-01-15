import { createRoot } from 'react-dom/client';
import { Component } from 'react';
import axios from 'axios';  // new


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      image: {}
  }
  }
  
  componentDidMount() {
    this.getOutPut();
  }

  // new
  getOutPut() {
    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/ping`)
    .then((res) => { this.setState({ image: res.data }); }) // updated
  .catch((err) => { console.log(err); });
  }

  render() {
    const { image } = this.state;

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br/>
              <h1 className="title is-1">Users</h1>
              <hr/><br/>
              {/* Render the image message directly */}
              <p className="box title is-4 username">{image.message}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);