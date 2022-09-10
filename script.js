function oddishOrEvenish(n) {
	var sum = 0;

	while (n != 0) {
		sum = sum + (n % 10);
		n = parseInt(n / 10);
	}
	return sum % 2 == 0 ? "Even" : "Odd";
}

function returnNumber() {
	let input = document.getElementById("myNumber").value;

	document.getElementById("result").innerHTML = oddishOrEvenish(input);
}
