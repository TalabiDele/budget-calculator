import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import useMyContext from '../hooks/useMyContext'

const Category: React.FC = () => {
	const { budgetCategory } = useMyContext()

	console.log(budgetCategory)

	return (
		<div>
			<Box mt={'1rem'}>
				<Heading fontSize={'md'} color={'navy'}>
					Category Breakdown
				</Heading>

				{budgetCategory[0].name === '' && (
					<Text
						color={'gray'}
						fontSize={'xs'}
						textAlign={'center'}
						mt={'2rem'}
						fontWeight={'medium'}
					>
						No breakdown available
					</Text>
				)}
				<Box></Box>
			</Box>
		</div>
	)
}

export default Category
