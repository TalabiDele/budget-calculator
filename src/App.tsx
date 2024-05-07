import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Budget from './pages/Budget'
import NavBar from './containers/NavBar'
import { Box } from '@chakra-ui/react'
import { Provider } from './context/Context'

const App: React.FC = () => {
	return (
		<Provider>
			<Box>
				<Router>
					<NavBar />
					<Routes>
						<Route element={<Budget />} path='/' />
					</Routes>
				</Router>
			</Box>
		</Provider>
	)
}

export default App
