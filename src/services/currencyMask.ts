export const currencyMask = (value: string) => {
	
	value = value.replace(/[\D.,]/, ''); // filter only numbers

	const options = { minimumFractionDigits: 2 };
	const valueToBRL = new Intl.NumberFormat('pt-BR', options).format( Number(value) / 100 );

	return valueToBRL;
};