import React, { createContext, ReactNode } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface Category {
	name: string
	amount: number
	percent: number
	icon: string
}

interface ContextData {
	budgetCategory: Category[]
	setBudgetCategory: (newValue: Category[]) => void
	budgetAmount: number
	setBudgetAmount: (newValue: number) => void
}

interface Props {
	children?: ReactNode
}

const initialValue = { name: '', amount: 0, percent: 0, icon: '' }

const Context = createContext<ContextData | undefined>(undefined)

export const Provider: React.FC<Props> = ({ children }) => {
	const [budgetCategory, setBudgetCategory] = useLocalStorage<Category[]>(
		'budget',
		[initialValue]
	)
	const [budgetAmount, setBudgetAmount] = useLocalStorage<number>('amount', 0)

	return (
		<Context.Provider
			value={{
				budgetCategory,
				setBudgetCategory,
				budgetAmount,
				setBudgetAmount,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
