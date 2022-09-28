import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuBody = styled.nav`
	display: flex;
	align-items: center;
	transition: var(--transition-sm);

	@media (max-width: 767px){
		display: none
	}
`

const MenuList = styled.ul`
	display: flex;
	align-items: center;

	li{
		margin-right: 25px;
		:last-child{
			margin-right: 15px;
		}
	}
	@media (min-width: 1800px){
		li{
			margin-right: 35px;
			:last-child{
				margin-right: 25px;
			}
		}
	}

	@media (max-width: 767px){
		flex-direction: column;
		align-items: flex-start;
		li{
			margin-right: 0px;
			margin-bottom: 25px;
		}
	}
`

const MenuLink = styled(NavLink)`
	color: var(--grey);
	cursor: pointer;
	font-size: 14px;
	text-transform: uppercase;
	transition: var(--transition-sm);

	@media (min-width: 1800px){
		font-size: 18px;
	}

	&.active{
		color: var(--white);
	}

	@media (any-hover: hover){
		:hover{
			color: var(--white);
		}
	}

	@media (max-width: 767px){
		font-size: 22px;
	}
`

const Menu = ({links}) => {
	return(
		<MenuBody>
			<MenuList>
				{links.map((link, index) => <li key={index}><MenuLink to={link.to}>{link.text}</MenuLink></li>)}
			</MenuList>
		</MenuBody>
	)
}

export {Menu}