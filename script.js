function oddishOrEvenish(n) {
	let sum;
	if (n < 0) {
		alert("Please write a positive number");
	} else {
		for (sum = 0; n > 0; sum += n % 10, n = parseInt(n / 10));

		return sum % 2 == 0 ? "even" : "odd"; //ternary operator use for checking our sum values odd or even
	}
}

function returnNumber() {
	let input = document.getElementById("myNumber").value;

	document.getElementById("result").innerHTML = oddishOrEvenish(input);
}
