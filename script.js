"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// --------------------------------------------------

const addSubmission = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};

addSubmission(submissions, "Evan", 86, "2022-02-09");
console.log(submissions);

// ----------------------------------------------------

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

// ----------------------------------------------------

const deleteSubmissionByName = (array, name) => {
  const indexName = array.findIndex((item) => item.name === name);
  array.splice(indexName, 1);
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

// ----------------------------------------------------

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 1, 54);
console.log(submissions);

// ----------------------------------------------------

const findSubmissionsByName = (array, name) =>
  array.find((item) => item.name == name);

console.log(findSubmissionsByName(submissions, "Jane"));

// ----------------------------------------------------

const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((person) => {
    if (person.score < lowestScore) {
      lowestScore = person;
    }
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));

// ----------------------------------------------------

const findAverageScore = (array) => {
  let total = 0;
  for (let score of array) {
    total += score.score;
  }
  return total / array.length;
};
console.log(findAverageScore(submissions));

// ----------------------------------------------------

const filterPassing = (array) => {
  return array.filter((item) => item.passed);
};
console.log(filterPassing(submissions));

// ----------------------------------------------------

const filter90AndAbove = (array) => {
  return array.filter((item) => item.score >= 90);
};

console.log(filter90AndAbove(submissions));

// ----------------------------------------------------

const createRange = (start, end) => {
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
};

console.log(createRange(2, 5));

// -----------------------------------------------------

const countElements = (array) => {
  let obj = {};
  array.forEach((letter) => (obj[letter] = 0));
  array.forEach((letter) => (obj[letter] += 1));
  return obj;
};

console.log(countElements(["a", "b", "a", "c", "a", "b"]));
