import { Route, Routes } from 'react-router-dom'
import Budget from './pages/Budget'
import NavBar from './containers/NavBar'
import { Box } from '@chakra-ui/react'
import { Provider } from './context/Context'
import CreateBudget from './pages/CreateBudget'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
	const location = useLocation()

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
					position={'fixed'}
					left={'0rem'}
					right={'0rem'}
					overflowY={'scroll'}
					css={{
						'&::-webkit-scrollbar': {
							width: '4px',
						},
						'&::-webkit-scrollbar-track': {
							width: '6px',
						},
						'&::-webkit-scrollbar-thumb': {
							background: '#C1C4CD',
							borderRadius: '24px',
						},
					}}
				>
					<Toaster />
					{location.pathname === '/' && <NavBar />}
					<Routes>
						<Route element={<Budget />} path='/' />
						<Route element={<CreateBudget />} path='/create-budget' />
					</Routes>
				</Box>
			</Box>
		</Provider>
	)
}

export default App
