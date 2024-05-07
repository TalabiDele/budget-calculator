import React from 'react'
import { Text } from '@chakra-ui/react'

interface Text {
	title: string
}
const Paragraph: React.FC<Text> = ({ title }) => {
	return (
		<div>
			<Text fontSize={'xs'} color={'gray'}>
				{title}
			</Text>
		</div>
	)
}

export default Paragraph
