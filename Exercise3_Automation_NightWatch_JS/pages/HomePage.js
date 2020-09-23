
var leftmenu = {
  click_menu: function() {
    this.click('@leftmenu')
    this.pause(3000)
  }
};

var validation = {
  validation: function() {
    this.expect.element('@sesion').text.to.equal("SIGN IN")
    this.expect.element('@square').to.be.present
  }
};

var square = {
  click_square: function() {
    this.click('@square')
    this.pause(2000)
  }
};

var search = {
  search: function() {
    this.setValue('@search','Automating with Node.js – 001')
    this.click('@button')
    this.pause(2000)
  }
};

module.exports = {
    url: 'https://www.youtube.com/',
    commands: [leftmenu,validation,square,search],
    elements: {
      leftmenu: {
        selector: "//div[@id='start']//yt-icon[@id='guide-icon']",
        locateStrategy: 'xpath'
      },
      sesion: {
        selector: "//ytd-button-renderer[@class='style-scope ytd-masthead style-suggestive size-small']//yt-formatted-string[@id='text']",
        locateStrategy: 'xpath'
      },
      square: {
        selector: "//ytd-topbar-menu-button-renderer[2]//div[1]//a[1]//yt-icon-button[1]//button[1]//yt-icon[1]",
        locateStrategy: 'xpath'
      },
      search: {
        selector: "//input[@id='search']",
        locateStrategy: 'xpath'
      },
      button: {
        selector: "#search-icon-legacy"
      }
    }
  };