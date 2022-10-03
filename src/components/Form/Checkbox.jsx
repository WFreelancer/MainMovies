import { forwardRef } from "react";
import styled from 'styled-components'
import {motion} from 'framer-motion'

const CheckboxLabel = styled.label`
	will-change: transform;
	position:relative;
	cursor:pointer;
	-webkit-user-select: none; /* Chrome/Safari */
	-moz-user-select: none; /* Firefox */
	overflow: hidden;
	border-radius: 2.125em;
	box-shadow: ${({dark}) => dark ? `inset 0px 0px 0px 1px var(--color-border-dark)` : `inset 0px 0px 0px 1px var(--white)`};
`

const CheckboxText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 2.125em;
	padding: 1.05em 2.05em;
	overflow: hidden;
	color: ${({dark}) => dark ? `var(--bg-dark)` : `var(--white)`};
	
	z-index: 3;
	transition: color 0.3s ease;

	@media (min-width: 1800px){
		font-size: 1.5rem;
	}

	@media (any-hover: hover){
		${CheckboxLabel}:hover & {
			color: ${({dark}) => dark ? `var(--white)` : `var(--bg-dark)`};
		}
	}
`
const HoverEl = styled.div`
	position: absolute;
    width: 150%;
    height: 200%;
    top: -50%;
    left: -25%;
	transform: translate(0px, 76%);
	border-radius: 50%;
	z-index: 2;
	transition: background-color 0.25s ease-in-out 0s;
	transition-property: transform;
	background: ${({dark}) => dark ? `var(--bg-dark)` : `var(--white)`};

	@media (any-hover: hover){
		${CheckboxLabel}:hover & {
			transform: translate(0);
		}
	}
	
`

const CheckboxInput = styled.input`
	display: none;
	position: relative;

	&:checked + ${CheckboxText} {
		color: ${({dark}) => dark ? `var(--white)` : `var(--bg-dark)`};
		background: ${({dark}) => dark ? `var(--bg-dark)` : `var(--white)`};
	}
`

const Checkbox = forwardRef((props, ref) => {
	const {
		children,
		name,
		id,
		filter,
		handleСheckbox = Function.prototype,
		type = 'checkbox',
		dark
	} = props;

	return(
		<CheckboxLabel ref={ref} dark={dark}>
			<CheckboxInput dark={dark} type={type} name={name.toLowerCase()} value={name} checked={filter === id} onChange={() => handleСheckbox(id)}/>
			<CheckboxText dark={dark}>{children}</CheckboxText>
			<HoverEl dark={dark}></HoverEl>
		</CheckboxLabel>
	)
})

const MCheckbox = motion(Checkbox);

export {Checkbox, MCheckbox}