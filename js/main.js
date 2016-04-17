/*
 * Dylan Cooper
 */

var errorPage = {path: 'posts/yikes.html', title: 'Yikes!'};
var homePage = {path: 'posts/home.html', title: 'Home'};

var map = {
    "" : homePage,
    "about-me" : {path: 'posts/about-me.html', title: 'About Me'},
    "about-site" : {path: 'posts/about-site.html', title: 'About This Site'},
    "coop" : {
        "" : {path: 'posts/coop/home.html', title: 'Co-ops'},
        "ccs" : {path: 'posts/coop/ccs.html', title: 'Co-op at CCS'},
        "freshbooks" : {path: 'posts/coop/freshbooks.html', title: 'Co-op at FreshBooks'}
    },
    "snippets" : {
        "" : {path: 'posts/snippets/home.html', title: 'Snippets'},
        "dragon-curve" : {path: 'posts/snippets/dragon-curve.html', title: 'Dragon Curve'}
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
    
    parts[2] = (parts[2] === undefined) ? '' : parts[2];

    if (hash == '' || hash == '#'){
        result = homePage;
    } else if (parts.length > 3 || parts[0] != '#' || map[parts[1]] === undefined){
        //Error in the hash
        result = errorPage;
    } else if (typeof map[parts[1]].path == 'string'){
        result = map[parts[1]];
    } else if (typeof map[parts[1]][parts[2]].path == 'string'){
        result = map[parts[1]][parts[2]];
    } else {
        result = errorPage;
    }

    $('#content').load(result.path);
    document.title = 'Dylan Cooper | ' + result.title;
}
