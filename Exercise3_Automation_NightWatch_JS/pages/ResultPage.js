var validation = {
  validation: function() {
    this.expect.element('@firstresult').text.to.equal("Automating with Node.js - 001")
    this.click('@firstresult')
    this.getText('@visitas',function(result){
        console.log("\nvisitas: " + result.value + "\n")
      })
      //results.expect.element('@title').text.to.equal("Automation with Selenium")
    this.verify.containsText('@title',"Automation with Selenium")
  }
};

var screen = {
  screen: function() {
    /*
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+time;
      var string = dateTime.toString() 
      results.saveScreenshot(`./reports/Failed_assertion_${string}.png`) */
      this.saveScreenshot(`./reports/Failed_assertion.png`)
  }
};

module.exports = {
    commands: [validation,screen],
    elements: {
      firstresult: {
        //selector: ".ytd-item-section-renderer:nth-child(1) > #dismissable #video-title > .style-scope"
        selector: "div.style-scope.ytd-app:nth-child(12) ytd-page-manager.style-scope.ytd-app:nth-child(4) ytd-search.style-scope.ytd-page-manager:nth-child(3) div.style-scope.ytd-search:nth-child(1) ytd-two-column-search-results-renderer.style-scope.ytd-search div.style-scope.ytd-two-column-search-results-renderer:nth-child(1) ytd-section-list-renderer.style-scope.ytd-two-column-search-results-renderer div.style-scope.ytd-section-list-renderer:nth-child(2) ytd-item-section-renderer.style-scope.ytd-section-list-renderer:nth-child(1) div.style-scope.ytd-item-section-renderer:nth-child(3) ytd-video-renderer.style-scope.ytd-item-section-renderer:nth-child(1) div.style-scope.ytd-video-renderer:nth-child(1) div.text-wrapper.style-scope.ytd-video-renderer div.style-scope.ytd-video-renderer:nth-child(1) div.style-scope.ytd-video-renderer:nth-child(1) h3.title-and-badge.style-scope.ytd-video-renderer a.yt-simple-endpoint.style-scope.ytd-video-renderer > yt-formatted-string.style-scope.ytd-video-renderer:nth-child(2)"
      },
      title: {
        selector: '.ytd-video-primary-info-renderer'
      },
      visitas: {
        selector: ".view-count"
      }
    }
  };