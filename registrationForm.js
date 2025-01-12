function myfun() {
    var correct_way = /^[A-Z a-z]+$/

      var a = document.getElementById('fname').value;
      var a = document.getElementById('lname').value;

      if(a == '') {
        document.getElementById('msg').innerHTML = "Please enter your name";
        return false;
      }
      if(a.length < 3) {
        document.getElementById('msg').innerHTML = "Length is too short";
        return false;
      }
      if(a.length > 15) {
        document.getElementById('msg').innerHTML = "Length is too long";
        return false;
      }
      if(a.match(correct_way)){
        true;
      } else {
        document.getElementById('msg').innerHTML = "please write only alphabets";
        return false;
      }
}

function myfunction(){
  var a = document.myform.email.value;
  if(a.indexof('@') <= 0){
    document.getElementById('message').innerHTML = "invalid '@' position";
    return false;
  } 
  if ((a.charAt(a.length - 4) != '.' && a.charAt(a.length - 3) != '.')) {
    document.getElementById("messages").innerHTML = "invalid '.' position at 4";
    return false;
  }
}

function MyFunction() {
  var password = /^[A-Z a-z 0-9 ! @#$&*_]+$/

  var a = document.getElementById('password').value;

  if(a.match(password)){
    true;
  } else {
    document.getElementById("MESSAGE").innerHTML = "Password should contain a mixture of alphabets(atleast one Uppercast letter) , numbers(atleast one) and symbols(eg: @,_,#,$,&,*)"
    return false;
  }
}