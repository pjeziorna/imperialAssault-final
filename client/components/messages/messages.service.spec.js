'use strict';

describe('Service: messages', function () {

  // load the service's module
  beforeEach(module('imperialAssaultApp'));

  // instantiate service
  var messages;
  beforeEach(inject(function (_messages_) {
    messages = _messages_;
  }));

  it('should do something', function () {
    expect(!!messages).to.be.true;
  });

});
