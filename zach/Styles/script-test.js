function toFahrenheit(c){
  return ((9/5) * c) + 32;
};
document.getElementById('demo').innerHTML = toFahrenheit(77);
console.log(toFahrenheit(30));

function adminLogin(form) {
  if (form.id.value=="Admin") {
    if (form.pass.value=="password123") {
      location="info.php"
    }
    else {
      alert("Invalid Password")
    }
  }
  else {
    alert("Invalid UserID")
  }
}
//While loop
//x=0
//window.onload = function popUp(){
//  while (x < 10){
//    alert('beep');
//    x++;
//  }
//}
var zach = {age:14, hairColor:"brown", eyeColor:"green"}
console.log(zach.eyeColor)
