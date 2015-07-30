/**
 * Created by Dylan on 2015-07-29.
 */


$(document).ready(function(){
    //Loads the state upon document being ready
    render(window.location.hash);
});

$(window).on('hashchange', function(){
    render(window.location.hash);
});

function render(url){
    var temp = url.split('/')[0];

    console.log(temp);
    $('.state').removeClass('visible');

    var map = {
        "" : function() {
            renderHome();
        },

        "#about-me" : function() {
            renderAboutMe();
        },

        "#about-site": function() {
            renderAboutSite();
        },

        "#ccs-coop": function(){
            renderCcsCoop();
        }
    }

    if (map[temp]){
        map[temp]();
    } else {
        renderHome();
    }

}

function renderHome(){
    $("#home").addClass('visible');
}

function renderAboutMe(){
    $("#about-me").addClass('visible');
}

function renderAboutSite(){
    $("#about-site").addClass('visible');
}

function renderCcsCoop(){
    $("#ccs-coop").addClass('visible');
}