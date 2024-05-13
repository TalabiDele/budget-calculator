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
	Text,
} from '@chakra-ui/react'
import Paragraph from './Paragraph'
import { BsChevronDown } from 'react-icons/bs'
import { BiDish } from 'react-icons/bi'
import { PiPiggyBank } from 'react-icons/pi'
import { HiPlus } from 'react-icons/hi'
import toast from 'react-hot-toast'
import Budgets from './Budgets'
import addNumbers from '../utils/addNumbers'

const StepTwo = () => {
	const [isCategory, setIsCategory] = useState<string>('')
	const [percent, setPercent] = useState<number>(0)
	const [budgetAmount, setBudgetAmount] = useState<string | undefined>(
		undefined
	)

	const { amount, budgetCategory, setBudgetCategory } = useMyContext()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setBudgetAmount(e.target.value)

		const budget = parseFloat(e.target.value)

		if (budget && amount) {
			const percentage = (budget * 100) / amount

			console.log(budget)

			console.log(percentage)

			setPercent(() => {
				// console.log('Previous state:', prevState)
				return percentage
			})
		} else {
			setPercent(0)
		}

		// console.log(budgetAmount)
	}

	const handleAddBudget = () => {
		if (budgetAmount) {
			if (percent > 100) {
				toast.error('Oopss... Expense is more than your budget!', {
					duration: 6000,
				})
			} else {
				budgetCategory.push({
					name: isCategory,
					amount: budgetAmount,
					percent,
					id: `B${Math.floor(Math.random() * 100)}`,
				})
				setBudgetCategory(budgetCategory)

				const sum: number = addNumbers(budgetCategory)

				if (sum > 100) {
					toast.error('Expense is more than budget!')
					budgetCategory.pop()

					setBudgetCategory(budgetCategory)
				} else {
					setIsCategory('')

					setPercent(0)

					setBudgetAmount('')

					toast.success('Budget added!')
				}
			}
		} else {
			toast.error('Enter your budget amount!', {
				duration: 6000,
			})
		}

		// setBudgetCategory()
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
				value={budgetAmount}
				onChange={(e) => handleChange(e)}
				color={'navy'}
				fontWeight={'bold'}
				_placeholder={{ color: 'gray', fontWeight: 'medium' }}
			/>

			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				mt={'2rem'}
			>
				<Text fontSize={'xs'} color={'bg.200'} fontWeight={'500'}>
					% of budget: {percent.toFixed(0)}%
				</Text>

				<Icon
					as={HiPlus}
					color={'bg.200'}
					background={'bg.50'}
					fontSize={'2rem'}
					padding={'0.2rem'}
					borderRadius={'50%'}
					cursor={'pointer'}
					onClick={handleAddBudget}
				/>
			</Box>

			<Budgets />
		</Box>
	)
}

export default StepTwo
