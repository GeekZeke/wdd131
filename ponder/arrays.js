// arrays.js
// Part 1: Convert steps to list items
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Part 2: Convert letter grades to GPA
const grades = ['A', 'B', 'A'];

function convertToPoints(grade) {
  const scale = { A: 4, B: 3, C: 2, D: 1, F: 0 };
  return scale[grade] ?? 0;
}

const gpaPoints = grades.map(convertToPoints);
console.log("GPA Points:", gpaPoints);

// Part 3: Calculate GPA
const totalPoints = gpaPoints.reduce((sum, current) => sum + current, 0);
const gpa = totalPoints / gpaPoints.length;
console.log("GPA:", gpa.toFixed(2));

// Part 4: Filter fruits shorter than 6 letters
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log("Short Fruits:", shortFruits);

// Part 5: Find lucky number
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);

if (index !== -1) {
  console.log(`Lucky number ${luckyNumber} found at index ${index}`);
} else {
  console.log(`Lucky number ${luckyNumber} not found`);
}
