import { useEffect, forwardRef } from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion'

import {Magnetic} from './Magnetic'

const CustomLink = styled(NavLink)`
	will-change: transform;
	position:relative;
	min-width: 160px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 2.125em;
	padding: 1.05em 0;
	cursor: pointer;
	user-select: none;
	color: var(--white);
	box-shadow: inset 0px 0px 0px 1px var(--color-border-light);
	overflow: hidden;
	transition: transform .2s linear, color .1s linear, background .15s linear;

	@media (min-width: 1800px){
		min-width: 220px;
		font-size: 1.5rem;
	}

	@media (max-width: 400px){
		min-width: 130px;
	};

	span{
		z-index: 3;
		transition: transform .25s linear,
			color 0.3s ease;
	}


	${(props) => props.light &&`
		background-color: transparent;
		border: 1px solid var(--white);

		:hover{
			span{
				color: var(--bg-dark);
			}
		}
	`}
	${(props) => props.dark &&`
		background-color: var(--bg-dark);
	`}

	${(props) => props.pink &&`
		background-color: var(--bg-pink);

		:hover{
			span{
				color: var(--white);
			}
		}
	`}

	${(props) => props.orange &&`
		background-color: var(--orange);
	`}
`
const CustomButton = styled.button`
	will-change: transform;
	position:relative;
	min-width: 170px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 2.125em;
	padding: 1.05em 0;
	cursor: pointer;
	user-select: none;
	color: var(--white);
	box-shadow: inset 0px 0px 0px 1px var(--color-border-light);
	overflow: hidden;
	transition: transform .2s linear, color .1s linear, background .15s linear;
	
	@media (min-width: 1800px){
		min-width: 250px;
		font-size: 1.5rem;
	}

	@media (max-width: 400px){
		min-width: 130px;
	};

	span{
		z-index: 3;
		transition: transform .25s linear,
			color 0.3s ease;
	}


	${(props) => props.light &&`
		background-color: transparent;
		border: 1px solid var(--white);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--bg-dark);
				}
			}
		}
	`}

	${(props) => props.dark &&`
		background-color: var(--bg-dark);
	`}

	${(props) => props.pink &&`
		background-color: var(--bg-pink);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--white);
				}
			}
		}
	`}

	${(props) => props.orange &&`
		background-color: var(--orange);
	`}
`
const HoverEl = styled.div`
	position: absolute;
    width: 150%;
    height: 200%;
    top: -50%;
    left: -25%;
	transform: translate(0px, 76%);
	border-radius: 50%;
	transition: background-color 0.25s ease-in-out 0s;
	transition-property: transform;

	${(props) => props.light &&`
		background-color: var(--white);
	`}

	${(props) => props.dark &&`
		background-color: var(--bg-pink);
	`}

	${(props) => props.pink &&`
		background-color: #E55171;
	`}

	${(props) => props.orange &&`
		background-color: #FFBF41;
	`}
	
	@media (any-hover: hover){
		${CustomButton}:hover & {
		transform: translate(0);
		}
		${CustomLink}:hover & {
			transform: translate(0);
		}
	}
`

const Button = forwardRef((props, ref) => {
	const {children, button, to, pink, light, dark, orange} = props;
	
	useEffect(() => {
		Magnetic();
	}, [])

	return (
		<>
			{button ?
				<CustomButton ref={ref} {...props} data-button-animation>
					<span data-magnetic-child>{children}</span>
					<HoverEl dark={dark} light={light} pink={pink} orange={orange}></HoverEl>
				</CustomButton> :
				<CustomLink ref={ref} to={to} {...props} data-button-animation>
					<span data-magnetic-child>{children}</span>
					<HoverEl dark={dark} light={light} pink={pink} orange={orange}></HoverEl>
				</CustomLink>
			}
		</>
		)
});

const MButton = motion(Button);

export {Button, MButton};