/**
 * This file is a node.js version of the data manager from https://github.com/funkemunky/Dreya/blob/master/src/cc/funkemunky/dreya/data/DataManager.java
 */

// HashMap implementation in JS: https://www.npmjs.com/package/hashmap
const HashMap = require('hashmap');

let checks;
let violations;
let players; 

// Constructor
module.exports.dataManager = () => {
    checks = [];
    violations = new HashMap();
    players = [];
    addChecks();
}


// Private method in Java, hence not exporting
addChecks = () => {
    // TODO
}


module.exports.isCheck = (check) => {
    return (checks.includes(check));
}


module.exports.addCheck = (check) => {
    if (!isCheck(check)) {
        checks.push(check);
    }
}


module.exports.removeCheck = (check) => {
   if (isCheck(check)){
     checks.splice(checks.indexOf(check), 1); 
   } 
}


module.exports.getViolationsMap = () => {
    return violations;
}


module.exports.getChecks = () => {
    return checks;
}


/**
 * Not sure if this is working 
 */
module.exports.getCheckByName = (checkName) => {
    for (var i = 0; i < checks.length; i++){
        if (checks[i].toUpperCase === checkName.toUpperCase){
            return  i;
        }
    }

    return null;

}


module.exports.getViolationsPlayer = (player, check) => {
    // TODO
}


module.exports.addViolation = () => {
    // TODO
}


module.exports.getData = () => {
    // TODO
}


module.exports.addPlayerData = (player) => {
    players.push(new PlayerData(player)); // need to create constructor for PlayerData
}


module.exports.removePlayerData = () => {
    // TODO 
}