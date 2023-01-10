var button = document.getElementById('knapp');

button.onclick = function() {
    var div = document.getElementsByClassName('footer');
if (div.style.display !== 'none') {
    div.style.display = 'none';
    button.style.top = '60px';
    button.style.rotate = '180deg';
}
else {
    div.style.display = 'flex';
    button.style.top = '0px';
    button.style.rotate = '0deg';     
}
};