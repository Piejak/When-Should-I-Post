$( function() {
  var parser = document.createElement('a');
  parser.href = window.location.href;

  console.log(parser.hash);
});
