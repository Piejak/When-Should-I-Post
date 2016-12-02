/*global $, console, Chartist */
$(function () {
    'use strict';
    
    //define the object for a picture
    function Picture(createdTime, likes, filter) {
        this.createdTime = createdTime;
        this.likes = likes;
        this.filter = filter;
    }
    
    //initialize a list of pictures
    var pictures = [],
        parser = document.createElement('a'),
        averageLikes = 0,
        filtersMap = {};
    
    //parser.href = window.location.href;
    parser.href = "http://piejak.github.io/When-Should-I-Post/success.html#access_token=23817452.550939d.65b883ca68a543adaba9d68a95846c96";
    
    var rawAccessToken = parser.hash,
        accessToken = rawAccessToken.substring("#access_token=".length),
        feedURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
    

    $.ajax({
        url: feedURL + accessToken,

        jsonp: "callback",

        dataType: "jsonp",

        data: {
            q: "created_time",
            format: "json"
        },

        success: function (response) {
            $.each(response.data, function (index) {
                var picture = new Picture(response.data[index].created_time,
                                          response.data[index].likes.count,
                                          response.data[index].filter
                                         ),
                    mill = picture.createdTime * 1000,
                    d = new Date(mill),
                    hour = d.getHours(),
                    minute = d.getMinutes(),
                    totalMinutes = (hour * 60) + minute,
                    filter = picture.filter;
                picture.timeOfDayMinutes = totalMinutes;
                averageLikes += picture.likes;
                if (filtersMap[filter] === undefined) {
                    filtersMap[filter] = {
                        likes: picture.likes,
                        quantity: 1,
                        average: picture.likes,
                        filter: filter
                    };
                } else {
                    console.log(filtersMap[filter]);
                    console.log(filter);
                    filtersMap[filter].likes += picture.likes;
                    filtersMap[filter].quantity += 1;
                    filtersMap[filter].average = filtersMap[filter].likes / filtersMap[filter].quantity;
                }
                //TODO: fix bug with time formatting
                if (hour > 12) {
                    picture.timeOfDay = (hour - 12) + ":" + minute + " PM";
                } else if (hour === 12) {
                    picture.timeOfDay = hour + ":" + minute + " PM";
                } else {
                    picture.timeOfDay = hour + ":" + minute + " AM";
                }
                pictures.push(picture);
            });
      
      
            pictures.sort(function (a, b) {
                return a.timeOfDayMinutes - b.timeOfDayMinutes;
            });
            console.log(pictures);
            var postTimeLabels = [],
                postTimeLikes = [],
                minLikes = pictures[0].likes,
                maxLikes = minLikes,
                filtersNames = [],
                filtersLikes = [];
            $.each(pictures, function (i) {
                postTimeLabels.push(pictures[i].timeOfDay);
                postTimeLikes.push(pictures[i].likes);
                if (pictures[i].likes < minLikes) {
                    minLikes = pictures[i].likes;
                }
                if (pictures[i].likes > maxLikes) {
                    maxLikes = pictures[i].likes;
                }
            });
            
            $.each(filtersMap, function (i) {
                filtersLikes.push(filtersMap[i].average);
                filtersNames.push(filtersMap[i].filter);
            });

            //likes based on time posted graph
            var timePostedChart = new Chartist.Line('#chart1', {
                labels: postTimeLabels,
                series: [
                    postTimeLikes
                ]
            }, {
                high: maxLikes,
                low: minLikes,
                fullWidth: true,
                // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
                axisY: {
                    onlyInteger: true,
                    offset: 20
                }
            });

            document.getElementById('avg-likes').innerHTML = Math.round(averageLikes / pictures.length);

            //likes based on filter graph
            var filterLikesChart = new Chartist.Bar('#chart2', {
                labels: filtersNames,
                series: [
                    filtersLikes
                ]
            }, {
                high: maxLikes,
                low: minLikes,
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
