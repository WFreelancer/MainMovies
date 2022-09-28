import { useState } from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {motion, AnimateSharedLayout} from 'framer-motion'

const HeaderBottomWrapper = styled.div`
	background-color: var(--bg-pink);
	margin: 0 auto;
`;

const MenuEl = styled.ul`
	display: flex;
	white-space: nowrap;
	padding: 20px;
	overflow-x: auto;
	max-width: max-content;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;

	@media (min-width: 1800px){
		padding: 30px 20px;
	}

	li{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--white);
	}

	::-webkit-scrollbar {
		display: none;
	}
	-scrollbar {
		display: none;
	}

	@media (max-width: 1024px){
		padding: 10px 20px;
	}
`

const MenuLink = styled(Link)`
	color: inherit;
	font-size: 14px;
	text-transform: uppercase;
	padding: 10px 20px;
	cursor: pointer;
	transition: var(--transition-sm);
	z-index: 2;

	@media (min-width: 1800px){
		font-size: 18px;
		padding: 15px 30px;
	}

`

const AnimBackground = styled(motion.div)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--white);
	border-radius: 30px;
`

const Links = [
	{text: 'Cinema Movies', to: '/'},
	{text: 'Tv series', to: '/series'},
	{text: 'Cartoons', to: '/cartoons'},
	{text: 'anime', to: '/anime'},
	{text: 'New Movies', to: '/newMovies'},
]

const HeaderBottom = () => {
	const [activeLink, setActiveLink] = useState(0);

	return(
		<HeaderBottomWrapper>
			<MenuEl>
				<AnimateSharedLayout>
					{
						Links.map((link, index) => 
							<motion.li 
								key={index}
								initial={{color: 'var(--white)'}}
								animate={{color: activeLink === index ? 'var(--bg-pink)': 'var(--white)'}}
								transition={{ duration: 0.1 }}
								onClick={() => setActiveLink(index)}
							>
								{activeLink === index && <AnimBg/>}
								<MenuLink to={link.to} >{link.text}</MenuLink>
							</motion.li>
						)
					}
				</AnimateSharedLayout>
			</MenuEl>
		</HeaderBottomWrapper>
	)
}

const AnimBg = () => {
	return(
		<AnimBackground 
			layoutId='active'
			transition={{
				type: 'tween',
				duration: 0.5
			}}
		/>
	)
}

export {HeaderBottom};