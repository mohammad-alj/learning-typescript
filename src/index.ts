// Type alias
type Employee = {
	readonly id: number;
	name: string;
	retire: () => void;
};

const employee: Employee = {
	id: 1,
	name: 'mohammed',
	retire() {
		console.log(`${this.name} has retired`);
	},
};

employee.retire = () => console.log('retire');
