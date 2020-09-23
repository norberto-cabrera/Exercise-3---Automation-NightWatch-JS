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
        selector: ".ytd-item-section-renderer:nth-child(1) > #dismissable #video-title > .style-scope"
      },
      title: {
        selector: '.ytd-video-primary-info-renderer'
      },
      visitas: {
        selector: ".view-count"
      }
    }
  };