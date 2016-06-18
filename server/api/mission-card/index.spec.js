'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var missionCardCtrlStub = {
  index: 'missionCardCtrl.index',
  show: 'missionCardCtrl.show',
  create: 'missionCardCtrl.create',
  update: 'missionCardCtrl.update',
  destroy: 'missionCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var missionCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mission-card.controller': missionCardCtrlStub
});

describe('MissionCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(missionCardIndex).to.equal(routerStub);
  });

  describe('GET /api/mission-cards', function() {

    it('should route to missionCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'missionCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mission-cards/:id', function() {

    it('should route to missionCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'missionCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mission-cards', function() {

    it('should route to missionCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'missionCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mission-cards/:id', function() {

    it('should route to missionCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'missionCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mission-cards/:id', function() {

    it('should route to missionCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'missionCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mission-cards/:id', function() {

    it('should route to missionCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'missionCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
