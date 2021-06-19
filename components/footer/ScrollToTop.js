import React from 'react';
import Container from '../buttons/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
	return (
		<Container bg='whitesmoke' padding='2em 4% 0 0' right>
			<FontAwesomeIcon
				icon={faChevronCircleUp}
				height={40}
				className='back-to-top-icon'
				onClick={() => window != undefined && window.scrollTo(0, 0)}
			/>
		</Container>
	);
};

export default ScrollToTop;
