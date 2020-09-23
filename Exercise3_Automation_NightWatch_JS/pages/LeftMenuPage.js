var validation = {
  validation: function() {
      this.expect.element('@inicio').to.be.visible
      this.expect.element('@inicio').to.be.enabled
      this.expect.element('@tendencias').to.be.visible
      this.expect.element('@tendencias').to.be.enabled
      this.expect.element('@historial').to.be.visible
      this.expect.element('@historial').to.be.enabled
  }
};

module.exports = {
    commands: [validation],
    elements: {
      inicio: {
        selector: 'div.style-scope.ytd-app:nth-child(12) app-drawer.style-scope.ytd-app:nth-child(2) div.style-scope.app-drawer:nth-child(2) div.style-scope.ytd-app div.style-scope.ytd-app:nth-child(2) div.style-scope.ytd-app:nth-child(2) ytd-guide-renderer.style-scope.ytd-app:nth-child(1) div.style-scope.ytd-guide-renderer:nth-child(1) ytd-guide-section-renderer.style-scope.ytd-guide-renderer:nth-child(1) div.style-scope.ytd-guide-section-renderer:nth-child(2) ytd-guide-entry-renderer.style-scope.ytd-guide-section-renderer:nth-child(1) a.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer paper-item.style-scope.ytd-guide-entry-renderer > yt-formatted-string.title.style-scope.ytd-guide-entry-renderer:nth-child(3)'
      },
      tendencias: {
        selector: 'div.style-scope.ytd-app:nth-child(12) app-drawer.style-scope.ytd-app:nth-child(2) div.style-scope.app-drawer:nth-child(2) div.style-scope.ytd-app div.style-scope.ytd-app:nth-child(2) div.style-scope.ytd-app:nth-child(2) ytd-guide-renderer.style-scope.ytd-app:nth-child(1) div.style-scope.ytd-guide-renderer:nth-child(1) ytd-guide-section-renderer.style-scope.ytd-guide-renderer:nth-child(1) div.style-scope.ytd-guide-section-renderer:nth-child(2) ytd-guide-entry-renderer.style-scope.ytd-guide-section-renderer:nth-child(2) a.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer paper-item.style-scope.ytd-guide-entry-renderer > yt-formatted-string.title.style-scope.ytd-guide-entry-renderer:nth-child(3)'
      },
      historial: {
        selector: 'div.style-scope.ytd-app:nth-child(12) app-drawer.style-scope.ytd-app:nth-child(2) div.style-scope.app-drawer:nth-child(2) div.style-scope.ytd-app div.style-scope.ytd-app:nth-child(2) div.style-scope.ytd-app:nth-child(2) ytd-guide-renderer.style-scope.ytd-app:nth-child(1) div.style-scope.ytd-guide-renderer:nth-child(1) ytd-guide-section-renderer.style-scope.ytd-guide-renderer:nth-child(2) div.style-scope.ytd-guide-section-renderer:nth-child(2) ytd-guide-entry-renderer.style-scope.ytd-guide-section-renderer:nth-child(2) a.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer paper-item.style-scope.ytd-guide-entry-renderer > yt-formatted-string.title.style-scope.ytd-guide-entry-renderer:nth-child(3)'
      }
    }
  };