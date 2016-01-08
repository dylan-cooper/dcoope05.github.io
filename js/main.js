/*
 * Dylan Cooper
 */

var errorPage = 'posts/yikes.html';
var homePage = 'posts/home.html';

var map = {
    "" : homePage,
    "about-me" : 'posts/about-me.html',
    "about-site": 'posts/about-site.html',
    "coop": {
        "" : 'posts/coop/home.html',
        "ccs" : 'posts/coop/ccs.html',
        "freshbooks" : 'posts/coop/freshbooks.html'
    },
}

$(document).ready(function(){
    //Loads the state upon document being ready
    render(window.location.hash);
});

$(window).on('hashchange', function(){
    render(window.location.hash);
});

function render(hash){
    var parts = hash.split('/');


    if (hash == '' || hash == '#'){
        result = homePage;
    } else if (parts.length > 3 || parts[0] != '#' || map[parts[1]] === undefined){
        //Error in the hash
        result = errorPage;
    } else if (typeof map[parts[1]] == 'string'){
        result = map[parts[1]];
    } else if (typeof map[parts[1]] == 'object'){
        parts[2] = (parts[2] === undefined) ? '' : parts[2];
        result = map[parts[1]][parts[2]];
    } else {
        result = errorPage;
    }

    console.log(result);
    $('#content').load(result);
}

function renderHome(){
    $('#content').load('posts/home.html');
}
