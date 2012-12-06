function calculate_click () {
	// Get user input from the first three text boxes.

	var investment = document.getElementById('investment').value; //obtain input
	investment = parseFloat(investment); // convert to a floating point numerical value

	var interestRate = document.getElementById('interestRate').value;  //obtain input
	interestRate = parseFloat(interestRate); // convert to a floating point numerical value

	var years = document.getElementById('years').value;  //obtain input
	years = parseFloat(years); // convert to a floating point numerical value

	//Set the intial value of the fourth text box to be an empty string
	document.getElementById('futureValue').value = '';

	// validate investment entry
    if ( isNaN(investment) || investment <= 0) {
        error_message = 'Investment must be a valid number greater than zero.';     
    // validate interest rate entry
    } else if ( isNaN(interestRate) || interestRate <= 0)  {
        error_message = 'Interest rate must be a valid number greater than zero.'; 
    } else if ( isNaN(years) || years <= 0 )  {
        error_message = 'Year must be a valid number and greater than zero.'; 
    // set error message to empty string if no invalid entries
    } else {
        error_message = '';
    }

    // if an error message exists, go to the index page
    if (error_message != '') {
        include('index.html');
        exit();
    }

	// calculate future value
    var futureValue = investment;
	for ( i = 1; i <= years; i++)  {
	    futureValue = ( futureValue + ( futureValue * interestRate * .01));
	}
	
	// return output rounded to 2 decimal places
	document.getElementById('futureValue').value = futureValue.toFixed(2);
	
}	// end calculate

