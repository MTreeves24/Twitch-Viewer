var i,
    channelContainer = document.getElementById('channel-list');
    channelList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getTwitchStatus(channel) {
  var request,
      response;
  request = new XMLHttpRequest();
  request.open("GET", "https://api.twitch.tv/kraken/streams/" + channel + "?client_id=8s8q6lq86timbqakvvvrq363680c8a", true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      response = JSON.parse(request.responseText);
      if (response.stream === undefined) {
        status = "Account closed!";
      } else {
        status = (response.stream !== null) ? "online" : "offline";
      }

      getTwitchChannel(channel);
    }
  };
  request.send();
}

function getTwitchChannel(channel) {
  var request,
      response;
  request = new XMLHttpRequest();
  request.open("GET", "https://api.twitch.tv/kraken/channels/" + channel + "?client_id=8s8q6lq86timbqakvvvrq363680c8a", true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      response = JSON.parse(request.responseText);
      channelUrl = response.url;
      channelLogo = response.logo;
      channelName = response.display_name;
      if (status === "online") {
        channelStream = response.status;
      } else if (status === "offline") {
        channelStream = "offline";
      } else {
        channelStream = status;
      }

      if (channelStream.length > 50) {
        channelStream = channelStream.slice(0, 50) + "...";
      }

      channelContainer.innerHTML += '<li><a href="' + channelUrl + '" target="_blank"><img src="' + channelLogo + '" alt="logo" class="' + status + '-img"><h4 class="' + status + '-title">' + channelName + '</h4><p>' + channelStream + '</p></a>' + '<div class="' + status + '-dot"></div>' + '</li>';

    }
  };
  request.send();
}


for (i = 0; i < channelList.length; i++) {
  var channel = channelList[i];
  var status, channelName, channelLogo, channelStream;
  getTwitchStatus(channel);
}
