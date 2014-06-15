describe("Links", function () {
  beforeEach(function () {
    this.server = sinon.fakeServer.create();

    var initSpy = jasmine.createSpy();

    this.puppet = new Puppet('/', initSpy);

    this.server.respond('{"hello": "world"}');

    waitsFor(function () {
      return initSpy.wasCalled;
    }, 10);
  });

  afterEach(function () {
    this.puppet.unobserve();
    this.server.restore();
  });

  function createLinkTest(href) {
    var a = document.createElement('A');
    a.innerHTML = 'Link';
    a.href = href;
    document.body.appendChild(a);
    document.body.addEventListener('click', clickHandler);
    a.click();
    document.body.removeEventListener('click', clickHandler);
    document.body.removeChild(a);
  }

  function clickHandler(event) {
    event.preventDefault();
  }

  describe("should intercept Puppet links to use History API", function () {
    it("relative path", function () {
      var historySpy = spyOn(window.history, 'pushState');

      var href = 'test';
      createLinkTest(href);

      expect(historySpy.callCount).toBe(1);
    });

    it("absolute path", function () {
      var historySpy = spyOn(window.history, 'pushState');

      var href = '/test';
      createLinkTest(href);

      expect(historySpy.callCount).toBe(1);
    });

    it("full URL in the same host, same port", function () {
      var historySpy = spyOn(window.history, 'pushState');

      var href = window.location.protocol + '//' + window.location.host + '/test'; //http://localhost:8888/test
      createLinkTest(href);

      expect(historySpy.callCount).toBe(1);
    });
  });

  describe("should not intercept external links", function () {
    it("full URL in the same host, different port", function () {
      var historySpy = spyOn(window.history, 'pushState');

      var port = window.location.port === '80' || window.location.port === '' ? '8080' : '80';
      var href = window.location.protocol + '//' + window.location.hostname + ':' + port + '/test'; //http://localhost:88881/test
      createLinkTest(href);

      expect(historySpy.callCount).toBe(0);
    });

    it("full URL in the same host, different schema", function () {
      var historySpy = spyOn(window.history, 'pushState');

      var protocol = window.location.protocol === 'http:' ? 'https:' : 'http:';
      var href = protocol + '//' + window.location.host + '/test'; //https://localhost:8888/test
      createLinkTest(href);

      expect(historySpy.callCount).toBe(0);
    });
  });

  describe("should be accessible via API", function() {
    it("should change history state programatically", function () {
      var historySpy = spyOn(window.history, 'pushState');

      this.puppet.morphUrl("/page2");

      expect(historySpy.callCount).toBe(1);
    });
  });
});