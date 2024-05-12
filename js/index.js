const selectBlock = document.getElementById('selectBlock');
const selectListValues = document.getElementById('selectList');
const selectInput = document.getElementById('selectInput');
selectBlock.addEventListener('click', (e) => {
  e.target.classList.toggle('active');
});
selectListValues.addEventListener('click', (e) => {
  selectInput.value = e.target.innerText;
  selectBlock.classList.remove('active');
});

const percentInput = document.getElementById('percent');
const updatePercent = () => {
  let perValue = document.getElementById('percent');
  let printPerValue = document.getElementById('percentValue');
  printPerValue.innerText = `${perValue.value}%`;
};
percentInput.addEventListener('input', updatePercent);

const inputFile = document.getElementById('document');
inputFile.addEventListener('change', function (e) {
  const label = e.target.nextElementSibling;
  label.querySelector('.input_file-button-text').innerText = this.files[0].name;
});

const mobileMenu = document.getElementById('mobileMenu');
const navigation = document.getElementById('nav');
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('lock');
});
