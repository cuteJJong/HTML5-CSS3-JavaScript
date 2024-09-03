function checkAnswers() {
  const answers = [11, 5, 42, 5, 9];
  let score = 0;
  let incorrectAnswers = 0;

  const userAnswers = [
      parseInt(document.getElementById('q1').value),
      parseInt(document.getElementById('q2').value),
      parseInt(document.getElementById('q3').value),
      parseInt(document.getElementById('q4').value),
      parseInt(document.getElementById('q5').value)
  ];

  userAnswers.forEach((answer, index) => {
      const inputField = document.getElementById(`q${index + 1}`);
      if (answer === answers[index]) {
          inputField.style.backgroundColor = '';
          score += 20;
      } else {
          inputField.style.backgroundColor = 'red';
          incorrectAnswers++;
      }
  });

  const name = document.getElementById('name').value;
  const date = new Date().toLocaleDateString();
  
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      ${name}님의 ${date} 계산 퀴즈 결과<br /><br />
      총 5문제 중 ${incorrectAnswers} 문제를 틀렸습니다.<br /><br />
      틀린 답은 빨간색으로 표시 하였습니다.<br /><br />
      최종 점수는 <span style="color: red;"${score >= 60 ? 'correct' : 'wrong'}">${score}점</span> 입니다.
  `;

  // 결과를 화면에 표시
  resultDiv.style.display = "block";
}
