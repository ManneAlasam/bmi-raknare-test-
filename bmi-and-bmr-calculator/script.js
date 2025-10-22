function calculate() {
  document.querySelectorAll(".error").forEach((error) => error.classList.remove("show"));

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  let isValid = true;

  if (!gender) {
    document.getElementById("genderError").classList.add("show");
    isValid = false;
  }

  if (isNaN(age) || age < 18 || age > 70) {
    document.getElementById("ageError").classList.add("show");
  }

  if (isNaN(height) || height < 50 || height > 230) {
    document.getElementById("heightError").classList.add("show");
  }

  if (isNaN(weight) || weight < 10 || weight > 250) {
    document.getElementById("weightError").classList.add("show");
  }

  if (!isValid) return;

  const heightMeter = height / 100;
  const weightCalc = 1.3 * weight;
  const heightCalc = Math.pow(heightMeter, 2.5);
  const bmi = weightCalc / heightCalc;

  let category = "";
  if (bmi < 18.5) {
    category = "Undervikt";
  } else if (bmi <= 25) {
    category = "Normalvikt";
  } else if (bmi <= 30) {
    category = "Övervikt";
  } else if (bmi <= 40) {
    category = "Kraftigt övervikt";
  } else {
    category = "Extremt övervikt";
  }

  let bmr;
  if (gender === "man") {
    const bmrMaleWeightCalc = 13.75 * weight;
    const bmrMaleHeightCalc = 5.003 * height;
    const bmrMaleAgeCalc = 4.676 * age;
    bmr = 66.47 + bmrMaleWeightCalc + bmrMaleHeightCalc - bmrMaleAgeCalc;
  } else {
    const bmrFemaleWeightCalc = 13.75 * weight;
    const bmrFemaleHeightCalc = 5.003 * height;
    const bmrFemaleAgeCalc = 4.676 * age;
    bmr = 655.1 + bmrFemaleWeightCalc + bmrFemaleHeightCalc - bmrFemaleAgeCalc;
  }

  document.getElementById("bmiValue").textContent = bmi.toFixed(1);
  document.getElementById("bmiCategory").textContent = category;
  document.getElementById("bmrValue").textContent = bmr.toFixed(0);
  document.getElementById("result").classList.add("show");

  document.getElementById("result").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
