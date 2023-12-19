// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(name) {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer(name) {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer = "Arlo";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Bert";
    return leastFavoriteCustomer;
}