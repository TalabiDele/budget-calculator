import BudgetView from '../containers/BudgetView'
import { Box } from '@chakra-ui/react'

const Budget = () => {
	return (
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
				padding={'2rem'}
			>
				<BudgetView />
			</Box>
		</Box>
	)
}

export default Budget
