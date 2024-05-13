interface Category {
	name: string
	amount: string
	percent: number
	id: string
	// icon: string
}

const addNumbers = (budget: Category[]): number => {
  return budget.reduce((accumulator, currentValue) => accumulator + currentValue.percent, 0);
}

export default addNumbers