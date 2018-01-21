function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
            document.getElementById('code').textContent = this.responseText;
		    };
 	xhr.open('GET', url);
	xhr.send();
}