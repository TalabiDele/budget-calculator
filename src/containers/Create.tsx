import { Box } from '@chakra-ui/react'
import Headers from '../components/Headers'
import StepNav from '../components/StepNav'
import StepOne from '../components/StepOne'
import NextComponent from '../components/NextComponent'
import useMyContext from '../hooks/useMyContext'
import StepTwo from '../components/StepTwo'

const Create = () => {
	const { step } = useMyContext()

	return (
		<Box>
			<StepNav />
			<Headers title='Create new budget' />

			{step === 1 && <StepOne />}
			{step === 2 && <StepTwo />}

			<NextComponent />
		</Box>
	)
}

export default Create
