import React, { useState, useEffect } from 'react';
import { teamMembers, teamMembersSmall } from '../../data/aboutData';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {
	const [items, setItem] = useState([]);
	useEffect(() => {
		window != 'undefiner' && window.innerWidth < 1200
			? setItem(teamMembersSmall)
			: setItem(teamMembers);

		function handleResize() {
			window.innerWidth < 1200
				? setItem(teamMembersSmall)
				: setItem(teamMembers);
		}
		window.addEventListener('resize', handleResize);
	}, []);
	return (
		<div className='about-team'>
			{items.map((item, i) => (
				<div className='team-container' key={i}>
					<div className='team-image'>
						<Image
							alt='item'
							src={item.image}
							height={300}
							width={300}
							className='team-img'
						/>
					</div>

					<h6>{item.name}</h6>
					<p>{item.post}</p>
					<div className='team-icons-container'>
						<a target='_blank' href={item.facebook} rel='noopener noreferrer'>
							<FontAwesomeIcon
								icon={faFacebookSquare}
								className='team-icons'
								height={22}
							/>
						</a>
						<a target='_blank' href={item.instagram} rel='noopener noreferrer'>
							<FontAwesomeIcon
								icon={faInstagram}
								className='team-icons'
								height={23}
							/>
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default OurTeam;
