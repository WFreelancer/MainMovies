import { useEffect } from 'react';
import styled from 'styled-components';
import {useData} from '../../Context'

import {SearchInput} from './SearchInput'
import {Container} from '../Container'
import {Logo} from '../Logo'
import {Burger, BurgerFixed} from '../Button'
import {Overlay} from '../Overlay'
import {FixedMenu} from '../Menu'
import {Menu} from '../Menu'


const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTopWrapper = styled.div`
	background-color: var(--bg-dark);
	padding: 20px 0;

	@media (min-width: 1800px){
		padding: 30px 0;
	}

	@media (max-width: 767px){
		padding: 15px 0;
	}
`;

const HeaderBody = styled.div`
	display: flex;
	align-items: center;
`

const links = [
	{to:'/', text: 'Home'},
	{to:'/about', text: 'About'},
	{to:'/popular', text: 'Most popular'},
	{to:'/news', text: 'News'},
	{to:'/contacts', text: 'Contacts'}
]

const HeaderTop = () => {
	const {menuOpen, setMenuOpen, showIcon, setShowIcon} = useData();

	useEffect(() => {
		if (window.scrollY > 200) {
			setShowIcon(true);
		} else {
			setShowIcon(false);
		}

		document.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowIcon(true);
			} else {
				setShowIcon(false);
			}
		});
		// eslint-disable-next-line
	}, [])

	return (
		<HeaderTopWrapper>
			<Container>
				<HeaderContent>
					<Logo/>
					<HeaderBody>
						<Menu links={links}/>
						<SearchInput/>
						<Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
						<FixedMenu menuOpen={menuOpen} links={links} setMenuOpen={setMenuOpen}/>
						<BurgerFixed showIcon={showIcon} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
						<Overlay active={menuOpen} setMenuOpen={setMenuOpen}/>
					</HeaderBody>
				</HeaderContent>
			</Container>
		</HeaderTopWrapper>
		
	)
}

export {HeaderTop};