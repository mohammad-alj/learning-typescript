### Fundamentals

when assigning a variable with a value, the typescript compiler will assume the type
based on the value, for instance we declare 'age' and set it to 14 typescript will automatically
detect that this is a number so there is no need to annotate the 'age' with type 'number'

## the any type
the any type can hold any values, also its a very bad practice because the whole point of typescript
is to add types

## the Array
using [] after the type specefies the array item type

## the Tuple
a fixed length array where each element has a particular type, best practice is to restrict the tuples to only 2 values.

## the Enum
a group of related constants.

## the Function
when making a function, its a best practice to annotate the function with a return type. by adding a : after the argumnets like this -> function (arg1: any, arg2: any): any {}

## the Object
In normal javascript, objects are dynamic, meaning that you can extend properties of an object after initialization, however in typescript thats not allowed, because the object gets a type of initialization which can be expelictly edited by the programmer like this -> const obj: {id: number} = {id: 1}