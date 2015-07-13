$( function() {
  var postTime = [];
  var likes = [];
  var lapt = [];
  var sortTime =[];
  var sortedPostTime = [];
  var sortedLikes = [];
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
        var d = new Date(mill)
        var hour = d.getHours();
        var minute = d.getMinutes();
        var totalMinutes = (hour * 60) + minute;
        sortTime.push(totalMinutes);
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
      lapt.sort(function(a,b) {
        if (a[0] > b[0]) {
          return 1;
        }
        if (a[0] < b[0]) {
          return -1;
        }
        else {
          return 0;
        }
      });
      $.each(lapt, function(j) {
        sortedPostTime.push(lapt[j][1]);
        sortedLikes.push(lapt[j][2]);
      })

      console.log(sortedPostTime);
      console.log(sortedLikes);

      new Chartist.Line('.ct-chart', {
        labels: sortedPostTime,
        series: [
          sortedLikes
        ]
      }, {
        high: Math.max.apply(null, likes),
        low: Math.min.apply(null, likes),
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
