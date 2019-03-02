import React from 'react';

/*Creates a single button for an element in the drums.js array.
id, keyCode, keyTrigger, and URL are parameters from buttons.
clicker is a reference to the handleClick function in App.js.
*/
const Button = ({ id, keyCode, keyTrigger, url, clicker }) => {
	return (
		<div className="drum-pad" id={`${id}`} onClick={() => clicker(keyTrigger, id)}>{keyTrigger}
	            <audio className="clip" id={`${keyTrigger}`} src={`${url}`}></audio>
		</div>
	);
}

export default Button;