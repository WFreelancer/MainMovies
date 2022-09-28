import {NavLink} from 'react-router-dom'

import styled from 'styled-components';

const LogoIcon = styled(NavLink)`
	color: var(--white);
	font-size: 2rem;
	font-weight: var(--fw-bold);
	user-select: none;
	text-transform: uppercase;
	letter-spacing: 2px;

	@media (min-width: 1800px){
		font-size: 3rem;
	}

	@media (max-width: 767px){
		font-size: 1.8rem;
	}
`;

const Logo = () => {
	return <LogoIcon to="/">Movie</LogoIcon>
}

export {Logo};