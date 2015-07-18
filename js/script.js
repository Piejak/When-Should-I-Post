$( function() {
  var postTime = [];
  var likes = [];
  var lapt = [];
  var sortTime =[];
  var sortedPostTime = [];
  var sortedLikes = [];
  var avgLikes = 0;

  //variables for filters
  var filterList = [];
  var filterLabels = [];
  var filterLikes = [];
  var normal = [];
  var normalLikes = 0;
  var lark = [];
  var larkLikes = 0;
  var reyes = [];
  var reyesLikes = 0;
  var juno = [];
  var junoLikes = 0;
  var slumber = [];
  var slumberLikes = 0;
  var crema = [];
  var cremaLikes = 0;
  var ludwig = [];
  var ludwigLikes = 0;
  var aden = [];
  var adenLikes = 0;
  var perpetua = [];
  var perpetuaLikes = 0;
  var amaro = [];
  var amaroLikes = 0;
  var mayfair = [];
  var mayfairLikes = 0;
  var rise = [];
  var riseLikes = 0;
  var hudson = [];
  var hudsonLikes = 0;
  var valencia = [];
  var valenciaLikes = 0;
  var xproii = [];
  var xproiiLikes = 0;
  var sierra = [];
  var sierraLikes = 0;
  var willow = [];
  var willowLikes = 0;
  var lofi = [];
  var lofiLikes = 0;
  var earlybird = [];
  var earlybirdLikes = 0;
  var brannan = [];
  var brannanLikes = 0;
  var inkwell = [];
  var inkwellLikes = 0;
  var hefe = [];
  var hefeLikes = 0;
  var nashville = [];
  var nashvilleLikes = 0;
  var a1997 = [];
  var a1997Likes = 0;

  var parser = document.createElement('a');
  parser.href = window.location.href;
  //parser.href = "http://piejak.github.io/When-Should-I-Post/success.html#access_token=23817452.550939d.65b883ca68a543adaba9d68a95846c96"

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
        filterList.push(response.data[index].filter);
        
      });
      avgLikes = Math.round((avgLikes / likes.length) * 100) / 100;
      $.each(filterList, function(i, el) {
        if($.inArray(el, filterLabels) === -1) filterLabels.push(el);
      });
      console.log(filterLabels);
      //averaging likes for filters and adding them to the array for the graph
      if(a1997.length !== 0){
        $.each(a1997, function(i, el) {
          a1997Likes = a1997Likes + el;
        });
        filterLikes.push(a1997Likes / a1997.length);
      }
      if(aden.length !== 0){
        $.each(aden, function(i, el) {
          adenLikes = adenLikes + el;
        });
        filterLikes.push(adenLikes / aden.length);
      }
      if(amaro.length !== 0){
        $.each(amaro, function(i, el) {
          amaroLikes = amaroLikes + el;
        });
        filterLikes.push(amaroLikes / amaro.length);
      }
      if(brannan.length !== 0){
        $.each(brannan, function(i, el) {
          brannanLikes = brannanLikes + el;
        });
        filterLikes.push(brannanLikes / brannan.length);
      }
      if(crema.length !== 0){
        $.each(crema, function(i, el) {
          cremaLikes = cremaLikes + el;
        });
        filterLikes.push(cremaLikes / crema.length);
      }
      if(earlybird.length !== 0){
        $.each(earlybird, function(i, el) {
          earlybirdLikes = earlybirdLikes + el;
        });
        filterLikes.push(earlybirdLikes / earlybird.length);
      }
      if(hefe.length !== 0){
        $.each(hefe, function(i, el) {
          hefeLikes = hefeLikes + el;
        });
        filterLikes.push(hefeLikes / hefe.length);
      }
      if(hudson.length !== 0){
        $.each(hudson, function(i, el) {
          hudsonLikes = hudsonLikes + el;
        });
        filterLikes.push(hudsonLikes / hudson.length);
      }
      if(inkwell.length !== 0){
        $.each(inkwell, function(i, el) {
          inkwellLikes = inkwellLikes + el;
        });
        filterLikes.push(inkwellLikes / inkwell.length);
      }
      if(juno.length !== 0){
        $.each(juno, function(i, el) {
          junoLikes = junoLikes + el;
        });
        filterLikes.push(junoLikes / juno.length);
      }
      if(lark.length !== 0){
        $.each(lark, function(i, el) {
          larkLikes = larkLikes + el;
        });
        filterLikes.push(larkLikes / lark.length);
      }
      if(lofi.length !== 0){
        $.each(lofi, function(i, el) {
          lofiLikes = lofiLikes + el;
        });
        filterLikes.push(lofiLikes / lofi.length);
      }
      if(ludwig.length !== 0){
        $.each(ludwig, function(i, el) {
          ludwigLikes = ludwigLikes + el;
        });
        filterLikes.push(ludwigLikes / ludwig.length);
      }
      if(mayfair.length !== 0){
        $.each(mayfair, function(i, el) {
          mayfairLikes = mayfairLikes + el;
        });
        filterLikes.push(mayfairLikes / mayfair.length);
      }
      if(nashville.length !== 0){
        $.each(nashville, function(i, el) {
          nashvilleLikes = nashvilleLikes + el;
        });
        filterLikes.push(nashvilleLikes / nashville.length);
      }
      if(normal.length !== 0){
        $.each(normal, function(i, el) {
          normalLikes = normalLikes + el;
        });
        filterLikes.push(normalLikes / normal.length);
      }
      if(perpetua.length !== 0){
        $.each(perpetua, function(i, el) {
          perpetuaLikes = perpetuaLikes + el;
        });
        filterLikes.push(perpetuaLikes / perpetua.length);
      }
      if(reyes.length !== 0){
        $.each(reyes, function(i, el) {
          reyesLikes = reyesLikes + el;
        });
        filterLikes.push(reyesLikes / reyes.length);
      }
      if(rise.length !== 0){
        $.each(rise, function(i, el) {
          riseLikes = riseLikes + el;
        });
        filterLikes.push(riseLikes / rise.length);
      }
      if(sierra.length !== 0){
        $.each(sierra, function(i, el) {
          sierraLikes = sierraLikes + el;
        });
        filterLikes.push(sierraLikes / sierra.length);
      }
      if(slumber.length !== 0){
        $.each(slumber, function(i, el) {
          slumberLikes = slumberLikes + el;
        });
        filterLikes.push(slumberLikes / slumber.length);
      }
      if(valencia.length !== 0){
        $.each(valencia, function(i, el) {
          valenciaLikes = valenciaLikes + el;
        });
        filterLikes.push(valenciaLikes / valencia.length);
      }
      if(willow.length !== 0){
        $.each(willow, function(i, el) {
          willowLikes = willowLikes + el;
        });
        filterLikes.push(willowLikes / willow.length);
      }
      if(xproii.length !== 0){
        $.each(xproii, function(i, el) {
          xproiiLikes = xproiiLikes + el;
        });
        filterLikes.push(xproiiLikes / xproii.length);
      }
      console.log(filterLabels.sort());
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
        labels: filterLabels.sort(),
        series: [
          filterLikes
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

      document.getElementById('avg-likes').innerHTML = avgLikes;
    }
  });


  return false;
});
