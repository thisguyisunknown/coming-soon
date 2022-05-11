function confirm() {
  const btn = document.getElementById('submit'); 
    btn.value = 'Submitted..';
  const email = document.getElementById('email');
    email.value = '';
    setTimeout(() => {
      const btn = document.getElementById('submit'); 
      btn.value = 'Update Me';
    }, 1500);
}
function validateForm() {
  var x = document.forms["Form"]["email"].value;
  if (x == "") {
    return false;
  } else { confirm();
  }}
var form = document.getElementById("Form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);