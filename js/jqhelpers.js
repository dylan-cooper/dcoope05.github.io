$.getMultipleScripts = function(arr) {
  var _arr = $.map(arr, function(src) {
      return $.getScript(src);
  });

  _arr.push($.Deferred(function( deferred ){
      $( deferred.resolve );
  }));

  return $.when.apply($, _arr);
}
