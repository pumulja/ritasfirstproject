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