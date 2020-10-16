import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Facerecognition from './components/Facerecognition/Facerecognition'
import Rank from './components/Rank/Rank';
import SignIn from './components/SingIn/SignIn';
import Register from './components/Register/Register';
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
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignIn: false,
    }
  }

  calculalateFaceLocation = (Data) =>{
    console.log(Data);
   const clarifaiFace = Data.outputs[0].data.regions[0].region_info.bounding_box;
   console.log(clarifaiFace);
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
 
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFace = (box) =>{
    this.setState({box: box});
  }


  onInputChange=(e)=>{
    this.setState({input: e.target.value})
  }

  onButtonSubmit =()=>{
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then((response) =>this.displayFace(this.calculalateFaceLocation(response)))
      .catch((err)=> console.log(err));
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignIn: false})
    } else if(route === 'home'){
      this.setState({isSignIn: true})
    }

    this.setState({route: route});
  }


  render(){
   const {isSignIn, imageUrl, route, box } = this.state;

    return (
      <div className="App">
          <Particles className='particles'
            params={particlesOption} />
          <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>

          {route === 'home'
          ? <div>
              <Logo/>
              <Rank/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit ={this.onButtonSubmit}
                />
              <Facerecognition box={box} imageUrl={imageUrl}/>
          </div>
            :(route === 'signin'
              ?  <SignIn onRouteChange={this.onRouteChange}/>
              :  <Register onRouteChange={this.onRouteChange}/>
            )
          }
      </div>
    );
  }
}

export default App;
