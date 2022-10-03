import {Outlet} from 'react-router-dom'
import styled from 'styled-components';
import {useData} from '../Context'

import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Cookies} from '../components/Popups'
import { useEffect } from 'react';

const Wrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
`
const Main = styled.main`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	padding-top: 145px;

	@media (min-width: 1800px){padding-top: 210px;}
	@media (max-width: 1024px){padding-top: 125px;}

	@media (max-width: 767px){
		padding-top: 94px;
	}
`

const Layout = () => {
	const {messageSuccess, menuOpen, trailerPopup} = useData();
	

	useEffect(() => {
		if(menuOpen || messageSuccess || trailerPopup){
			document.querySelector('body').style.overflow = 'hidden'
		}else{
			document.querySelector('body').style.overflow = ''
		}
	}, [
		menuOpen,
		messageSuccess,
		trailerPopup
	]);

	return(
		<Wrapper>
			<Header/>
			<Main>
				<Outlet/>
			</Main>
			<Footer/>
			<Cookies/>
		</Wrapper>
	)
}

export default Layout;