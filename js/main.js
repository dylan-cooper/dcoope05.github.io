/*
 * Dylan Cooper
 */

var errorPage = {path: 'posts/yikes.html', title: 'Yikes!'};
var homePage = {path: 'posts/index.html', title: 'Home'};

var router = {
  "" : homePage,
  "about-me" : {
    path: 'posts/about-me.html',
    title: 'About Me',
  },
  "about-site" : {
    path: 'posts/about-site.html',
    title: 'About This Site'
  },
  "programming-languages" : {
    path: 'posts/programming-languages.html',
    title: 'Programming Languages',
    description: 'An overview of the programming languages that I\'ve used and my opinions of them.'
  },
  "projects": {
    path: 'posts/projects.html',
    title: 'Projects',
    description: 'An overview of the different projects that I\'ve worked on recently.'
  },
  "coop" : {
    "" : {
      path: 'posts/coop/index.html',
      title: 'Co-ops'
    },
    "ccs" : {
      path: 'posts/coop/ccs.html',
      title: 'Co-op at CCS',
      description: 'During the summer of 2015, I worked for 4 months at the University of Guelph Computing and Communication Services using the .NET framework as part of their enterprise applications team.'
    },
    "freshbooks" : {
      path: 'posts/coop/freshbooks.html',
      title: 'Co-op at FreshBooks',
      description: 'During the fall of 2015, I worked as a QA analyst for 4 months at FreshBooks, a company which provides accounting software for small businesses.'
    },
    "tulip": {
      path: 'posts/coop/tulip.html',
      title: 'Co-op at Tulip Retail',
      description: 'During the summer of 2016, I worked as a software developer for 4 months at Tulip Retail, a startup that builds retail and ecommerce software.',
    }
  },
  "snippets" : {
    "" : {
      path: 'posts/snippets/index.html',
      title: 'Snippets',
      description: "A little place where I'm posting JS snippets and projects which I also host on this site."
    },
    "dragon-curve" : {
      path: 'posts/snippets/dragon-curve.html',
      title: 'Dragon Curve',
      description: "An HTML5 canvas that draws a dragon curve fractal."
    },
    "goose-playground": {
      path: 'posts/snippets/goose-playground.html',
      title: 'Goose Playground',
      description: "A shape playground built using HTML5 canvas and a small webgl wrapper named 'Goose' that I wrote."
    },
    "goose-wordart": {
      path: 'posts/snippets/goose-wordart.html',
      title: 'Goose Word Art',
      description: "An application I built using HTML5 canvas and 'Goose' which displays words with a little animation."
    },
  }
};

$(document).ready(function(){
  render_page(window.location.hash);
});

$(window).on('hashchange', function(){
  render_page(window.location.hash);
});

function get_page(hash) {
  var parts = hash.split('/');

  parts[2] = (parts[2] === undefined) ? '' : parts[2];

  if (hash == '' || hash == '#'){
    result = homePage;
  } else if (parts.length > 3 || parts[0] != '#' || router[parts[1]] === undefined){
    //Error in the hash
    result = errorPage;
  } else if (typeof router[parts[1]].path == 'string'){
    result = router[parts[1]];
  } else if (typeof router[parts[1]][parts[2]].path == 'string'){
    result = router[parts[1]][parts[2]];
  } else {
    result = errorPage;
  }

  return result;
}

function render_page(hash) {
  var result = get_page(hash);

  $('#content').load(result.path, function(){
    $('.post-link-wrapper').html(function() {
      link = $(this).data().link;
      return render_link(link);
    })
  });
  document.title = 'Dylan Cooper | ' + result.title;


}

//I miss react
function render_link(hash) {
  var page = get_page(hash);

  var description = (page.description != undefined)
    ? '<p class="post-link-description">' + page.description + '</p>'
    : '';

  return(
    '<a class="post-link" href="' + hash + '">' +
    '<p class="post-link-title">' + page.title + '</p>' +
    description +
    '</a>'
  );
}
