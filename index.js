// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(e => e === string || e === string.toLowerCase())
 }
 
 function fuzzyMatch(drivers, string) {
   return drivers.filter(e => e[0] === string[0])
 }
 
 function matchName(drivers, string) {
   return drivers.filter(e => e.name === string)
 } 