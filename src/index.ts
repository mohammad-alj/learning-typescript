// Enum

// without enum
const small = 1;
const medium = 2;
const large = 3;

// with enum
// Pascal case by the way
enum Size {
	Small = 1, // this is automatically 0
	Medium, // this will be 2
	Large, // 3
}

// when defining an enum with const, the compiler will generate more optimized code
const enum Size2 {
	Small = 1,
	Medium,
	Large,
}

const mySize: Size = Size.Medium;
console.log(mySize);
