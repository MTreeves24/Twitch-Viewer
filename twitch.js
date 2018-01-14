var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "castro_1021"]



    for (var i = 0; i < twitchers.length; i++) {
        var channel = twitchers[i]
        getCurrentStreamers(channel)
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
            document.querySelector(".off").appendChild(result)
            result.classList.add("offline")

    }
  };
  request.send();
}


function getCurrentStreamers(channel) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + channel, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);

        if(data.stream !== null){

        var onlineStreamer = document.createElement("a")
        onlineStreamer.className = "twitcher";
        onlineStreamer.href = data.stream.channel.url;
            var game = data.stream.game;
            var channelName = data.stream.channel.name;
            var logopic = data.stream.channel.logo;
            onlineStreamer.classList.add("online")
            onlineStreamer.innerHTML = "<div><b>" + channelName + "</b></div><div>Currently playing: <em>" + game + ' </em></div><div><img src="' + logopic + '"></div>';
        document.querySelector(".on").appendChild(onlineStreamer)

        } else{
            getTwitchChannel(channel)
        }

    }
  };
  request.send();
}





//*************CODE TRYING TO GET THE ALL/ONLINE/OFFLINE BUTTONS WORKING*****************************
            document.querySelector(".onliners").onclick = function(){
            document.querySelector(".off").style.display = "none";
            document.querySelector(".on").style.display = "block";

}

            document.querySelector(".offliners").onclick = function(){
            document.querySelector(".on").style.display = "none";
            document.querySelector(".off").style.display = "block";

}

            document.querySelector(".all").onclick = function(){
            document.querySelector(".on").style.display = "block";
            document.querySelector(".off").style.display = "block";

}
