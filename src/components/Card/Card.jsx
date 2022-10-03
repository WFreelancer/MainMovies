import { forwardRef } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'
import { IoEyeSharp, IoTimeOutline, IoHeartSharp } from "react-icons/io5";
import error from '../../assets/images/image-not-found.png';

const CardWrapper = styled(NavLink)`
	display: flex;
	flex-direction: column;
`
const Figure = styled.figure`
	min-height: 250px;
	position: relative;
	padding-bottom: 110%;
	margin-bottom: 10px;
	overflow: hidden;
	border-radius: 15px;

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		object-fit: cover;
		transition: transform .4s linear;
		@media (any-hover: hover){
			${CardWrapper}:hover & {
				transform: scale(1.1);
			}
		}
	}
`
const TitleEl = styled.h3`
	font-size: 1.1rem;
	margin-bottom: 5px;
	line-height: 1.5rem;
	font-weight: var(--fw-medium);
	flex: 1 1 auto;

	@media (min-width: 1800px){
		font-size: 1.5rem;
		line-height: 2rem;
	}

	@media (max-width: 767px){
		font-size: 1.4rem;
		line-height: 1.7rem;
	}
`
const YearEl = styled.h3`
	font-size: 0.9rem;
	color: var(--grey);

	@media (min-width: 1800px){
		font-size: 1.3rem;
	}

	@media (max-width: 768px){
		font-size: 1rem;
	};
`
const Text = styled.p`
	font-size: 0.9rem;
	margin-bottom: 10px;

	@media (min-width: 1800px){
		font-size: 1.3rem;
		line-height: 1.8rem;
	}
	@media (max-width: 768px){
		font-size: 1.1rem;
	};
`

const Figcaption = styled.figcaption`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;

	:before{
		content: '';
		background: rgba(31, 35, 36, 0.4);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: all ease 0.3s;
	}
	@media (any-hover: hover){
		${CardWrapper}:hover & {
			:before{
				opacity: 1;
			}
		}
	}
	
`

const Body = styled.div`
	color: var(--white);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 1.5em 1em;
	width: 100%;
	opacity: 0;
	transform: translate3d(0,10px,0);
	transition-delay: 0.05s;
	transition-duration: 0.35s;

	@media (any-hover: hover){
		${CardWrapper}:hover & {
			opacity: 1;
			transform: translate3d(0,0,0);
		}
	}
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	span{
		display: inline-flex;
		margin-bottom: 5px;
	}
`


const Card = forwardRef((props, ref) => {
	const {backdrop_path, title, release_date, overview, popularity, id} = props;
	const popular = parseInt(popularity, 10);

	return(
		<CardWrapper ref={ref} to={`/movie/${id}`}>
			<Figure>
				<img src={backdrop_path ? 'https://image.tmdb.org/t/p/w500' + backdrop_path : error} alt={title} />
				 <Figcaption>
					<Body>
						<Column>
							<span>{popular}</span>
							<IoEyeSharp size={20}/>
						</Column>
						<Column>
							<span>01:24:40</span>
							<IoTimeOutline size={20}/>
						</Column>
						<Column>
							<span>367</span>
							<IoHeartSharp size={20}/>
						</Column>
					</Body>
				</Figcaption> 
			</Figure>
			<TitleEl>{title}</TitleEl>
			<Text>{overview.slice(0, 60)}...</Text>
			<YearEl>{release_date}</YearEl>
		</CardWrapper>
	)
})

const MCard = motion(Card);

export {Card, MCard}