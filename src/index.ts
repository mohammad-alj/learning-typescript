class BankAcount {
	constructor(public readonly id: number, public owner: string, private _balance: number) {}

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
