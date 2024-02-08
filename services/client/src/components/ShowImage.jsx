import React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from 'react';
import axios from 'axios'; 

class ShowImage extends Component {
    
    constructor() {
      super();

    };
  
    
    componentDidMount() {
      this.getUsers();
    };
  
    getUsers() {
      return 'meh'
      
    }
  
    render() {
      return (
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <br/>
                <h1 className="title is-1">Users</h1>
                <hr/><br/>
              </div>
            </div>
          </div>
        </section>
      )
    }
  };