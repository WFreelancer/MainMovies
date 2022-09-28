import styled from 'styled-components';
import {useData} from '../../Context'

import { IoSearchSharp } from "react-icons/io5";
import { useEffect } from 'react';

const IoSearch = styled(IoSearchSharp)`
	cursor: pointer;
	font-size: 1rem;
	color: var(--white);
	transition: var(--transition-sm);

	@media (min-width: 1800px){
		font-size: 1.3rem;
	}

	@media (max-width: 767px){
		font-size: 1.3rem;
	}

	@media (any-hover: hover){
		:hover{
			color: var(--bg-pink);
		}
	}
`
const MenuSearch = styled.form`
	display: flex;
	align-items: center;
	position: relative;
`
const SearchLabel = styled.label`
	will-change: transform;
	transition: var(--animation-primary);
	position: relative;
	height: 30px;
	overflow: hidden;
	width: ${props => !props.active ? `0` : `200px`};
	margin-right: ${props => !props.active ? `0` : `10px`};
	z-index: 3;

	@media (min-width: 1800px){
		height: 45px;
		width: ${props => !props.active ? `0` : `320px`};
		margin-right: ${props => !props.active ? `0` : `15px`};
	}

	@media (max-width: 1024px){
		position: absolute;
		top: 40px;
		right: -50px;
		height: 40px;
		margin-right: 0;
		width: 350px;
		box-shadow: var(--shadow);
		transform: ${props => !props.active ? `translateY(30px)` : `translateY(0px)`};
		opacity: ${props => !props.active ? `0` : `1`};
		pointer-events: ${props => !props.active ? `none` : `auto`};
		box-shadow: var(--shadow);
	}

	@media (max-width: 400px){
		width: 280px;
	}
`
const Input = styled.input`
	font-size: 16px;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 0px 10px;
	border-radius: 3px;
	border: 2px solid transparent;

	@media (min-width: 1800px){
		::-webkit-input-placeholder {
			font-size: 18px;
		}
		::-moz-placeholder {
			font-size: 18px;
		}
		:-ms-input-placeholder {
			font-size: 18px;
		}
		:-moz-placeholder {
			font-size: 18px;
		}
	}

	:focus{
		border-color: var(--bg-pink);

		::-webkit-input-placeholder { /* Chrome/Opera/Safari */
			color: transparent;
		}
		::-moz-placeholder { /* Firefox 19+ */
			color: transparent;
		}
		:-ms-input-placeholder { /* IE 10+ */
			color: transparent;
		}
		:-moz-placeholder { /* Firefox 18- */
			color: transparent;
		}
	}
`

const SearchInput = () => {
	const {search, setSearch, openSearch, setOpenSearch, toggleSearch} = useData();

	useEffect(() => {
		document.querySelector('body').addEventListener('click', () => {
			if(openSearch){
				setOpenSearch(false)
			}
			return false;
		})
		// eslint-disable-next-line
	}, [])

	return (
		<MenuSearch noValidate="on" onClick={(e) => e.stopPropagation()}>
			<SearchLabel active={openSearch}>
				<Input value={search} type='search' placeholder='Search movie' onChange={(e) => setSearch(e.target.value)}/>
			</SearchLabel>
			<IoSearch onClick={toggleSearch}/>
		</MenuSearch>
	)
}

export {SearchInput};