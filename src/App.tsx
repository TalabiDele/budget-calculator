import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Budget from './pages/Budget'
import NavBar from './containers/NavBar'
import { Box } from '@chakra-ui/react'
import { Provider } from './context/Context'
import CreateBudget from './pages/CreateBudget'

const App: React.FC = () => {
	return (
		<Provider>
			<Box
				background={'#f0f0f0'}
				height={'100vh'}
				width={'100vw'}
				display={'flex'}
				alignItems={'center'}
			>
				<Box
					background={'#fff'}
					width={'375px'}
					mx={'auto'}
					height={'100vh'}
					borderRadius={'5px'}
					boxShadow={'lg'}
					padding={'1rem 2rem'}
				>
					<Router>
						<NavBar />
						<Routes>
							<Route element={<Budget />} path='/' />
							<Route element={<CreateBudget />} path='/create-budget' />
						</Routes>
					</Router>
				</Box>
			</Box>
		</Provider>
	)
}

export default App
