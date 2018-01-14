var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

var channelName = document.querySelector(".channel-name")
var status = document.querySelector(".status")
var logo = document.querySelector(".logo")

    for (var i = 0; i < twitchers.length; i++) {
        var channel = twitchers[i]
        getTwitchChannel(channel)
    }

function getTwitchChannel(channel) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + channel, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);

    var result = document.createElement("div")
    result.className = "twitcher";
        if(data.stream === null){
            result.innerHTML = "<div>Unfortunately the " + channel + "channel is offline right now</div>"
            document.querySelector(".display").appendChild(result)
            result.classList.add("offline")
        } else{
    var game = data.stream.game;
    var channelName = data.stream.channel.name;
    var logopic = data.stream.channel.logo;
    result.classList.add("online")

        result.innerHTML = "<div><b>" + channelName + "</b></div><div> is currently playing " + game + ' </div><div><img src="' + logopic + '"></div>';
        document.querySelector(".display").appendChild(result)
    }

    }
  };
  request.send();
}



//****************************************************************Newer

var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

var channelName = document.querySelector(".channel-name")
var status = document.querySelector(".status")
var logo = document.querySelector(".logo")

    for (var i = 0; i < twitchers.length; i++) {
        var channel = twitchers[i]
        getTwitchChannel(channel)
        getTwitchStreams(channel)
    }

function getTwitchChannel(channel) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/" + channel, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);

    var result = document.createElement("a")
    result.className = "twitcher";
    result.href = data.url;
            result.innerHTML = channel + "<img src='" + data.logo + "'>"
            document.querySelector(".display").appendChild(result)
            result.classList.add("offline")


    }
  };
  request.send();
}


function getTwitchStreams(channel) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + channel, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);

        if(data.stream !== null){
        var onlineStreamer = document.createElement("div")
        onlineStreamer.className = "twitcher";

            var game = data.stream.game;
            var channelName = data.stream.channel.name;
            var logopic = data.stream.channel.logo;
            onlineStreamer.classList.add("online")
            onlineStreamer.innerHTML = "<div><b>" + channelName + "</b></div><div> is currently playing " + game + ' </div><div><img src="' + logopic + '"></div>';
        document.querySelector(".status").appendChild(onlineStreamer)
        }

    }
  };
  request.send();
}

