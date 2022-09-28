import styled from 'styled-components'
import {motion, AnimatePresence} from 'framer-motion'

import {MCard} from '../Card'

const MoviesBody = styled(motion.div)`
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 30px;
	display: grid;
	margin-bottom: 70px;

	@media (min-width: 1800px){
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	}

	@media (max-width: 1024px){
		margin-bottom: 50px;
	}
`
const animationCard = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: custom => ({
		opacity: 1,
		y: 0,
		transition: {
			// delay: custom * 0.2,
			duration: 0.3,
		}
	})
}

const MoviesList = ({movies = []}) => {
	return(
		<MoviesBody>
			<AnimatePresence>
				{movies.map((movie, index) => {
					return <MCard 
						layout
						key={movie.id}
						{...movie}
						variants={animationCard}
						custom={index}
						initial="hidden"
						exit={{ opactiy: 0 }}
						whileInView="visible"
						viewport={{once: true}}
					/>
				})}
			</AnimatePresence>
		</MoviesBody>
	)
}

export {MoviesList}