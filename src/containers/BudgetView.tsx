import React from 'react'
import Headers from '../components/Headers'
import Paragraph from '../components/Paragraph'
import { Box, Icon } from '@chakra-ui/react'
import { TbCurrencyNaira } from 'react-icons/tb'
import CreateBtn from '../components/CreateBtn'
import MonthNav from '../components/MonthNav'
import EmptyBudget from '../components/EmptyBudget'
import Category from '../components/Category'

const BudgetView = () => {
	return (
		<Box position={'relative'}>
			<Box>
				<Headers title={'Budget'} />
				<Box display={'flex'} alignItems={'center'} mt={'2rem'}>
					<Icon
						as={TbCurrencyNaira}
						color='#0466C8'
						fontWeight={'bolder'}
						fontSize={'2rem'}
						backgroundColor={'bg.50'}
						height={'1rem'}
						width={'1rem'}
						borderRadius={'50%'}
						padding={'0.1rem'}
						mr={'0.5rem'}
					/>
					<Paragraph title='Monthly Budget' />
				</Box>

				<CreateBtn />

				<MonthNav />

				<EmptyBudget />

				<Category />
			</Box>
		</Box>
	)
}

export default BudgetView
