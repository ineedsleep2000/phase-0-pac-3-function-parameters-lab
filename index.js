function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

//   function introductionWithLanguageOptional(firstName = "name", language = "JavaScript") {
//     console.log(`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
//   }

  function introduction(name) {
    return `Hi, my name is ${name}.`
}

 function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// function introductionWithLanguage(name = "Gracie", language = "Python") {
//     return `Hi, my name is ${name} and I am learning to program in ${language}.`
// }
console.log (introductionWithLanguageOptional("Gracie"))
console.log (introductionWithLanguageOptional("Gracie", "Python"))