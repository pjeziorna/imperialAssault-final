'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var allyCardCtrlStub = {
  index: 'allyCardCtrl.index',
  show: 'allyCardCtrl.show',
  create: 'allyCardCtrl.create',
  update: 'allyCardCtrl.update',
  destroy: 'allyCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var allyCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './ally-card.controller': allyCardCtrlStub
});

describe('AllyCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(allyCardIndex).to.equal(routerStub);
  });

  describe('GET /api/ally-cards', function() {

    it('should route to allyCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'allyCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/ally-cards/:id', function() {

    it('should route to allyCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'allyCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/ally-cards', function() {

    it('should route to allyCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'allyCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/ally-cards/:id', function() {

    it('should route to allyCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'allyCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/ally-cards/:id', function() {

    it('should route to allyCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'allyCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/ally-cards/:id', function() {

    it('should route to allyCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'allyCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
