'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var gameSetCtrlStub = {
  index: 'gameSetCtrl.index',
  show: 'gameSetCtrl.show',
  create: 'gameSetCtrl.create',
  update: 'gameSetCtrl.update',
  destroy: 'gameSetCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var gameSetIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './game-set.controller': gameSetCtrlStub
});

describe('GameSet API Router:', function() {

  it('should return an express router instance', function() {
    expect(gameSetIndex).to.equal(routerStub);
  });

  describe('GET /api/game-sets', function() {

    it('should route to gameSet.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'gameSetCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/game-sets/:id', function() {

    it('should route to gameSet.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'gameSetCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/game-sets', function() {

    it('should route to gameSet.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'gameSetCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/game-sets/:id', function() {

    it('should route to gameSet.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'gameSetCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/game-sets/:id', function() {

    it('should route to gameSet.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'gameSetCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/game-sets/:id', function() {

    it('should route to gameSet.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'gameSetCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
