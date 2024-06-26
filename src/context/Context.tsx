import React, { createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface Category {
	name: string
	amount: string
	percent: number
	id: string
	// icon: string
}

interface ContextData {
	budgetCategory: Category[]
	setBudgetCategory: (newValue: Category[]) => void
	budgetAmount: number
	setBudgetAmount: (newValue: number) => void
	step: number
	setStep: (newValue: number) => void
	amount: number | undefined
	setAmount: (newValue: number) => void
	percentLeft: number | undefined
	setPercentLeft: (newValue: number) => void
}

interface Props {
	children?: ReactNode
}

const initialValue = { name: '', amount: '', percent: 0, id: '' }

const Context = createContext<ContextData | undefined>(undefined)

export const Provider: React.FC<Props> = ({ children }) => {
	const [budgetCategory, setBudgetCategory] = useLocalStorage<Category[]>(
		'budget',
		[initialValue]
	)
	const [budgetAmount, setBudgetAmount] = useLocalStorage<number>('amount', 0)
	const [step, setStep] = useState<number>(1)
	const [amount, setAmount] = useState<number>()
	const [percentLeft, setPercentLeft] = useState<number | undefined>(100)

	return (
		<Context.Provider
			value={{
				budgetCategory,
				setBudgetCategory,
				budgetAmount,
				setBudgetAmount,
				step,
				setStep,
				amount,
				setAmount,
				percentLeft,
				setPercentLeft,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
