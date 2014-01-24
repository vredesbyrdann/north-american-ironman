# In CoffeeScript, you can't just type out undefined variables...
the_thought = undefined 
the_meaning = undefined

# Both will return undefined values...
console.log the_thought
console.log the_meaning

# Just a std function...
poplinr = (whatISay) -> console.log whatISay
poplinr "Gamemaster testing room..."

class Gamemaster 
	constructor: (@name, @age, @mood) ->

poplinr = new Gamemaster("Ryan Poplin", 23, "So-so")
console.log poplinr
console.log "#{poplinr.name} is #{poplinr.mood}."

console.log ->
# Syntax is cool, but crazy...
f = (str1) ->
	(str2) ->
		str1 + " " + str2

f_test = f "First..."
console.log f_test "Second..."









