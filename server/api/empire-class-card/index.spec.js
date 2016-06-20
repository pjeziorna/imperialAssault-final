'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var empireClassCardCtrlStub = {
  index: 'empireClassCardCtrl.index',
  show: 'empireClassCardCtrl.show',
  create: 'empireClassCardCtrl.create',
  update: 'empireClassCardCtrl.update',
  destroy: 'empireClassCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var empireClassCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './empire-class-card.controller': empireClassCardCtrlStub
});

describe('EmpireClassCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(empireClassCardIndex).to.equal(routerStub);
  });

  describe('GET /api/empire-class-cards', function() {

    it('should route to empireClassCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'empireClassCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/empire-class-cards/:id', function() {

    it('should route to empireClassCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'empireClassCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/empire-class-cards', function() {

    it('should route to empireClassCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'empireClassCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/empire-class-cards/:id', function() {

    it('should route to empireClassCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'empireClassCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/empire-class-cards/:id', function() {

    it('should route to empireClassCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'empireClassCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/empire-class-cards/:id', function() {

    it('should route to empireClassCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'empireClassCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
