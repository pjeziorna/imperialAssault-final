'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var agendaCardCtrlStub = {
  index: 'agendaCardCtrl.index',
  show: 'agendaCardCtrl.show',
  create: 'agendaCardCtrl.create',
  update: 'agendaCardCtrl.update',
  destroy: 'agendaCardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var agendaCardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './agenda-card.controller': agendaCardCtrlStub
});

describe('AgendaCard API Router:', function() {

  it('should return an express router instance', function() {
    expect(agendaCardIndex).to.equal(routerStub);
  });

  describe('GET /api/agenda-cards', function() {

    it('should route to agendaCard.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'agendaCardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/agenda-cards/:id', function() {

    it('should route to agendaCard.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'agendaCardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/agenda-cards', function() {

    it('should route to agendaCard.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'agendaCardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/agenda-cards/:id', function() {

    it('should route to agendaCard.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'agendaCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/agenda-cards/:id', function() {

    it('should route to agendaCard.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'agendaCardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/agenda-cards/:id', function() {

    it('should route to agendaCard.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'agendaCardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
