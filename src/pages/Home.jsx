import {useEffect, lazy} from 'react'

const LazyHero = lazy(() => import('../components/Hero'));
const LazyFilter = lazy(() => import('../components/Search'));
const LazyMoreMovies = lazy(() => import('../components/MoreMovie'));
const LazySlider = lazy(() => import('../components/Slider'));
const LazyForm = lazy(() => import('../components/Form'));

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		// eslint-disable-next-line
	}, [])
	
	return(
		<>
			<LazyHero request="Top Gun"/>
			<LazyFilter/>
			<LazyMoreMovies/>
			<LazySlider request="Spider-Man" title="Popular"/>
			<LazyForm/>
		</>
	) 
}

export {Home};