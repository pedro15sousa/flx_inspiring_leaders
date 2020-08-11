import React from 'react';
import './Card.css';
import {images, info} from '../images/Images.js'

let rotated = false;
 
const Card = ({name, username, id}) => {

	const clicked = () => {
		let div = document.getElementById(id), angle = rotated ? 0 : 180;
		/*div.style.webkitTransform = 'rotate(' + angle + 'deg)';
		div.style.mozTransform    = 'rotate('+ angle +'deg)'; 
	    div.style.msTransform     = 'rotate('+ angle +'deg)'; 
	    div.style.oTransform      = 'rotate('+ angle +'deg)'; 
	    div.style.transform       = 'rotate('+ angle +'deg)';*/

	    let current = images[div.id-1];
		let next = info[div.id-1];

	    if (rotated === false){
	    	div.src = next;
	    	div.height = 400;
	    	div.width = 400;
	    	rotated = true;
	    	return div.src
	    }else{
	    	div.src = current;
	    	div.height = 250;
	    	div.width = 250;
	    	rotated = false;
	    	return div.src;
	    }
    }

	return(
		<div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc' style={{backgroundImage:'linear-gradient(to left, #141e30 0%, #243b55 100%)'}}>
			<img  alt='robots' id={id} width={250} height={250} className='photo' src={images[id-1]} onClick={clicked} />
			<div>
				<h2 className='name'>{name}</h2>
				<p className='username'>{username}</p>
			</div>
		</div>
	);
}

export default Card;






























