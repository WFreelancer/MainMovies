import {createContext, useContext, useEffect, useState} from 'react'
import {getMovie, getMovieByName, currentMovie} from './config'

const CustomContext = createContext(null);

const stor = () => {
	const data = localStorage.getItem('cookies')

	return data ? false : true;
}

const DataProvider = ({children}) => {
	const [cookies, setCookies] = useState(false);
	const [hero, setHero] = useState([]);
	const [movies, setMovies] = useState({});
	const [moviesFiltered, setMoviesFiltered] = useState([]);
	const [moviesSlider, setMoviesSlider] = useState([]);
	const [moviePage, setmoviePage] = useState([]);

	const [filter, setFilter] = useState(0);
	const [countPage, setCountPage] = useState(2);
	const [search, setSearch] = useState('');
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [trailerPopup, setTrailerPopup] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);

	const toggleSearch = () => setOpenSearch(!openSearch);

	useEffect(() =>{
		setTimeout(() => {
			setCookies(stor());
		}, 5000);
	}, [])


	const handleCookies = () => {
		localStorage.setItem('cookies', true)
		setCookies(false);
	}

	const handleСheckbox = (id) => {
		setFilter(id);
		handleFilter(id);
	}
	
	const handleHero = (request) => {
		if(!hero.length){
			fetch(getMovieByName(request))
			.then(response => response.json())
			.then(data => {
				setHero(data.results[0]);
			})
		}
	}

	// More Movie Components
	const firstLoadMovies = () => {
		if(!movies.length){
			// fetch(getMovie(1, filter))
			fetch(getMovie(1))
			.then(response => response.json())
			.then(data => {
				setMovies(data.results);
					setMoviesFiltered(data.results);
			})
		}
	}

	const showMore = () => {
		fetch(getMovie(countPage))
		.then(response => response.json())
		.then(data => {
			if(filter === 0){
				setMoviesFiltered([...moviesFiltered, ...data.results]);
				setMovies([...movies, ...data.results]);
				setCountPage(prev => prev + 1);
				return;
			}else{
				setMoviesFiltered([...moviesFiltered, ...data.results.filter(movie => movie.genre_ids.includes(filter))]);
				setCountPage(prev => prev + 1);
			}
		})
	}

	// Filter Components
	const handleFilter = (id) => {
		if(id === 0){
			setMoviesFiltered(movies);
			return;
		}

		setMoviesFiltered(movies.filter(movie => movie.genre_ids.includes(id)))
	}

	// Slider Components
	const sliderLoadMovies = (request) => {
		if(!moviesSlider.length){
			fetch(getMovieByName(request))
			.then(response => response.json())
			.then(data => {
				setMoviesSlider(data.results);
			})
		}
	}

	const moviePageLoad = (id) => {
		fetch(currentMovie(id))
		.then(response => response.json())
		.then(data => {
			setmoviePage(data);
		})
	}


	const animationImage = {
		hidden: {
			scale: 1.2,
			opacity: 0,
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
		},
		visible: {
			scale: 1.05,
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			transition: {
				duration: 1,
				type: "tween"
			}
		}
	}

	const animationImageCard = {
		hidden: {
			scale: 1.2,
			opacity: 0,
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
		},
		visible: custom => ({
			scale: 1.05,
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			transition: {
				delay: custom * 0.2,
				duration: 1,
				type: "tween"
			}
		})
	}

	const animationContent = {
		hidden: {
			opacity: 0,
			y: 100
		},
		visible: custom => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.2,
				duration: 0.4,
			}
		})
	}

	const dataFilters = [
		{
			id:0,
			name:"All"
		},
		{
			id:28,
			name:"Action"
		},
		{
			id:12,
			name:"Adventure"
		},
		{
			id:35,
			name:"Comedy"
		},
		{
			id:18,
			name:"Drama"
		},
		{
			id:10751,
			name:"Family"
		}
	];


	const value = {
		openSearch,
		setOpenSearch,
		toggleSearch,
		cookies,
		setCookies,
		handleCookies,
		hero,
		handleHero,
		movies,
		moviesFiltered,
		firstLoadMovies,
		dataFilters,
		filter,
		showMore,
		moviesSlider,
		sliderLoadMovies,
		moviePage,
		moviePageLoad,
		search,
		setSearch,
		handleFilter,
		menuOpen,
		setMenuOpen,
		messageSuccess,
		setMessageSuccess,
		trailerPopup,
		setTrailerPopup,
		showIcon,
		setShowIcon,
		handleСheckbox,
		animationContent,
		animationImage,
		animationImageCard
	}

	return(
		<CustomContext.Provider value={value}>
			{children}
		</CustomContext.Provider>
	)
}

const useData = () => useContext(CustomContext);

export {DataProvider, useData};