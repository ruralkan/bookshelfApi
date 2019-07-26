## Cucumber
Cucumber is a tool that supports Behaviour-Driven Development(BDD).

Cucumber reads executable specifications written in plain text and validates that the software does what those specifications say. The specifications consists of multiple examples or scenarios. For example:

`Scenario: Breaker guesses a word`
` Given the Maker has chosen a word`
`  When the Breaker makes a guess`
`  Then the Maker is asked to score`

Each scenario is a list of steps for Cucumber to work through. Cucumber verifies that the software conforms with the specification and generates a report indicating ✅ success or ❌ failure for each scenario.

In order for Cucumber to understand the scenarios, they must follow some basic syntax rules, called Gherkin

## Gherkin
Gherkin is a simple set of grammar rules that makes plain text structured enough for Cucumber to understand. The scenario above is written in Gherkin.

Gherkin serves multiple purposes:

* Unambiguous executable specification
* Automated testing using Cucumber
* Document how the system actually behaves
