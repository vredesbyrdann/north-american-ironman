(function() {
	
	var deep_thought, the_meaning, another_thought, another_meaning, constructor_thought, constructor_meaning, constructor_thought_2, constructor_meaning_2;
	
	deep_thought = {
		the_answer: 23,
		ask_question: function() {
			// console.log(this);
			// console.log(deep_thought);
			return this.the_answer;
		}
	};

	// Here's the creation of an execution context...
	// 'this' will refer to 
	// console.log(the_meaning === undefined)
	the_meaning = deep_thought.ask_question();
	// console.log(the_meaning);
	// It's 'window' in the browser, and it's 'global' in the node shell...
	// console.log(this);

	another_thought = {
		the_answer: "I'm an idiot...",
		ask_question: function() {
			// console.log(this.the_answer);
			return this;
		}
	};

	// console.log(another_thought.ask_question());

	// A constructor...
	function BigComputer(answer) {
		console.log(this);
		this.the_answer = answer;
		this.ask_question = function() {
			console.log(this);
			return this.the_answer;
		};
	}

	// The significance of utilizing 'new'...
	// 'this' with constructors ref. to the new object that is being created as an instance of the 'BigComputer' constructor...
	constructor_thought = new BigComputer(30);
	constructor_meaning = constructor_thought.ask_question();

	// console.log(constructor_thought);
	// console.log(constructor_meaning);

	constructor_thought_2 = new BigComputer(24);
	constructor_meaning_2 = constructor_thought_2.ask_question();
	// console.log(constructor_thought_2);
	// console.log(constructor_meaning_2);

	// A std example...

	function test_func() {
		// this === window in the browser and this === global in the node shell...
		// return this;
	}

	// console.log(test_func());

	// Refers 
	// console.log(this);

	var f = function(str1) {
		return function(str2) {
			return str1+" "+str2;
		};
	};
	var tryIt = f("First string...");
	console.log(tryIt);
	console.log(tryIt("Second string..."));

}).call(this);