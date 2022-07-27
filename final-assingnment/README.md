# Birthday List

- This project is all about giving birthday list of the people whose birthday is falling today (Month and Date wise). The list will be provided which is in the form of Array of Arrays.
- Leap year consideration should be taken care of before giving out the list

## Checklists for submission the project

- [x] Iterative development, backed by commit history
- [x] Testing more scenarios than the input sample provided above. Think about edge cases.
- [x] Instructions on how to run the code
- [x] Modular, cohesive code with sensible separation of concerns
= [x] Tests to check if your code is correct, robust and complete
- [x] No over-engineering (you don't need a web framework, database etc). Keep it as simple as possible, but no simpler.

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language Used to create this project
- [Jest](https://jestjs.io/) - For Unit Test Cases

## Pre-requisites

- Have `brew` installed in your system
- Have `node` installed in your system to be able to run the file which `finalAssignment.js` which contains the function to implement the logic

## How to run the file

- Please run `npm install` to first install all the dependencies to be able to successfully run the project.
- Please confirm whether you have `node` installed in your system by running `node -v` and `npm -v`.
- To run the file simply go inside the directory and do `node finalAssignment.js`.
- To run the test simply in the root directory run this command `npm jest`.

## Output Format

- Output will be in a format of **Array of Objects** which is below:

```json
[
    {
        "name": "User Name", 
        "date_of_birth": "YYYY/MM/DD"
    },
    ...
]
```

- For **successfull unit test cases** running, this will be the output:

```javascript
  PASS  final-assingnment/finalAssignment.test.js
  ✓ Empty Data Entered (1 ms)
  ✓ Invalid Data Entry

  Test Suites: 1 passed, 1 total
  Tests:       2 passed, 2 total
  Snapshots:   0 total
  Time:        0.16 s, estimated 1 s
  Ran all test suites.
```

- For **failure unit test cases**, this will be the output: 

```javascript
  FAIL  final-assingnment/finalAssignment.test.js
  ✕ Empty Data Entered (3 ms)
  ✓ Invalid Data Entry (1 ms)

  ● Empty Data Entered

  Test Suites: 1 failed, 1 total
  Tests:       1 failed, 1 passed, 2 total
  Snapshots:   0 total
  Time:        0.17 s, estimated 1 s
  Ran all test suites.
```

- If there are no available findings, in that case, a string mentioning the same will be returned: `No users' data found for today's date`.

## Assumptions

- No need of getting an input from the user. For now an array of data will be provided from the file and can be utilised to get the output. PS: Following the instructions of **No over-engineering (you don't need a web framework, database etc). Keep it as simple as possible** :)
- The format of the input will be same as used in the input sample, i.e.: `[['last_name', 'first_name', 'YYYY/MM/DD']]`.
- We can give out the output in any format. Curently I chose to show it in **Array of Objects**
- By today, I have taken **today's timeline**. For example: today is **6th Feb**, so **6th Feb** will be used for computation to give out results of the birthday who has their birthday.

## Edge Cases Handling

- For empty input sample, we have handled the case and returned a specific string to make the user input something.
- For invalid format, we have handle the case and returned the string to make the user clear with instructions.
- Same edge cases were used to write the `Unit Test Cases` using `Jest`

## Links

- Please follow [HomeBrew](https://brew.sh/) to install `brew`, if you haven't done already.
- Please goto [Node](https://nodejs.org/en/download/) to install `node` for your system to be able to run the app. 
    - For more information on installation of mac, do follow [this](https://nodejs.org/en/download/package-manager/) link
