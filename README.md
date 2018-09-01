# Sezzle Calculator
September 1, 2018

##Checkpoints:

1. [x] Create Boilerplate & Initialize File
2. [x] Create starter DOM elements (Components)
	* Buttons
		* [ ] Number
		* [ ] Operator
		* [ ] Clear
		* [ ] Reset
	* Display for Input
3. [ ] Store userinput in state called UserInputArray
	* Use a logic module 
	* Display current userInputArray on dom
	* Concatenate this array together to generate expression.
	* Display results on a table (for testing)
	* Send POST request to MongoDB to store this answer.
	* Create GET request to MongoDB to retrieve all entries.
		* Display entires on dom in reverse order
			* ( while i = 0 ; i < 10, i++ )