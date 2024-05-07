import React from 'react'
import { SlHome } from 'react-icons/sl'
import { HiDocument } from 'react-icons/hi2'
import { MdBarChart } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa6'
import { Box, Icon, Img, Text } from '@chakra-ui/react'
import TIcon from '../assets/TIcon.svg'

const Nav = () => {
	return (
		<Box
			bg={'#fff'}
			boxShadow={'0px -10px 20px #f3f3f3'}
			width={'375px'}
			position={'fixed'}
			bottom={'0rem'}
			padding={'1rem'}
			mx={'auto'}
			left={'0rem'}
			right={'0rem'}
		>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Box display={'flex'} flexDir={'column'} alignItems={'center'}>
					<Icon as={SlHome} fontSize={'2rem'} color={'#C1C4CD'} mb={'0.5rem'} />
					<Text color={'#C1C4CD'}>Home</Text>
				</Box>
				<Box display={'flex'} flexDir={'column'} alignItems={'center'}>
					<Icon
						as={HiDocument}
						fontSize={'2rem'}
						color={'#C1C4CD'}
						mb={'0.5rem'}
					/>
					<Text color={'#C1C4CD'}>Reports</Text>
				</Box>
				<Box display={'flex'} flexDir={'column'} alignItems={'center'}>
					<Img src={TIcon} width={'2rem'} height={'2rem'} color={'#C1C4CD'} />
					<Text color={'#C1C4CD'}>Chat</Text>
				</Box>
				<Box display={'flex'} flexDir={'column'} alignItems={'center'}>
					<Icon
						as={MdBarChart}
						fontSize={'2rem'}
						color={'#C1C4CD'}
						mb={'0.5rem'}
					/>
					<Text color={'#C1C4CD'}>Budget</Text>
				</Box>
				<Box display={'flex'} flexDir={'column'} alignItems={'center'}>
					<Icon
						as={FaRegUser}
						fontSize={'2rem'}
						color={'#C1C4CD'}
						mb={'0.5rem'}
					/>
					<Text color={'#C1C4CD'}>Profile</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default Nav
