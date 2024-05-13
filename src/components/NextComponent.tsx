import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import useMyContext from '../hooks/useMyContext'
import { BsArrowRight } from 'react-icons/bs'
import toast from 'react-hot-toast'
import addNumbers from '../utils/addNumbers'

const NextComponent: React.FC = () => {
	const { step, amount, setStep, percentLeft, budgetCategory } = useMyContext()

	const sum: number = addNumbers(budgetCategory)

	const handleNext = () => {
		if (amount === undefined) {
			toast.error('Enter a valid amount', {
				duration: 6000,
			})
		} else {
			setStep(2)
			toast.success('Choose categories', {
				duration: 6000,
			})
		}
	}

	console.log(step)

	return (
		<Box
			position={'absolute'}
			right={'0rem'}
			left={'0rem'}
			width={'80%'}
			mx={'auto'}
			bottom={'2rem'}
		>
			{step === 1 && (
				<Box>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<Text
							fontSize={'xs'}
							borderBottom={'1px solid #67A2DC'}
							color={'bg.100'}
						>
							Create from spending pattern
						</Text>
						<Button
							rightIcon={<BsArrowRight />}
							color={'bg.200'}
							fontSize={'xs'}
							variant='text'
							px={'0px'}
							onClick={handleNext}
						>
							Next
						</Button>
					</Box>
				</Box>
			)}

			{step === 2 && (
				<Box>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						{percentLeft && (
							<Text fontSize={'xs'} color={'gray'}>
								% of budget remaining : {(percentLeft - sum).toFixed(0)}%
							</Text>
						)}
						<Button
							rightIcon={<BsArrowRight />}
							color={'bg.200'}
							fontSize={'xs'}
							variant='text'
							px={'0px'}
							onClick={handleNext}
						>
							Done
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default NextComponent
