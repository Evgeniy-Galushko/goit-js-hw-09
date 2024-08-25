const formData = {
  email: '',
  message: '',
};

const forms = document.querySelector('.feedback-form');

function formObject(event) {
  const form = event.currentTarget;
  const inpyt = form.email.value.trim();
  const textarea = form.message.value.trim();
  formData.email = `${inpyt}`;
  formData.message = `${textarea}`;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
forms.addEventListener('input', formObject);

function sendingMessage(event) {
  event.preventDefault(forms);
  const email = document.querySelector('.feedback-form input');
  const textarea = document.querySelector('.feedback-form textarea');
  if (formData.email === '' && formData.message === '') {
    alert('Fill please all fields.');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    email.value = '';
    textarea.value = '';
  }
}
forms.addEventListener('submit', sendingMessage);

function checkingLocalStorage() {
  const email = document.querySelector('.feedback-form input');
  const textarea = document.querySelector('.feedback-form textarea');
  const messeg = localStorage.getItem('feedback-form-state');
  const json = JSON.parse(messeg);
  if (json) {
    email.value = json.email;
    textarea.value = json.message;
  }
}
checkingLocalStorage();
