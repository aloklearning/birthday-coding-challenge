// To validate whether the current information is matching today's month and date
const validateBirthday = (dob, date, month, array, item) => {
    // Checking if month and date matches today's date and month
    if(parseInt(dob[2]) === date && parseInt(dob[1]) === month){
        // push the data to the object
        array.push({'name': `${item[1]} ${item[0]}`, 'date_of_birth': item[2]});
    }
}

// --- ANSWER METHOD --- //
const findTodayPeopleBirthday = myInputList => {
    // If no data was passed simply return a message
    if(!myInputList || myInputList.length === 0){
        return {'Error': 'Data was empty. Please enter some valid data and try again.'};
    }

    // If any of the data was not passed perfectly, then raise an error
    // User might enter two or more faulty data, hence filter()
    const invalidData = myInputList.find(item => item.length !== 3);
    if(invalidData){
        return {'Error': "Some of the input(s) you've used to pass is invalid. " 
        + "Please input the data in this way: ['last_name', 'first_name', 'YYYY/MM/DD']"};

    }

    // This will be used to loop up the data provided by the list
    const todayDateInfo = new Date();
    const date = todayDateInfo.getDate();
    const month = todayDateInfo.getMonth() + 1; // alwasys comes as -1 value
    const isLeapYear = todayDateInfo.getFullYear() % 4 === 0; // For checking for leap year users

    let myFinalData = [];

    // Looping through each item -> comparing date and month -> pushing it to the object
    myInputList.forEach((item) => {
        // We are not comparing year, since it is not the condition we give for giving out birthday. 
        // Just the date and month is enough
        const dob = item[2].split('/');

        // If feb, then check for leap year, else normal case
        if(month === 2){
            // Checking for Leap year, for handling case of Feb 29th people
            if(isLeapYear){
                validateBirthday(dob, date, month, myFinalData);
            }else{
                // for non-leap year we have to see if the person's date was 29th
                // If yes, then consider it as 28th only
                if(date === 28 && parseInt(dob[2]) === 29){
                    // push the data to the object simply
                    myFinalData.push({'name': `${item[1]} ${item[0]}`, 'date_of_birth': item[2]});
                }else{
                    // If the user's birthday was in Feb, but was not 29th
                    validateBirthday(dob, date, month, myFinalData, item);
                }
            }
        }else{
            validateBirthday(dob, date, month, myFinalData, item);
        }
    });

    // Handling the empty case as well to give away right data
    return myFinalData.length > 0 ? myFinalData : {'Error': "No users' data found for today's date."};
}

// Accepting the inout from the user
// Used the same provided in sample input
const sampleData = [
	["Doe", "John", "1982/10/08"],
	["Wayne", "Bruce", "1965/01/30"],
	["Gaga", "Lady", "1986/03/28"],
	["Mark", "Curry", "1988/02/29"]
];

// Calling the method to get the result finally
const listOfBirthdayPeople = findTodayPeopleBirthday(sampleData);
console.info('FINAL DATA: ', listOfBirthdayPeople);

// For exporting in order to be able to run the test on the code
module.exports = findTodayPeopleBirthday;