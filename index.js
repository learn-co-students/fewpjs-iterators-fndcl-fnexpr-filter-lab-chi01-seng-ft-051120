// Code your solution here
function findMatching(drivers, string) {
    let matches = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matches
}

function fuzzyMatch(drivers, string) {
    let stringLength = string.length
    let matches = drivers.filter(driver => {
        return driver.substring(0, stringLength) === string 
    })
    return matches
}

function matchName(drivers, string) {
    let matches = drivers.filter(driver => {
        return driver.name === string 
    })
    return matches
}