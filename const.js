// const x=10;
// const x=5;
// console.log(x);

/*
output-
SyntaxError: Identifier 'x' has already been declared


*/

//Note-we cant declare const in same scope.


// const x=5;
// {
//     const x=10;
//     console.log(x);
// }
// console.log(x);

/*

output-
SyntaxError: Identifier 'x' has already been declared

*/
//Note-we also can not declare const value in diffrent scope.

// const x=10;
// console.log(x);


/*
output-
10
*/

//note- once we declare const value we cant change it.


// const x=10;
// {
//     console.log(x);
// }

/*
output-
10

*/

//note- we can access const value in any scope

