import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

const SocialFollow = () => {
	return(
		<div className='social-container'>
			<h3 style={{color: 'white'}}>@LeadeTheChangeYouWantToSee</h3>
			<a
		    href="https://www.youtube.com/channel/UCiCbn8Av8yMV6QM7IS9E9tw"
		    className="youtube social"
		    target="_blank"
		 	>
		    <FontAwesomeIcon icon={faYoutube} size="2x" />
		 	</a>
		 	<a
		  	href="https://www.facebook.com/FutureLeaderX"
		  	className="facebook social"
		  	target="_blank"
			>
		  	<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
		  	href="https://www.instagram.com/futureleaderx/"
		  	className="instagram social"
		  	target="_blank"
			>
		  	<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>
	)
}




export default SocialFollow;