
//const button = document.getElementsByClassName('button button1');
// Modules to control application life and create native browser window



document.body.addEventListener('click', function (evt) {
  if (evt.target.className === 'button button1') {
    window.location = "./testt.html";
  }
}, false);




function SetAction(form) {

 
  var w = form.fname.value;
  alert(w)

}
