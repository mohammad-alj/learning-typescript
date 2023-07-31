// Function
function calculateTax(income: number, taxYear: number): number {
	if (taxYear < 2023) return income * 1.2;
	return income * 1.3;
}
