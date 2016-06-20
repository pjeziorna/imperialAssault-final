'use strict';

var app = require('../..');
import request from 'supertest';

var newHeroCard;

describe('HeroCard API:', function() {

  describe('GET /api/hero-cards', function() {
    var heroCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/hero-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          heroCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(heroCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/hero-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/hero-cards')
        .send({
          name: 'New HeroCard',
          info: 'This is the brand new heroCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newHeroCard = res.body;
          done();
        });
    });

    it('should respond with the newly created heroCard', function() {
      expect(newHeroCard.name).to.equal('New HeroCard');
      expect(newHeroCard.info).to.equal('This is the brand new heroCard!!!');
    });

  });

  describe('GET /api/hero-cards/:id', function() {
    var heroCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/hero-cards/' + newHeroCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          heroCard = res.body;
          done();
        });
    });

    afterEach(function() {
      heroCard = {};
    });

    it('should respond with the requested heroCard', function() {
      expect(heroCard.name).to.equal('New HeroCard');
      expect(heroCard.info).to.equal('This is the brand new heroCard!!!');
    });

  });

  describe('PUT /api/hero-cards/:id', function() {
    var updatedHeroCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/hero-cards/' + newHeroCard._id)
        .send({
          name: 'Updated HeroCard',
          info: 'This is the updated heroCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedHeroCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHeroCard = {};
    });

    it('should respond with the updated heroCard', function() {
      expect(updatedHeroCard.name).to.equal('Updated HeroCard');
      expect(updatedHeroCard.info).to.equal('This is the updated heroCard!!!');
    });

  });

  describe('DELETE /api/hero-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/hero-cards/' + newHeroCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when heroCard does not exist', function(done) {
      request(app)
        .delete('/api/hero-cards/' + newHeroCard._id)
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
