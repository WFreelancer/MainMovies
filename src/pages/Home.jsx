import {useEffect} from 'react'
import {Hero} from '../components/Hero'
import { Filter } from "../components/Search";
import {MoreMovie} from '../components/MoreMovie'
import {Form} from '../components/Form'
import {Slider} from '../components/Slider'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		// eslint-disable-next-line
	}, [])
	
	return(
		<>
			<Hero request="Top Gun"/>
			<Filter/>
			<MoreMovie/>
			<Slider request="Spider-Man" title="Popular"/>
			<Form/>
		</>
	) 
}

export {Home};