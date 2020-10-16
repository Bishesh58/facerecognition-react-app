import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Facerecognition from './components/Facerecognition/Facerecognition'
import Rank from './components/Rank/Rank';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
  apiKey: 'a35ec7b124bf43a2ba04226b2b169cac'
})

const particlesOption ={
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
    
  }

  onInputChange=(e)=>{
    this.setState({input: e.target.value})
  }

  onButtonSubmit =()=>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      'https://samples.clarifai.com/face-det.jpg')
    .then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){
        //err
      }
    )
    console.log('click');
  }

  render(){
    return (
      <div className="App">

          <Particles className='particles'
            params={particlesOption} />

        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit ={this.onButtonSubmit}
          />
        <Facerecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
