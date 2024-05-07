import { Box, Image, Text } from '@chakra-ui/react'
import icon from '../assets/icon.svg'

const EmptyBudget = () => {
	return (
		<div>
			<Box marginTop={'2rem'}>
				<Image src={icon} width={'8rem'} mx={'auto'} />
				<Text
					textAlign={'center'}
					color={'gray'}
					fontSize={'xs'}
					width={'60%'}
					mx={'auto'}
					mt={'1rem'}
				>
					You haven’t created a budget for this month yet
				</Text>
			</Box>
		</div>
	)
}

export default EmptyBudget
