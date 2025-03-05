// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    function compliment (attribute = "special") {
        return `You are ${flair}${attribute}${flair}!`
    }
    return compliment;
}

console.log(wrapAdjective("%")("a dedicated programmer"))