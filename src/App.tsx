import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Budget from './pages/Budget'
import NavBar from './containers/NavBar'
import { Box } from '@chakra-ui/react'
function App() {
	return (
		<Box>
			<Router>
				<NavBar />
				<Routes>
					<Route element={<Budget />} path='/' />
				</Routes>
			</Router>
		</Box>
	)
}

export default App
