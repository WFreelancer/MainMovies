import React, { useEffect} from 'react';
import styled from 'styled-components';
import {useData} from '../../Context'
import {Magnetic} from './Magnetic'

const BurgerWrapper = styled.button`
	will-change: transform;
	background: transparent;
	position: fixed;
	top: 30px;
	right: 30px;
	z-index: 11;
	cursor:pointer;
	transform: translateY(0%) scale(0) rotate(0.001deg);
	transition: transform 0.4s cubic-bezier(0.36, 0, 0.66, 0) 0s;

	@media (min-width: 1800px){
		top: 50px;
		right: 50px;
	};

	@media (max-width: 480px){
		top: 20px;
		right: 20px;
	};
	
	${({showIcon, menuOpen}) => (showIcon || menuOpen) &&`
		transform: translateY(0%) scale(1) rotate(0.001deg);
		transition: transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1) 0s;
	`}
`

const BurgerBody = styled.div`
	position: relative;
	background-color: var(--bg-dark);
	// box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
	display:flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	overflow: hidden;
	width: 5.5vw;
	height: 5.5vw;
	box-shadow: rgb(0 0 0) 0px 0px 0px 0px;
	transition: transform .2s linear, color .1s linear, background-color 0.25s cubic-bezier(0.36, 0, 0.66, 0) 0s, box-shadow 0.25s cubic-bezier(0.36, 0, 0.66, 0) 0s;
	
	@media (max-width: 1024px){
		width: 70px;
		height: 70px;
	};

	${({menuOpen}) => menuOpen &&`
		background-color: var(--bg-pink);
	`}
`
const BurgerEl = styled.div`
	position: absolute;
	width: 28%;
	height: 8%;
	opacity: 1;
	z-index: 2;
	transition: transform .25s linear;

	:before,
	:after{
		content: "";
		display: block;
		position: absolute;
		left: 50%;
		height: 1px;
		width: 100%;
		transform: translate(-50%, -50%) rotate(0.001deg);
		background: var(--white);
		transition: var(--transition-sm);
	}

	:before{
		top: 0;
		transform: translate(-50%, -50%);
	}

	:after{
		top: 100%;
		transform: translate(-50%, -50%);
	}

	${({menuOpen}) => menuOpen &&`
		:before{
			top: 50%;
			transform: translate(-50%, -50%) rotate(-45deg);
		}

		:after{
			top: 50%;
			transform: translate(-50%, -50%) rotate(45deg);
		}
	`
	}
`
const HoverEl = styled.div`
	background-color: var(--bg-pink);
	position: absolute;
    width: 150%;
    height: 200%;
    top: -50%;
    left: -25%;
	transform: translate(0px, 76%);
	border-radius: 50%;
	transition: background-color 0.25s ease-in-out 0s;
	transition-property: transform;

	@media (any-hover: hover){
		${BurgerBody}:hover & {
			transform: translate(0);
		}
	}
`

const BurgerFixed = React.memo(({menuOpen, setMenuOpen}) => {
	const {showIcon, setShowIcon} = useData();

	const fixedBurger = () => {
		window.scrollY > 200 ? setShowIcon(true) : setShowIcon(false)
	}

	useEffect(() => {
		Magnetic();
		window.scrollY > 200 ? setShowIcon(true) : setShowIcon(false)
		document.addEventListener('scroll', fixedBurger);

		return () => document.removeEventListener('scroll', fixedBurger);
		// eslint-disable-next-line
	}, []);

	return (
		<BurgerWrapper showIcon={showIcon} menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
			<BurgerBody  menuOpen={menuOpen} data-button-animation>
				<BurgerEl menuOpen={menuOpen} data-magnetic-child></BurgerEl>
				<HoverEl></HoverEl>
			</BurgerBody>
		</BurgerWrapper>
	)
})

export {BurgerFixed}