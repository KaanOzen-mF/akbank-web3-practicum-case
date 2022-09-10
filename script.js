function oddishOrEvenish(n) {
	let sum;

	for (sum = 0; n > 0; sum += n % 10, n = parseInt(n / 10));

	return console.log(sum % 2 == 0 ? "even" : "odd"); //ternary operator use for checking our sum values odd or even
}

let n = 43;

oddishOrEvenish(n);
