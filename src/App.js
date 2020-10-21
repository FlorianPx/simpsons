import React from "react";
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import axios from 'axios';
import "./App.css";

const simpleSimpson = {
  quote : "Shoplifting is a victimless crime, like punching someone in the dark.",
  character : "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      simpsonCard : simpleSimpson,
    }
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() { 
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(responses => responses.data)
    .then(data =>
      this.setState({
        simpsonCard: data[0],
      })
    )
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <QuoteCard simpsonCard={this.state.simpsonCard}/>  
      <button className="buttonStyle" type="button" onClick={this.getSimpson}>Click !</button>
    </div>
    );
  }
}

export default App;
