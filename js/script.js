$( function() {
  var parser = document.createElement('a');
  parser.href = window.location.href;

  var accessToken = parser.hash;
  alert(accessToken.substring('#access_token='.length));
  console.log(accessToken);
});
