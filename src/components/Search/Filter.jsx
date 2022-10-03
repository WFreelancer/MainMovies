import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useData} from '../../Context'

import {Container} from '../Container'
import {MCheckbox} from '../Form'
import {MTitle} from '../Title'

const FilterWrapper = styled(motion.section)`
	padding: 10vh 0;
	text-align: center;
	@media (max-width: 1024px){
		padding: 6vh 0;
	}
`
const Text = styled(motion.p)`
	text-align: center;
	margin: 0 auto 40px auto;
	max-width: 900px;

	@media (min-width: 1800px){
		font-size: 1.8rem;
		line-height: 2.3rem;
		margin: 0 auto 60px auto;
		max-width: 1200px;
	}

	@media (max-width: 1024px){
		margin: 0 auto 20px auto;
	}
`
const List = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 15px;
	@media (min-width: 1800px){
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`

const Filter = () => {
	const { animationContent, handleСheckbox, dataFilters, filter} = useData();

	return(
		<FilterWrapper initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
			<Container>
				<MTitle variants={animationContent} custom={1}>Watch your favorite movies online</MTitle>
				<Text variants={animationContent} custom={2}>Lorem ipsum dolor sit amet consectetur 
				adipisicing elit. Quia cupiditate dolorem, totam, inventore maiores qui omnis cumque
				soluta labore corrupti, 
				porro atque unde veniam facere incidunt vero aspernatur architecto tenetur.</Text>
				<List initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
					{dataFilters.map((dataFilter, index) => {
						return <MCheckbox variants={animationContent}
							custom={index + 2}
							dark='true'
							key={index}
							handleСheckbox={handleСheckbox}
							filter={filter}
							type='radio'
							{...dataFilter}
						>
							{dataFilter.name}
						</MCheckbox>
					})}
				</List>
			</Container>
		</FilterWrapper>
	)
}

export {Filter};