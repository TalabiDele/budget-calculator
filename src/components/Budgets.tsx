import { Box, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import useMyContext from '../hooks/useMyContext'
import { BiDish } from 'react-icons/bi'
import { PiPiggyBank } from 'react-icons/pi'
import { FaMinus } from 'react-icons/fa'

const Budgets: React.FC = () => {
	const { budgetCategory } = useMyContext()

	return (
		<div>
			<Box mt={'3rem'}>
				{budgetCategory?.map(
					(budget) =>
						budget.name !== '' && (
							// <
							// 	mb={'1rem'}
							// 	color={'navy'}
							// 	fontWeight={'500'}
							// 	fontSize={'xs'}
							// 	display={'grid'}
							// 	gridColumn={'4'}
							// >
							<Grid
								templateColumns='repeat(8, 1fr)'
								mb={'1rem'}
								color={'navy'}
								fontWeight={'500'}
								fontSize={'xs'}
								// justifyItems={'center'}
							>
								<GridItem colSpan={1} width={'2rem'}>
									{budget.name === 'Food and Drinks' && (
										<Icon
											as={BiDish}
											fontSize={'1.5rem'}
											color={'#C89104'}
											bg={'#F4E9CD'}
											height={'1.5rem'}
											width={'1.5rem'}
											borderRadius={'50%'}
											padding={'0.2rem'}
											// mr={'1rem'}
										/>
									)}
									{budget.name === 'Saving' && (
										<Icon
											as={PiPiggyBank}
											fontSize={'1.5rem'}
											color={'#038A39'}
											bg={'#038a3945'}
											height={'1.5rem'}
											width={'1.5rem'}
											borderRadius={'50%'}
											padding={'0.2rem'}
											// mr={'1rem'}
										/>
									)}
								</GridItem>

								<GridItem colSpan={3}>
									<Text>{budget.name}</Text>
								</GridItem>

								<GridItem colSpan={2} justifySelf={'flex-start'}>
									<Text>₦{budget.amount.toLocaleString()}</Text>
								</GridItem>

								<GridItem colSpan={1} justifySelf={'flex-start'}>
									<Text>{budget.percent}%</Text>
								</GridItem>

								<GridItem colSpan={1} justifySelf={'flex-end'}>
									<Icon
										as={FaMinus}
										color={'gray'}
										bg={'#e9e9e9'}
										height={'1.5rem'}
										width={'1.5rem'}
										borderRadius={'50%'}
										padding={'0.4rem'}
										cursor={'pointer'}
									/>
								</GridItem>
							</Grid>
						)
				)}
			</Box>
		</div>
	)
}

export default Budgets
