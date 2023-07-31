class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	walk(): void {
		console.log(`${this.fullName} is walking`);
	}
}

class Student extends Person {
	constructor(public readonly studentID: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}
}

interface Address {
	street: string;
	city: string;
	zipcode: string;
}

interface EmployeeInterface {
	name: string;
	salary: number;
	address: Address;
}

class Employee extends Person implements EmployeeInterface {
	constructor(
		firstName: string,
		lastName: string,
		public salary: number,
		public address: Address,
	) {
		super(firstName, lastName);
	}
	name: string = this.fullName;
}

const student = new Student(1, 'mohammed', 'aljafar');
student.walk();
