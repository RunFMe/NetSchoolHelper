function fillForm() {
	var form = document.forms['MainForm'];
	var login = form.elements['UN'];
	var pass = form.elements['PW'];
	chrome.storage.local.get(['login', 'password', 'autologin'], function(storage) {
		login.value = storage.login;
		pass.value = storage.password;

		if(storage.autologin) {
            pressButton();
		}
	})
};

function pressButton() {

    setTimeout(function() {
        if (document.getElementsByClassName('button-login')[0] && document.getElementById("schools").options.length) {
            document.getElementsByClassName('button-login')[0].click();
            document.getElementById("schools").val = 1;
        } else {
            pressButton();
        }
    }, 100);
}

if (/comp|inter|loaded/.test(document.readyState)){
    fillForm();
} else {
    document.addEventListener('DOMContentLoaded', fillForm, false);
}