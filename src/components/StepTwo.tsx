import React, { useState } from 'react'
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
	const [isCategory, setIsCategory] = useState<string>('')

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
					{isCategory === '' && 'Select Expense Category'}
					{isCategory === 'Food and Drinks' && (
						<Box display={'flex'} alignItems={'center'}>
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
						</Box>
					)}
					{isCategory === 'Saving' && (
						<Box display={'flex'} alignItems={'center'}>
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
						</Box>
					)}
				</MenuButton>
				<MenuList>
					<MenuItem
						minH='40px'
						_hover={{ bg: '#eeeeee' }}
						color={'gray'}
						_focus={{ bg: 'none' }}
						fontSize={'xs'}
						onClick={() => setIsCategory('Food and Drinks')}
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
						onClick={() => setIsCategory('Saving')}
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
				color={'navy'}
				fontWeight={'bold'}
				_placeholder={{ color: 'gray', fontWeight: 'medium' }}
			/>
		</Box>
	)
}

export default StepTwo
