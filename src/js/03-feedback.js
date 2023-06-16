import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', throttle(handleFormInput, 500));
form.addEventListener('submit', handleFormSubmit);

function handleFormInput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  formData = { email: form.email.value, message: form.message.value };
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log({ email: form.email.value, message: form.message.value });

  if (form.email.value === '' || form.message.value === '') {
    return alert('Будь ласка, заповніть всі поля');
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}

reloadPage();
function reloadPage() {
  formData = localStorage.getItem(STORAGE_KEY);
  if (formData) {
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

// Відстежуй на формі подію input, і щоразу записуй у
// локальне сховище об'єкт з полями email і message, у
// яких зберігай поточні значення полів форми.Нехай ключем
// для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища,
//     і якщо там є збережені дані, заповнюй ними поля форми.
//     В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми,
//     а також виводь у консоль об'єкт з полями email,
//      message та їхніми поточними значеннями.
//===============info from the class
// import throttle from 'lodash.throttle';

// const STORAGE_MASSAGE = 'feedback-massage';

// const formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// populateTextareaInput();

// refs.form.addEventListener('submit', throttle(handleFormSubmit, 500));
// refs.textarea.addEventListener('input', throttle(handleTextareaInput, 500));

// refs.form.addEventListener('input', event => {
//   //   console.log(event.target.name);
//   //   console.log(event.target.value);

//   formData[event.target.name] = event.target.value;
//   console.log(formData);
// });

// function handleFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_MASSAGE);
// }

// function handleTextareaInput(event) {
//   const inputedMassage = event.target.value;
//   localStorage.setItem(STORAGE_MASSAGE, inputedMassage);
// }

// function populateTextareaInput() {
//   const savedMassage = localStorage.getItem(STORAGE_MASSAGE);

//   if (savedMassage) {
//     console.log(savedMassage);
//     refs.textarea.value = savedMassage;
//   }
// }
