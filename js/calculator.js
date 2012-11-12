function calculate() {
	// get input from user
	var $list_price;		// Declare variable
 
	// Assign value to get reference to user input using document object method
	$list_price = document.getElementById('list_price');
	$list_price = $list_price.valueAsNumber; 	// new to html 5 - Get number value inputted using number object method
	
	// Calculate discount amount and discount price
	var $discount_percent = document.getElementById('discount_percent').valueAsNumber;
	
	// calculate discount amount and discount price
	var $discount = $list_price * $discount_percent * .01;
	var $discount_price = $list_price - $discount;
	
	//set output
	$discount = $discount.toFixed(2);	// Convert number value to string value keeping 2 decimal places
	$discount = '$' +$discount;			// Concatenate $ to string variable
	var tempVar;						// Declare variable
	tempVar = document.getElementById('discount');	// Set reference to output using document object method
	tempVar.value = $discount;			// Set string value output using string object methods
	
	$discount_price = '$'+$discount_price.toFixed(2);
	document.getElementById('discount_price').value = $discount_price;
	
}	// end calculate

