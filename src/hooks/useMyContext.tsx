import { useContext } from 'react'
import Context from '../context/Context'

const useMyContext = () => {
	const context = useContext(Context)

	if (!context) {
		throw new Error('useBudgetContext must be used within a BudgetProvider')
	}

	return context
}

export default useMyContext
