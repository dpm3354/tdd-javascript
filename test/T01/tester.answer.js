// function isJsonString (jsonString){
//     try {
//         var o = JSON.parse(jsonString);
//
//         if (o && typeof o === "object") {
//             return o;
//         }
//     }
//     catch (e) { }
//
//     return false;
// };

var tester = {
  "Name": "Paul Merrill",
  // "Detail-oriented": "true",
  // "Domain IQ": "high",
  // "Business accumen": "high",
  // "Techical skills": "high",
  // "Communication skills": "high",
  "warmBody": true
};

// console.log(tester);
// if(isJsonString(JSON.stringify(tester))){
//   console.log("This is a good tester");
// }
// else{
//   console.log("This is a BAD tester");
// }
module.exports = tester;
