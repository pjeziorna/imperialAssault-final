'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var missionCtrlStub = {
  index: 'missionCtrl.index',
  show: 'missionCtrl.show',
  create: 'missionCtrl.create',
  update: 'missionCtrl.update',
  destroy: 'missionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var missionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mission.controller': missionCtrlStub
});

describe('Mission API Router:', function() {

  it('should return an express router instance', function() {
    expect(missionIndex).to.equal(routerStub);
  });

  describe('GET /api/missions', function() {

    it('should route to mission.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'missionCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/missions/:id', function() {

    it('should route to mission.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'missionCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/missions', function() {

    it('should route to mission.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'missionCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/missions/:id', function() {

    it('should route to mission.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'missionCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/missions/:id', function() {

    it('should route to mission.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'missionCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/missions/:id', function() {

    it('should route to mission.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'missionCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
