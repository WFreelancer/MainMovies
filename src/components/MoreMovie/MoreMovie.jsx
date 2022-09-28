import { useEffect } from "react";
import styled from 'styled-components'
import {useData} from '../../Context'

import {Preloader} from '../Preloader'
import {Container} from '../Container'
import {MButton} from '../Button'
import {MoviesList} from '../MoviesList'

const MovieWrapper = styled.section`
`
const MovieContent = styled.div`
	text-align:center;
	padding-bottom: 10vh;
	@media (max-width: 1024px){
		padding: 6vh 0;
	}
`

const MoreMovie = () => {
	const {firstLoadMovies, animationContent, moviesFiltered = [], showMore} = useData();

	useEffect(() => {
		firstLoadMovies();
		// eslint-disable-next-line
	}, [])
	
	return(
		<MovieWrapper>
			<Container>
				<MovieContent>
					{!moviesFiltered.length ?
						<Preloader/> :
						<>
							<MoviesList movies={moviesFiltered}/>
							<MButton
								initial="hidden"
								whileInView="visible"
								viewport={{once: true, amount: 0.2}}
								variants={animationContent}
								custom={2}
								button="true"
								dark="true"
								onClick={() => showMore()}
							>
								View More
							</MButton>
						</>
					}
				</MovieContent>
			</Container>
		</MovieWrapper>
	)
}

export {MoreMovie};

