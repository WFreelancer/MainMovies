import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Layout from './layout/Layout'
import {Home} from './pages/Home'
import Movie from './pages/Movie'
import {NotFound} from './pages/NotFound'

function App() {
	return (
		<Router basename='/MainMovies'>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="/movie/:id" element={<Movie/>}/>
					<Route  path='*' element={<NotFound/>}/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
