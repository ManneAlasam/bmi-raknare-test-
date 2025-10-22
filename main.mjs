import promptSync from "prompt-sync";
const prompt = promptSync();
console.log("Välkommen till BMI-räknaren\n");

let inputGender = prompt("Är du man eller kvinna: ").toLowerCase();

while (inputGender != "man" && inputGender != "kvinna") {
  console.log("\nVänligen skriv in man eller kvinna\n");
  inputGender = prompt("Är du man eller kvinna: ").toLowerCase();
}

let inputAge = parseInt(prompt("Ange din ålder: "));

while (isNaN(inputAge) || inputAge < 18 || inputAge > 70) {
  console.log("\nDu skrev in fel ålder. Åldern måste vara mellan 18-70\n");
  inputAge = parseInt(prompt("Ange din ålder: "));
}

let inputHeight = parseInt(prompt("Ange din längd (i cm): "));

while (isNaN(inputHeight) || inputHeight < 50 || inputHeight > 230) {
  console.log("\nDu skrev fel. Skriv in din längd (mellan 50 - 230) ");
  inputHeight = parseInt(prompt("Ange din längd (i cm): "));
}

const heightMeter = inputHeight / 100;

let inputWeight = parseInt(prompt("Ange din vikt: "));

while (isNaN(inputWeight) || inputWeight < 10 || inputWeight > 250) {
  console.log("Vikten du har angivit är inte mellan 10 - 250.");
  inputWeight = parseInt(prompt("Ange din vikt: "));
}

//BMI Uträkning
const weightCalc = 1.3 * inputWeight;
const heightCalc = Math.pow(heightMeter, 2.5);
const bmi = weightCalc / heightCalc;

console.log(`\nDitt BMI är: ${bmi}`);

if (bmi < 18.5) {
  console.log("\nDu är undervikt");
} else if (bmi <= 25) {
  console.log("\nDu är normalvikt");
} else if (bmi <= 30) {
  console.log("\nDu är övervikt");
} else if (bmi <= 40) {
  console.log("\nDu är kraftigt övervikt");
} else {
  console.log("\nDu är extremt övervikt");
}

//BMR Uträkning
function bmrCalcFemale() {
  const bmrFemaleWeightCalc = 9.563 * inputWeight;
  const bmrFemaleHeightCalc = 1.85 * inputHeight;
  const bmrFemaleAgeCalc = 4.676 * inputAge;
  const bmrFemale = 655.1 + bmrFemaleWeightCalc + bmrFemaleHeightCalc - bmrFemaleAgeCalc;
  return bmrFemale;
}

function bmrCalcMale() {
  const bmrMaleWeightCalc = 13.75 * inputWeight;
  const bmrMaleHeightCalc = 5.003 * inputHeight;
  const bmrMaleAgeCalc = 4.676 * inputAge;
  const bmrMale = 66.47 + bmrMaleWeightCalc + bmrMaleHeightCalc - bmrMaleAgeCalc;
  return bmrMale;
}

if (inputGender == "man") {
  console.log(`\nDitt BMR är på ${bmrCalcMale()} kalorier om dagen `);
} else {
  console.log(`\nDitt BMR är på ${bmrCalcFemale()} kalorier om dagen`);
}
