const user = {
  'name' : '',
  'e-mail': '',
}

console.log(user['name']);
console.log(user.e-mail);

// при нажатии на кнопку действие происходило
const my_button = document.getElementById('join_newsletter');

my_button.onclick = function(){
  event.preventDefault(); // отменить действие браузера по умолчанию
  console.log(my_button)

  // при нажатии на кнопку действие происходило
const my_button = document.getElementById('join_newsletter');

my_button.onclick = function(){
  event.preventDefault(); // отменить действие браузера по умолчанию

  const name = document.getElementById('name');

  if (name.value === ""){
    name.style.border = '1px solid red';
  } else {
    name.style.border = '1px solid black';
  }
}