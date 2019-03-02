import React from 'react';
import Buttons from './Buttons';

/*Creates a button for each element in the drums.js array.
buttons are parameters from drums.js array.
clicker is a reference to the handleClick function in App.js.
*/
const ButtonList = ({ buttons, clicker }) => {
	return (
	<div id="allButtons">
		{
			buttons.map((user, i) => { //Maps each item in the drums.js array to a unique Button.
				return (
					<Buttons key={buttons[i].id} id={buttons[i].id} keyCode={buttons[i].keyCode} keyTrigger={buttons[i].keyTrigger} url={buttons[i].url} desc={buttons[i].desc} clicker={clicker} />
				);
			})
		}
	</div>		
	);
}

export default ButtonList;