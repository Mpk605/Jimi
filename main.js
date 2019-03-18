function search() {
    var KEY = '344e5598';

    var name = document.getElementById('in').value;

    var url = 'https://www.omdbapi.com/?apikey=' + KEY + '&s=' + name + '&r=xml';
    //+ '&type=movie'

    $.getJSON('https://whateverorigin.herokuapp.com/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        init(data.contents);
    });
}

function init(xml) {
    var h = document.createElement('xml');
    h.innerHTML = xml;

    var titles = h.getElementsByTagName('result');

    for (var i = 0; i < titles.length; i++) {
        document.getElementById('result').innerHTML += titles[i].attributes['title'].value.replace(document.getElementById('in').value, 'Jimi Hendrix') + "<br>";
    }
}
