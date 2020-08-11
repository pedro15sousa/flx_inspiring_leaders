import React from 'react';

const SearchBox = ({searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				style = {{borderTop: "1px"}}
				placeholder='search leaders' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;