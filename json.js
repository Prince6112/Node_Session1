function sayHello() {
    return "Names";
}

function printName(){
    jsons.forEach(json => {
        console.log(json.name);
    });
}

function printReg(){
  jsons.forEach(json => {
      console.log(json.registration_number);
  });
}

var jsons = [
    {
      name: "Prince",
      registration_number: "RA1811027010097",
      contact_number: 1111111111,
      email: "prince.sam.ss1@gmail.com"
    },
    {
      name: "Yeshwanth",
      registration_number: "RA1811027010098",
      contact_number: 2222222222,
      email: "prince.sam.ss2@gmail.com"
    },
    {
      name: "Allen",
      registration_number: "RRA1811027010099",
      contact_number: 33333333333,
      email: "prince.sam.ss3@gmail.com"
    }
];

module.exports = {
  sayHello: sayHello,
  printName: printName,
  printReg: printReg
};