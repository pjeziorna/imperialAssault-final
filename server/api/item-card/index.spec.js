'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var itemCardCtrlStub = {
  index: 'itemCardCtrl.index',
  show: 'itemCardCtrl.show',
  create: 'itemCardCtrl.create',
  update: 'itemCardCtrl.update',
  destroy: 'itemCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var itemCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './item-card.controller': itemCardCtrlStub
});

describe('ItemCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(itemCardIndex).to.equal(routerStub);
  });

  describe('GET /api/item-cards', function() {

    it('should route to itemCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'itemCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/item-cards/:id', function() {

    it('should route to itemCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'itemCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/item-cards', function() {

    it('should route to itemCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'itemCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/item-cards/:id', function() {

    it('should route to itemCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'itemCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/item-cards/:id', function() {

    it('should route to itemCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'itemCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/item-cards/:id', function() {

    it('should route to itemCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'itemCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
