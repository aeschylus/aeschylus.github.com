var bandName = "Indie Band";
var albumName = "Witty Title";
var imageURL = null;
var individuality = [];

function generate_design() {

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
       {
      format: "json"
    }, function(data) {
          $("#albumArt").attr("src", data.items[0].media.m);
});

$.getJSON("http://en.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0",
   function(data) {
          alert(data);
});
$("#bandName").text(bandName);
$("#albumName").text(albumName);
setTimeout("$('#albumArt').vintage()", 3000);
}

$(function() {
   generate_design()
   $("#infoButton").click(function { $("infoPane").show});
});
