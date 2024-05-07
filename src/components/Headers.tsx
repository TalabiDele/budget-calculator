import { Heading } from '@chakra-ui/react'

interface Text {
	title: string
}

const Headers: React.FC<Text> = ({ title }) => {
	return (
		<div>
			<Heading color={'navy'} fontSize={'lg'}>
				{title}
			</Heading>
		</div>
	)
}

export default Headers
