const ham = document.querySelector('.ham');
ham.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});
