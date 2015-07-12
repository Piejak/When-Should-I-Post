$( function() {
  var parser = document.createElement('a');
  parser.href = window.location.href;

  var rawAccessToken = parser.hash;
  var accessToken = rawAccessToken.substring('#access_token='.length);
  console.log(accessToken);
});
