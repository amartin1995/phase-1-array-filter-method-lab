// const findMatching = drivers => {
//      let name = drivers.filter(drivers => drivers.name === true)
//      return drivers !== undefined ? drivers.name : undefined
// }

function findMatching(drivers, matchingName){
    return drivers.filter(function(el){
        return el.toLowerCase().indexOf(matchingName.toLowerCase()) !== -1;
    })
}



function fuzzyMatch(drivers, similarName){
    return drivers.filter(function(driverName){
        console.log(`name`, driverName)
        console.log(`-------`, similarName)
        console.log(`return`, driverName.includes(similarName)) 
        console.log(`heelllllooo`, similarName)
        return driverName.includes(similarName)
        
    })
}

function matchName(driverObj, nameMatch){

}