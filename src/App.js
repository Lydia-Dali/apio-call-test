import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';

import './App.css';

const base_url = "https://jsonplaceholder.typicode.com/photos";

class App extends Component {

  constructor() {
    super()
    // Initialisation des states
    this.state = {
      photos: [],
    }
  }

  startRequest() {
    // On save la valeur de this car elle sera perdu dans le .then
    let that = this;
    // Appel API
    Axios.get(base_url)
    .then(function (response) {
      // En cas de succes
      // On ajoute les photos (data) à notre state
      that.setState({
        photos: response.data.slice(0, 50)
      })
      console.log(response.data.slice(0, 50));
    })
    .catch(function (error) {
      // En cas d'echec
      console.log(error);
    })
  }

  render() {
    // Si j'ai des photos en state =>
    if (this.state.photos.length > 0) {
      return (
        <div>
          {
            this.state.photos.map((photo, idx) => {
              return (
                <Card
                  key={`card-element-${idx}`}
                  title={photo.title}
                  image={photo.thumbnailUrl}
                />
              )
            })
          }
        </div>
      )
    }
    // Rendu avant appel API
    else {
      return (
        <div className="App">
          <button 
            onClick={ () => this.startRequest()}
            className='button-class'
          >
            Click me
          </button>
          <Card />
        </div>
      );
    }
  }
}

export default App;
