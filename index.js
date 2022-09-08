// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwo = drivers.slice(0,2)
const lastTwo = drivers.slice(-2)

function returnFirstTwoDrivers(){
    return firstTwo;
}
function returnLastTwoDrivers(){
    return lastTwo;
}
let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(){
        return integer * integer;   
    }
}
let fareDoubler = fare => fare * 2;
let fareTripler = fare => fare * 3;

const selectDifferentDrivers = function (returnLastTwoDrivers , returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}