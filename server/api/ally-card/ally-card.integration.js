'use strict';

var app = require('../..');
import request from 'supertest';

var newAllyCard;

describe('AllyCard API:', function() {

  describe('GET /api/ally-cards', function() {
    var allyCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/ally-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          allyCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(allyCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/ally-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ally-cards')
        .send({
          name: 'New AllyCard',
          info: 'This is the brand new allyCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAllyCard = res.body;
          done();
        });
    });

    it('should respond with the newly created allyCard', function() {
      expect(newAllyCard.name).to.equal('New AllyCard');
      expect(newAllyCard.info).to.equal('This is the brand new allyCard!!!');
    });

  });

  describe('GET /api/ally-cards/:id', function() {
    var allyCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/ally-cards/' + newAllyCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          allyCard = res.body;
          done();
        });
    });

    afterEach(function() {
      allyCard = {};
    });

    it('should respond with the requested allyCard', function() {
      expect(allyCard.name).to.equal('New AllyCard');
      expect(allyCard.info).to.equal('This is the brand new allyCard!!!');
    });

  });

  describe('PUT /api/ally-cards/:id', function() {
    var updatedAllyCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/ally-cards/' + newAllyCard._id)
        .send({
          name: 'Updated AllyCard',
          info: 'This is the updated allyCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAllyCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAllyCard = {};
    });

    it('should respond with the updated allyCard', function() {
      expect(updatedAllyCard.name).to.equal('Updated AllyCard');
      expect(updatedAllyCard.info).to.equal('This is the updated allyCard!!!');
    });

  });

  describe('DELETE /api/ally-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/ally-cards/' + newAllyCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when allyCard does not exist', function(done) {
      request(app)
        .delete('/api/ally-cards/' + newAllyCard._id)
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
