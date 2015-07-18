$( function() {
  var postTime = [];
  var likes = [];
  var lapt = [];
  var sortTime =[];
  var sortedPostTime = [];
  var sortedLikes = [];
  var avgLikes = 0;

  //variables for filters
  var filterLabels = [];
  var filterLikes = [];
  var normal = [];
  var lark = [];
  var reyes = [];
  var juno = [];
  var slumber = [];
  var crema = [];
  var ludwig = [];
  var aden = [];
  var perpetua = [];
  var amaro = [];
  var mayfair = [];
  var rise = [];
  var hudson = [];
  var valencia = [];
  var xproii = [];
  var sierra = [];
  var willow = [];
  var lofi = [];
  var earlybird = [];
  var brannan = [];
  var inkwell = [];
  var hefe = [];
  var nashville = [];
  var a1997 = [];

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
        avgLikes = avgLikes + response.data[index].likes.count;
        switch(response.data[index].filter) {
          case "Normal":
            normal.push(response.data[index].likes.count);
            if(normal.length === 0) {
              filterLabels.push("Normal");
            }
            break;
          case "Lark":
            lark.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Reyes":
            reyes.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Juno":
            juno.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Slumber":
            slumber.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Crema":
            crema.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Ludwig":
            ludwig.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Aden":
            aden.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Perpetua":
            perpetua.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Amaro":
            amaro.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Mayfair":
            mayfair.push(response.data[index].likes.count);
            if(mayfair.length === 0) {
              filterLabels.push("Mayfair");
            }
            break;
          case "Rise":
            rise.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Hudson":
            hudson.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Valencia":
            valencia.push(response.data[index].likes.count);
            if(valencia.length === 0) {
              filterLabels.push("Valencia");
            }
            break;
          case "X Pro II":
            xproii.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Sierra":
            sierra.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Willow":
            willow.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Lo-Fi":
            lofi.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Earlybird":
            earlybird.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Brannan":
            brannan.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Inkwell":
            inkwell.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Hefe":
            hefe.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "Nashville":
            nashville.push(response.data[index].likes.count);
            if(rise.length === 0) {
              filterLabels.push("Rise");
            }
            break;
          case "1977":
            a1997.push(response.data[index].likes.count);
            if(a1997.length === 0) {
              filterLabels.push("1997");
            }
            break;
        }
      });
      avgLikes = Math.round((avgLikes / likes.length) * 100) / 100;
      console.log(normal);
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
      console.log("If you care enough about your Instagram likes to look at this webapp and also care enough about the webapp to be looking at this right now please get in touch with me because I am certain this demographic does not exist.");

      //likes based on time posted graph
      new Chartist.Line('#chart1', {
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

      //likes based on filter graph
      new Chartist.Bar('#chart2', {
        labels: filterLabels,
        series: [
          sortedLikes
        ]
      }, {
        high: Math.max.apply(null, likes),
        low: Math.min.apply(null, likes),
        fullWidth: true,
        // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisX: {
          onlyInteger: true,
          offset: 20
        }
      });

      document.getElementById('avg-likes').innerHTML = avgLikes;
    }
  });


  return false;
});
