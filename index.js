/* Your Code Here */

class Employee{
    constructor(info){
        this.firstName = info[0];
        this.familyName = info[1],
        this.title = info[2],
        this.payPerHour = info[3],
        this.timeInEvents = [],
        this.timeOutEvents = []
    }
}

function createEmployeeRecord(info){
    const newEmployee = new Employee(info);
    return newEmployee;
}

function createEmployeeRecords(employees){
    const employeeList = []
    for (const employee of employees){
        employeeList.push(createEmployeeRecord(employee))
    }
    return employeeList
}

function createTimeInEvent(timeStamp){
    const hour = parseInt(timeStamp.slice(11), 10);
    const date = timeStamp.slice(0, 10);
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: hour,
        date: date
    })
    return this;
}

function createTimeOutEvent(timeStamp){
     const hour = parseInt(timeStamp.slice(11), 10);
     const date = timeStamp.slice(0, 10);
     this.timeOutEvents.push({
        type: 'TimeOut',
        hour: hour,
        date: date
     })
    return this
}

function hoursWorkedOnDate(stamp){
    let timeIn
    let timeOut

    for (const workDay of this.timeInEvents){
        if (workDay.date === stamp){
            timeIn = workDay.hour
        }
    }
    for (const workDay of this.timeOutEvents){
        if (workDay.date === stamp){
            timeOut = workDay.hour
        }
    }
    return (timeOut-timeIn)/100
}

function wagesEarnedOnDate(stamp){
    const hours = hoursWorkedOnDate.call(this, stamp);

    return hours * this.payPerHour;
}

function findEmployeeByFirstName(records, query){
    for (const employee of records){
        if (employee.firstName === query){
            return employee;
        }
    }
}

function calculatePayroll(records){
    let sum = 0;

    for (const employee of records){
        sum += allWagesFor.call(employee)
    }
    return sum
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

