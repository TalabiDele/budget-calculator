import { Box, Icon, Text } from '@chakra-ui/react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import useMyContext from '../hooks/useMyContext'
import { useNavigate } from 'react-router'

const StepNav = () => {
	const { step, setStep } = useMyContext()

	const navigate = useNavigate()

	const handleNav = () => {
		if (step === 1) {
			navigate(-1)
		} else if (step > 1) {
			setStep(step - 1)
		}
	}

	return (
		<Box
			my={'1rem'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<Icon
				as={FaArrowLeftLong}
				fontSize={'1rem'}
				cursor={'pointer'}
				onClick={handleNav}
			/>

			<Text color={'gray'} fontSize={'sm'} fontWeight={'medium'}>
				<span style={{ color: '#000' }}>{step}</span>/3
			</Text>
		</Box>
	)
}

export default StepNav
