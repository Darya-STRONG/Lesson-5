let point = 0;

for (i = 0; i < 2; i++) {
  let oneAnswer = prompt("Сколько будет 2+2?");

  if (+oneAnswer === 4) {
    point += 10;
    break;
  } else if (!oneAnswer && !isNaN(+oneAnswer) && +oneAnswer !== 4) {
    point += 0;
  }
}

for (i = 0; i < 2; i++) {
  let twoAnswer = confirm("Солнце встает на востоке?");
  if (twoAnswer) {
    point += 10;
    break;
  } else if (!twoAnswer) {
    point += 0;
  }
}

for (i = 0; i < 2; i++) {
  let threeAnswer = prompt("Сколько будет 5 / 0?");
  if (threeAnswer === 0) {
    point += 10;
    break;
  } else if (!isNaN(+threeAnswer) && +threeAnswer !== 0) {
    point += 0;
    break;
  }
}

for (i = 0; i < 2; i++) {
  let fourAnswer = prompt("Какого цвета небо?");
  if (fourAnswer) {
    fourAnswer.toLowerCase().trim();
  }
  if (fourAnswer !== null && fourAnswer === "фиолетовое") {
    point += 10;
    break;
  } else if (isNaN(fourAnswer) && fourAnswer !== "фиолетовое") {
    point += 0;
    break;
  }
}

for (i = 0; i < 2; i++) {
  let fiveAnswer = prompt(
    "Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?"
  );

  if (+fiveAnswer == 42) {
    point += 10;
    break;
  } else if (fiveAnswer !== null && !isNaN(+fiveAnswer) && +fiveAnswer !== 42) {
    point += 0;
    break;
  }
}

console.log(point);
