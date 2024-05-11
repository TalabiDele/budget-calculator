import { Box, Input } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import useMyContext from '../hooks/useMyContext'

const StepOne: React.FC = () => {
	const { amount, setAmount } = useMyContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(parseFloat(e.target.value))
	}

	return (
		<Box mt={'2rem'}>
			<Paragraph title='How much would you like to budget for this month?' />

			<Input
				placeholder='Amount (in ₦)'
				type='number'
				fontSize={'xs'}
				mt={'1rem'}
				variant='flushed'
				value={amount}
				onChange={handleChange}
				color={'gray'}
			/>
		</Box>
	)
}

export default StepOne
