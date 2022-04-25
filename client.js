
//const button = document.getElementsByClassName('button button1');
// Modules to control application life and create native browser window



document.body.addEventListener('click', function (evt) {
  if (evt.target.className === 'button button1') {
    window.location = "./testt.html";
  }
}, false);

document.body.addEventListener('click', function (evt) {
  if (evt.target.className === 'button button3') {
 
    ipcRenderer.send('close-me')


  }
}, false);


function SetAction(form) {
    
  const {ipcRenderer} = require('electron');
  var w = form.fname.value;
  var h = form.lname.value;
  var x1 = form.xname.value;
  var y1 = form.yname.value;
  const url = form.urln.value;
  const width = parseInt(w)
  const height = parseInt(h)
  const x = parseInt(x1)
  const y = parseInt(y1)

 

  ipcRenderer.send('resize-window', width, height, x, y, url)

}









