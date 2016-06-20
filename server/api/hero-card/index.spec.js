'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var heroCardCtrlStub = {
  index: 'heroCardCtrl.index',
  show: 'heroCardCtrl.show',
  create: 'heroCardCtrl.create',
  update: 'heroCardCtrl.update',
  destroy: 'heroCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var heroCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './hero-card.controller': heroCardCtrlStub
});

describe('HeroCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(heroCardIndex).to.equal(routerStub);
  });

  describe('GET /api/hero-cards', function() {

    it('should route to heroCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'heroCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/hero-cards/:id', function() {

    it('should route to heroCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'heroCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/hero-cards', function() {

    it('should route to heroCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'heroCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/hero-cards/:id', function() {

    it('should route to heroCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'heroCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/hero-cards/:id', function() {

    it('should route to heroCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'heroCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/hero-cards/:id', function() {

    it('should route to heroCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'heroCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
