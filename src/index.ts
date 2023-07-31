const freq = new (class {
	[key: string]: string;
})();
freq['something'] = 'that';
console.log(freq['something']);
