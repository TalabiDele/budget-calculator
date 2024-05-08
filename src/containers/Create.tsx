import { Box } from '@chakra-ui/react'
import Headers from '../components/Headers'
import StepNav from '../components/StepNav'
import StepOne from '../components/StepOne'
const Create = () => {
	return (
		<Box>
			<StepNav />
			<Headers title='Create new budget' />

			<StepOne />
		</Box>
	)
}

export default Create
