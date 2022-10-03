import {useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useData} from '../../Context'
import {Overlay} from '../Overlay'
import {TrailerPopup} from '../Popups'

import {MButton} from '../Button'
import poster from '../../assets/images/Top-Gun.jpg';
import posterMobile from '../../assets/images/top-gan-mobile2.jpeg';

const HeroWrapper = styled(motion.section)`
	position: relative;
	overflow: hidden;
	width: 100%;
	min-height: calc(100vh - 146px);
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Content = styled.div`
	position: relative;
	z-index: 3;
	padding: 110px 20px;
	max-width: 600px;
	margin: 0 auto;
	text-align: center;

	@media (min-width: 1800px){
		max-width: 1100px;
	}
`

const Actions = styled.div`
	display: flex;
	justify-content: center;


	*{
		margin: 0 5px;
	}
	@media (min-width: 1800px){
		*{
			margin: 0 15px;
		}
	}
`

const Title = styled(motion.h2)`
	font-size: 3rem;
	color: var(--white);
	margin-bottom: 15px;
	font-weight: var(--fw-bold);

	@media (min-width: 1800px){
		font-size: 5rem;
	}

	@media (max-width: 767px){
		font-size: 2rem;
	}
`

const Text = styled(motion.p)`
	font-size: 1.1rem;
	color: var(--color-text);
	margin-bottom: 20px;
	line-height: 1.5rem;
	font-weight: var(--fw-light);

	@media (min-width: 1800px){
		font-size: 1.8rem;
		line-height: 2.3rem;
		margin-bottom: 40px;
	}

	@media (max-width: 767px){
		font-size: 1rem;
		line-height: 1.3rem;
	}
`

const HeroImage = styled(motion.picture)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;

	img{
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:before{
		content: "";
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
`

const Hero = ({request}) => {
	const {animationContent , animationImage, handleHero, hero, trailerPopup, setTrailerPopup} = useData();
	const {title, overview, id} = hero;

	useEffect(() => {
		handleHero(request);
		// eslint-disable-next-line
	}, [])

	return (
		<HeroWrapper initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
			<HeroImage variants={animationImage}>
				<motion.source srcSet={posterMobile} media="(max-width: 500px)"/>
				<motion.img src={poster} alt={title}/>
			</HeroImage>
			<Content>
				<Title variants={animationContent} custom={1}>
					{title}
				</Title>
				<Text variants={animationContent} custom={2}>
					{overview}
				</Text>
				<Actions>
					<MButton pink="true" to={`/movie/${id}`} variants={animationContent} custom={3}>Learn More</MButton>
					<MButton
						light="true"
						button="true"
						variants={animationContent}
						custom={4}
						onClick={() => setTrailerPopup(!trailerPopup)}
					>
						Watch Trailer
					</MButton>
				</Actions>
			</Content>
			<TrailerPopup url="https://www.youtube.com/embed/giXco2jaZ_4"/>
			<Overlay active={trailerPopup}/>
		</HeroWrapper>
	)
}

export {Hero}