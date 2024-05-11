import React from 'react'
import useMyContext from '../hooks/useMyContext'
import {
	Box,
	Button,
	Icon,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import Paragraph from './Paragraph'
import { BsChevronDown } from 'react-icons/bs'
import { BiDish } from 'react-icons/bi'
import { PiPiggyBank } from 'react-icons/pi'

const StepTwo = () => {
	const { amount, setAmount } = useMyContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(parseFloat(e.target.value))
	}

	return (
		<Box mt={'2rem'}>
			<Paragraph title='How much would you like to spend on each category this month?' />

			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<BsChevronDown />}
					fontSize={'xs'}
					bg={'white'}
					color={'gray'}
					transition='all 0.2s'
					borderRadius='md'
					boxShadow={'0px 0px 20px#e9e9e9'}
					_hover={{ bg: 'none' }}
					_expanded={{ bg: 'none' }}
					width={'100%'}
					textAlign={'left'}
					mt={'1rem'}
				>
					Select Expense Category
				</MenuButton>
				<MenuList>
					<MenuItem
						minH='40px'
						_hover={{ bg: '#eeeeee' }}
						color={'gray'}
						_focus={{ bg: 'none' }}
						fontSize={'xs'}
					>
						<Icon
							as={BiDish}
							fontSize={'1.5rem'}
							color={'#C89104'}
							bg={'#F4E9CD'}
							height={'1.5rem'}
							width={'1.5rem'}
							borderRadius={'50%'}
							padding={'0.2rem'}
							mr={'1rem'}
						/>
						<span>Food and Drinks</span>
					</MenuItem>
					<MenuItem
						minH='40px'
						_hover={{ bg: '#eeeeee' }}
						color={'gray'}
						_focus={{ bg: 'none' }}
						fontSize={'xs'}
					>
						<Icon
							as={PiPiggyBank}
							fontSize={'1.5rem'}
							color={'#038A39'}
							bg={'#038a3945'}
							height={'1.5rem'}
							width={'1.5rem'}
							borderRadius={'50%'}
							padding={'0.2rem'}
							mr={'1rem'}
						/>
						<span>Savings</span>
					</MenuItem>
				</MenuList>
			</Menu>

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

export default StepTwo
