function getAverage(scores){
  let sum = 0;
  for(const score of scores){
    sum += score;
  }
  return sum/scores.length;
}
console.log(getAverage([10,20,30]));

function getGrade(score){
  if(score === 100){
    return "A+";
  } else if(score >= 90){
    return "A";
  } else if(score >= 80){
    return "B";
  } else if(score >= 70){
    return "C";
  } else if(score >= 60){
    return "D";
  } else{
    return "F";
  }
}
console.log(getGrade(56));

function hasPassingGrade(score){
  return getGrade(score) != "F";
}
console.log(hasPassingGrade(59));

function studentMsg(scores, score){
  let total = getAverage(scores);
  let grade = getGrade(score);
  let hasPassed = hasPassingGrade(score);

  if(hasPassed){
    return "Class average: "+ total + ". " + "Your grade: " + grade + ". " + "You passed the course.";
  } else{
    return "Class average: "+ total + ". " + "Your grade: " + grade + ". " + "You failed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 67))
