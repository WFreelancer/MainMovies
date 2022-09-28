import { useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useData} from '../Context'
import { IoEyeSharp } from "react-icons/io5";

import {Container} from '../components/Container'
import {MButton} from '../components/Button'
import {MTitle} from '../components/Title'


const MovieWrapper = styled(motion.section)`
	position: relative;
	padding: 10vh 0 15vh 0;
	overflow: hidden;

	@media (max-width: 767px){
		padding: 7vh 0 10vh 0;
	}
`
const MovieImage = styled(motion.div)`
	position: relative;
	overflow: hidden;
	min-height: 200px;

	@media (min-width: 1800px){
		min-height: 250px;
	};

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left:0;
		object-fit: cover;
	}

	@media (max-width: 550px){
		min-height: 250px;
		:nth-child(1),
		:nth-child(2){
			display: none;
		}
	}
`
const MovieImageGroup = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	height 100%;

	@media (max-width: 767px){
		margin-bottom: 20px;
	}

	@media (max-width: 550px){
		display: block;
	}

	${MovieImage}:nth-child(1){
		grid-row: span 2;
		margin: 40px 20px 40px 0px;
		@media (max-width: 767px){
			margin: 0px 20px 0px 0px;
		}
	}
	${MovieImage}:nth-child(2){
		margin-bottom: 10px;
	}
	${MovieImage}:nth-child(3){
		margin-top: 10px;
		@media (max-width: 550px){
			margin-top: 0px;
		}
	}
`

const MovieContent = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 40px;

	@media (max-width: 1024px){
		grid-column-gap: 20px;
	}

	@media (max-width: 767px){
		display: block;
		margin-top: 30px;
	}
`
const MovieInformation = styled(motion.div)`
`
const Text = styled(motion.p)`
	margin-bottom: 10px;

	@media (min-width: 1800px){
		font-size: 1.3rem;
		line-height: 1.8rem;
		margin-bottom: 20px;
	};

	@media (max-width: 768px){
		font-size: 1.2rem;
	};
`
const ReleaseData = styled(motion.div)`
	margin-bottom: 10px;

	span{
		font-weight: var(--fw-bold);

		@media (min-width: 1800px){
		font-size: 1.3rem;
		};

		@media (max-width: 768px){
			font-size: 1.1rem;
		};
	}

	
`
const Popular = styled(motion.div)`
	display: flex;
	align-items:center;

	span{
		font-weight: var(--fw-bold);
		margin-left: 7px;
		@media (min-width: 1800px){
			font-size: 1.3rem;
			margin-left: 15px;
		};

		@media (max-width: 768px){
			font-size: 1.1rem;
		};
	}
`

const Movie = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const {moviePage, moviePageLoad, animationContent, animationImageCard} = useData();
	const {
		overview,
		popularity,
		poster_path,
		backdrop_path,
		release_date,
		title,
	} = moviePage;
	const popular = parseInt(popularity, 10);

	useEffect(() => {
		window.scrollTo(0, 0);
		moviePageLoad(id);
		// eslint-disable-next-line
	}, [id])



	return(
		<MovieWrapper>
			<Container>
				<MButton
					button="true"
					dark="true"
					variants={animationContent}
					custom={1}
					onClick={() => navigate(-1)}
				>
					Go Back
				</MButton>
				
				<MovieContent>
					<MovieImageGroup initial="hidden" whileInView="visible" viewport={{once: true}}>
						<MovieImage>
							<motion.img src={'https://image.tmdb.org/t/p/w500' + (poster_path)} alt={title} custom={1} variants={animationImageCard}/>
						</MovieImage>
						<MovieImage>
							<motion.img src={'https://image.tmdb.org/t/p/w500' + (backdrop_path)} alt={title} custom={2} variants={animationImageCard}/>
						</MovieImage>
						<MovieImage>
							<motion.img src={'https://image.tmdb.org/t/p/w500' + (backdrop_path)} alt={title} custom={3} variants={animationImageCard}/>
						</MovieImage>
					</MovieImageGroup>
					<MovieInformation initial="hidden" whileInView="visible" viewport={{once: true}}>
						<MTitle textAlign="left" marginBottom="2vh" variants={animationContent} custom={2}>{title}</MTitle>
						<Text variants={animationContent} custom={4}>
							{overview}
						</Text>
						<ReleaseData variants={animationContent} custom={5}><span>Release:</span> {release_date}</ReleaseData>
						{popular !== isNaN && <Popular variants={animationContent} custom={6}>
							<IoEyeSharp size={20}/>
							<span>{popular}</span>
							</Popular>
						}
					</MovieInformation>
				</MovieContent>
			</Container>
		</MovieWrapper>
	) 
}

export default Movie;