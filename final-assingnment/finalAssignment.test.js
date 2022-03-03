// This file will be used by JEST to implement all the Unit testing on the code
const findTodayPeopleBirthday = require('./finalAssignment');

// Empty Case Handling
test('Empty Data Entered', () => {
    expect(findTodayPeopleBirthday([]))
    .toStrictEqual({'Error': 'Data was empty. Please enter some valid data and try again.'});
});

// Invalid Data Entry case handling
test('Invalid Data Entry', () => {
    expect(findTodayPeopleBirthday([['Doe', 'John']]))
    .toStrictEqual({'Error': "Some of the input(s) you've used to pass is invalid. " 
    + "Please input the data in this way: ['last_name', 'first_name', 'YYYY/MM/DD']"});
});