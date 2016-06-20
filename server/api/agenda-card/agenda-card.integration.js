'use strict';

var app = require('../..');
import request from 'supertest';

var newAgendaCard;

describe('AgendaCard API:', function() {

  describe('GET /api/agenda-cards', function() {
    var agendaCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/agenda-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          agendaCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(agendaCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/agenda-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/agenda-cards')
        .send({
          name: 'New AgendaCard',
          info: 'This is the brand new agendaCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAgendaCard = res.body;
          done();
        });
    });

    it('should respond with the newly created agendaCard', function() {
      expect(newAgendaCard.name).to.equal('New AgendaCard');
      expect(newAgendaCard.info).to.equal('This is the brand new agendaCard!!!');
    });

  });

  describe('GET /api/agenda-cards/:id', function() {
    var agendaCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/agenda-cards/' + newAgendaCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          agendaCard = res.body;
          done();
        });
    });

    afterEach(function() {
      agendaCard = {};
    });

    it('should respond with the requested agendaCard', function() {
      expect(agendaCard.name).to.equal('New AgendaCard');
      expect(agendaCard.info).to.equal('This is the brand new agendaCard!!!');
    });

  });

  describe('PUT /api/agenda-cards/:id', function() {
    var updatedAgendaCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/agenda-cards/' + newAgendaCard._id)
        .send({
          name: 'Updated AgendaCard',
          info: 'This is the updated agendaCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAgendaCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAgendaCard = {};
    });

    it('should respond with the updated agendaCard', function() {
      expect(updatedAgendaCard.name).to.equal('Updated AgendaCard');
      expect(updatedAgendaCard.info).to.equal('This is the updated agendaCard!!!');
    });

  });

  describe('DELETE /api/agenda-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/agenda-cards/' + newAgendaCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when agendaCard does not exist', function(done) {
      request(app)
        .delete('/api/agenda-cards/' + newAgendaCard._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
