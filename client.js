
//const button = document.getElementsByClassName('button button1');

document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'button button1') { 
             window.location="./testt.html";       
    }
}, false);
