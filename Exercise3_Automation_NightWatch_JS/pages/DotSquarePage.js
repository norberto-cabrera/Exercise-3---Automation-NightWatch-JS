var print = {
  print: function() {
    this.getAttribute('@youtubetv', 'textContent' , function(result){
      console.log("\nSquare Menu elements:")
      console.log("value:" + result.value)
    })
    this.getText('@youtubemusic', function(result){
      console.log("value:" + result.value)
    })
    this.getAttribute('@youtubekids', 'textContent' , function(result){
      console.log("value:" + result.value)
    })
    this.getText('@academia', function(result){
      console.log("value:" + result.value)
    })
    this.getAttribute('@youtubeartistas', 'textContent' , function(result){
      console.log("value:" + result.value + "\n")
    })
  }
};

module.exports = {
    commands: [print],
    elements: {
      youtubetv: {
        selector: "//yt-formatted-string[contains(text(),'YouTube TV')]",
        locateStrategy: 'xpath'
      },
      youtubemusic: {
        selector: "//yt-formatted-string[contains(text(),'YouTube Music')]",
        locateStrategy: 'xpath'
      },
      youtubekids: {
        selector: "//yt-formatted-string[contains(text(),'YouTube Kids')]",
        locateStrategy: 'xpath'
      },
      academia: {
        selector: ".style-scope:nth-child(3) > #items > .style-scope:nth-child(1) > #endpoint #label"
      },
      youtubeartistas: {
        selector: ".style-scope:nth-child(3) > #items > .style-scope:nth-child(2) > #endpoint #label"
      }
    }
  };