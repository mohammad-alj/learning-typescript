class BankAcount {
	id: number;
	owner: string;
	balance: number;

	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		this.balance += amount;
	}
}

const myAcount = new BankAcount(0, 'mohammed', 100);
console.log(myAcount.balance);
console.log(myAcount instanceof BankAcount);
