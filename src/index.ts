class BankAcount {
	readonly id: number;
	owner: string;
	private _balance: number;

	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this._balance = balance;
	}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		this._balance += amount;
	}

	get balance(): number {
		return this._balance;
	}
}

const myAcount = new BankAcount(0, 'mohammed', 100);
console.log(myAcount instanceof BankAcount);
console.log(myAcount.balance);
