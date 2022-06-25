import moment from "moment";
import semver from "semver"
const a = 10;

const day = moment().format('dddd');
const myver = semver.valid('1.2.3')

console.log(day); 
console.log(myver)