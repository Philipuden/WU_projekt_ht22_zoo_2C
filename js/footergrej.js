var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('index_footer');
if (div.style.display !== 'none') {
    div.style.display = 'none';
}
else {
    div.style.display = 'block';
}
};