import React, { Component } from 'react';
import ButtonList from './ButtonList.js';
import { drums } from './drums';
import './App.css';

class App extends Component {
	constructor(props) {
			super(props);
			this.handleKeyPress = this.handleKeyPress.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}
		
		componentDidMount() { //When the webpage first loads.
			const fCCscript = document.createElement("script");
			fCCscript.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
			fCCscript.async = true;
			document.body.appendChild(fCCscript); //Needed to for freeCodeCamp Test Suite.

			// const fAscript = document.createElement("link");
			// fAscript.rel = "stylehseet";
			// fAscript.href = "https://use.fontawesome.com/releases/v5.7.2/css/all.css";
			// //fAscript.type = "text/css";
			// fAscript.integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr";
			// fAscript.crossorigin="anonymous";
			// document.body.appendChild(fAscript);

			document.addEventListener('keydown', this.handleKeyPress); //Listens for keyboard press.
		}

		handleClick(keyTrigger, id) { //The user click a drum button.
			//console.log("Mouse click: keyTrigger is " + keyTrigger + ", id is " + id);
			document.getElementById(keyTrigger).play(); //Plays the audio element inside the button.
			document.getElementById("display").innerHTML = id.replace(/[-_]/g, " "); //Adds id to display div. Strips off - and_
		}

		handleKeyPress(keyTrigger) { //The user pressed a keyboard key.
			//console.log("Key press: keyCode is: " + keyTrigger.keyCode);
			for (let x = 0; x < drums.length; x++) { //Runs through each value in the drums array.
				if (keyTrigger.keyCode === drums[x].keyCode) { //Checks if the keyCode pressed matches the current one in array.
					//console.log("Keypress: id: " + drums[x].id);
					document.getElementById(drums[x].keyTrigger).play(); //Plays the audio element inside the button.
					document.getElementById("display").innerHTML = drums[x].id.replace(/[-_]/g, " "); //Adds id to display div. Strips off -, _.
					break;
				}
			}
		}

  render() {
    return (
      <div className="App" id="app">
      	<h1>Drum Machine in React:</h1>
      	<div id="drum-machine">
			<ButtonList buttons={drums} clicker={this.handleClick} />
			<div id="display"></div>
      	</div>
      </div>
    );
  }
}

export default App;