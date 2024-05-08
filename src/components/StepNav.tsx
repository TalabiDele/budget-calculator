import { Box, Icon, Text } from '@chakra-ui/react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import useMyContext from '../hooks/useMyContext'

const StepNav = () => {
	const { step } = useMyContext()

	return (
		<Box
			my={'1rem'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<Icon as={FaArrowLeftLong} fontSize={'1rem'} cursor={'pointer'} />

			<Text color={'gray'} fontSize={'sm'} fontWeight={'medium'}>
				<span style={{ color: '#000' }}>{step}</span>/3
			</Text>
		</Box>
	)
}

export default StepNav
