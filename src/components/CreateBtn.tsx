import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const CreateBtn = () => {
	return (
		<div>
			<Box
				cursor={'pointer'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				bg={'#fff'}
				boxShadow={'0px 0px 20px #e9e9e9'}
				padding={'0.5rem 1rem'}
				borderRadius={'10px'}
				mt={'0.5rem'}
			>
				<Text color={'navy'} fontWeight={'medium'}>
					Create a budget
				</Text>

				<Icon
					as={FaPlus}
					color={'bg.200'}
					bg={'bg.50'}
					height={'1.5rem'}
					padding={'0.2rem'}
					width={'1.5rem'}
					borderRadius={'50%'}
				/>
			</Box>
		</div>
	)
}

export default CreateBtn
