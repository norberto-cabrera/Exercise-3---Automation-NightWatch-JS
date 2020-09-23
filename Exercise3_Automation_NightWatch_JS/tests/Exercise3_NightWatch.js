module.exports = {
  before: function(browser) {
      var youtube = browser.page.HomePage()
      youtube.navigate()
      youtube.maximizeWindow()
      youtube.pause(1000)
  },

  beforeEach: function(browser) {
    console.log("Starting Test Case");
  },

  'Youtube': function (browser) {
      var youtube = browser.page.HomePage()
      var leftmenu = browser.page.LeftMenuPage()
      var square = browser.page.DotSquarePage()
      var results = browser.page.ResultPage()

      youtube.click_menu()
      leftmenu.validation()
      browser.mouseButtonClick(0)
      youtube.validation()
      youtube.click_square()
      square.print()
      youtube.search()
      results.validation()
      results.screen()
  },

  afterEach: function(browser) {
    console.log("Ending Test Case");
  },

  after: function(browser) {
      browser.end();
  },
};