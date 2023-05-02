function main() {
    // Greeting message
    const currentDateAndTime = new Date()

    var hours = currentDateAndTime.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Good Morning"
    } else if (hours < 18) {
        timeOfDay = "Good Afternoon"
    } else if (hours < 24) {
        timeOfDay = "Good Evening"
    }

    document.getElementById('timeOfDay').innerHTML = timeOfDay + ", I'm Ryan!";

    // Time difference in work

    var result = []

    var currentMonthYear = [currentDateAndTime.getMonth() + 1, currentDateAndTime.getFullYear()]
    
    const startMonthYear = [9, 2021]
    
    differenceMonths = currentMonthYear[0] - startMonthYear[0]
    
    resYears = currentMonthYear[1] - startMonthYear[1]
    if (differenceMonths < 0) {
        resYears --
        result[1] = 12 - Math.abs(differenceMonths)
    } else {
        result[1] = Math.abs(differenceMonths)
    }
    
    result[0] = resYears
    
    var output
    if (result[1] == 0) {
        output = result[0] + " Years"
    } else {
        output = result[0] + " Years and " + result[1] + " Months"
    }

    document.getElementById('yearsOfExperience').innerHTML = "I have " + output + " of industry experience working accross the full-stack of software development!";
}