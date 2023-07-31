// Object

const employee: {
	readonly id: number;
	name: string;
	retire?: () => void;
} = {
	id: 1,
	name: 'mohammed',
};

employee.retire = () => console.log('retire');
