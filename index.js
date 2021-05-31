// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value}) ;
}

    const employee = {name : 'Sam', streetAddress : '11 Broadway'}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    return Object.assign({}, employee, {[key]: value})
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}