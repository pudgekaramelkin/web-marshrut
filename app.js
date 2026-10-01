document.querySelectorAll('[data-event]').forEach(link => {
 link.addEventListener('click', () => window.trackLearningEvent(link.dataset.event));
});
const quiz = document.querySelector('#quiz');
if (quiz) quiz.addEventListener('submit', event => {
 event.preventDefault();
 const answer = new FormData(quiz).get('answer');
 const result = document.querySelector('#quiz-result');
 if (answer === 'button') {
  result.textContent = 'Верно! Кнопка выполняет действие, а ссылка ведет к ресурсу.';
  if (!quiz.dataset.completed) {window.trackLearningEvent('quizComplete');quiz.dataset.completed = 'true';}
 } else result.textContent = 'Попробуйте еще раз. Нужен элемент, который выполняет действие.';
});
