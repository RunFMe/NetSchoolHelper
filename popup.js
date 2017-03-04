
document.addEventListener('DOMContentLoaded', function() {
  var login = document.getElementById('login');
  var pass = document.getElementById('pass');
  var autologin = document.getElementById('autologin');
  document.getElementById('button').addEventListener('click', function() {
    chrome.storage.local.set({'login': login.value,
                              'autologin': autologin.checked});
    if(pass.value != '') {
        chrome.storage.local.set({'password': pass.value});
    }
  });
  chrome.storage.local.get(['login','pass','autologin'], function(storage) {
    login.value = storage.login||'';
    autologin.checked = storage.autologin;
  });
})