// Union Types

function kgToLbs(weight: number | string): number {
	const num = typeof weight === 'string' ? parseFloat(weight) : weight;
	return num * 2.2;
}
