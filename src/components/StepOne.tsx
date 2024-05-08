import { Box, Input } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import React, { useState } from 'react'

const StepOne: React.FC = () => {
	const [amount, setAmount] = useState<number>()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(parseFloat(e.target.value))
	}

	return (
		<Box mt={'2rem'}>
			<Paragraph title='How much would you like to budget for this month?' />

			<Input
				placeholder='Amount (in ₦)'
				type='number'
				fontSize={'sm'}
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
