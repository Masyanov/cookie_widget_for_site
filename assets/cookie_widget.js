// Функция для установки куки
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Функция для получения куки
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Проверка cookie и показ уведомления
window.onload = function() {
    if (!getCookie('site_pozhart_cookie_notice')) {
        document.getElementById('cookie-notice').style.display = 'flex';
    }
    document.getElementById('cookie-accept-btn').onclick = function() {
        setCookie('site_pozhart_cookie_notice', 'accepted', 365);
        document.getElementById('cookie-notice').style.display = 'none';
    }
}