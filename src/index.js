// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H, G, D, N, P;
    var object = {};
    if (currency > 10000) {
    	object.error = "You are rich, my friend! We don't have so much coins for exchange";
    	return object;
    }
    if (currency <= 0) {
    	return object;
    }
    if (currency >= 50) {
    	object["H"] = currency / 50 ^ 0;
    	currency = currency % 50;
    }
    if (currency >= 25) {
		object["Q"] = currency / 25 ^ 0;
		currency = currency % 25;
	}
	if (currency >= 10) {
		object["D"] = currency / 10 ^ 0;
		currency = currency % 10;
	}
	if (currency >= 5) {
		object["N"] = currency / 5 ^ 0;
		currency = currency % 5;
	}
	if (currency >= 1) {
		object["P"] = currency / 1 ^ 0;
		currency = currency % 1;
	}
	return object;
}
