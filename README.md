### Coding Challenge Guidelines

Given a JSON list of people and their dates of birth, write a function to list out the people whose birthday is today.

If a person was born on Feb 29th, then their birthday during a non-leap year should be considered to be Feb 28th. For simplicity, you can consider a leap year to be any year divisble by 4.

Input sample:

```JSON
[
	["Doe", "John", "1982/10/08"],
	["Wayne", "Bruce", "1965/01/30"],
	["Gaga", "Lady", "1986/03/28"],
	["Mark", "Curry", "1988/02/29"]
]
```

You can use whichever programming language you like. The assignment should take no more than an hour - if it's taking you longer than that, consider whether you're overcomplicating things.

### Evaluation Criteria

Must have:

* Tests to check if your code is correct, robust and complete
* Iterative development, backed by commit history
* Testing more scenarios than the input sample provided above. Think about edge cases.

Nice to have:

* Instructions on how to run the code
* TDD
* Modular, cohesive code with sensible separation of concerns
* No over-engineering (you don't need a web framework, database etc). Keep it as simple as possible, but no simpler :)

