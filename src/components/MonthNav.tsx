import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const MonthNav = () => {
	return (
		<div>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				mt={'2rem'}
			>
				<Box display={'flex'} alignItems={'center'}>
					<Text
						cursor={'pointer'}
						fontSize={'sm'}
						color={'gray'}
						fontWeight={'medium'}
						mr={'1rem'}
					>
						Last Month
					</Text>
					<Text
						cursor={'pointer'}
						fontSize={'sm'}
						color={'gray'}
						fontWeight={'medium'}
					>
						This Month
					</Text>
				</Box>
				<Icon
					as={IoIosMore}
					fontSize={'sm'}
					color={'gray'}
					fontWeight={'medium'}
					cursor={'pointer'}
				/>
			</Box>
		</div>
	)
}

export default MonthNav
