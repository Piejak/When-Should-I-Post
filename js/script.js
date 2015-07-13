$( function() {
  var postTime = [];
  var likes = [];
  var lapt = [];
  var sortTime =[];
  var parser = document.createElement('a');
  //parser.href = window.location.href;
  parser.href = "http://piejak.github.io/When-Should-I-Post/success.html#access_token=23817452.550939d.65b883ca68a543adaba9d68a95846c96"

  var rawAccessToken = parser.hash;
  var accessToken = rawAccessToken.substring("#access_token=".length);
  var feedURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";

  $.ajax({
    url: feedURL + accessToken,

    jsonp: "callback",

    dataType: "jsonp",

    data: {
      q: "created_time",
      format: "json"
    },

    success: function(response) {
      console.log(response);
      $.each(response.data, function(index) {
        lapt.push([]);
        var mill = response.data[index].created_time * 1000;
        sortTime.push(mill);
        var d = new Date(mill)
        var hour = d.getHours();
        var minute = d.getMinutes();
        if(hour > 12) {
          postTime.push((hour - 12) + ":" + minute + " PM");
        } else if (hour === 12) {
          postTime.push(hour + ":" + minute + " PM");
        } else {
          postTime.push(hour + ":" + minute + " AM");
        }
        likes.push(response.data[index].likes.count);
      });
      $.each(lapt, function(i) {
        lapt[i].push(sortTime[i]);
        lapt[i].push(postTime[i]);
        lapt[i].push(likes[i]);
      });

      console.log(postTime);
      console.log(likes);
      console.log(lapt);

      new Chartist.Line('.ct-chart', {
        labels: postTime,
        series: [
          likes
        ]
      }, {
        high: 115,
        low: 10,
        fullWidth: true,
        // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
          onlyInteger: true,
          offset: 20
        }
      });
    }
  });


  return false;
});
