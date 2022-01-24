// expected:
// ["foo", "bar", "baz" ]
// command: node args.js foo bar baz

const myArgs = process.argv.slice(2);
console.log("bonus: ", myArgs);

const [, , ...args] = process.argv;
console.log(args);

console.log([process.argv[2], process.argv[3], process.argv[4]]);
