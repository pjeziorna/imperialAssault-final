'use strict';

var app = require('../..');
import request from 'supertest';

var newEmpireClassCard;

describe('EmpireClassCard API:', function() {

  describe('GET /api/empire-class-cards', function() {
    var empireClassCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/empire-class-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          empireClassCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(empireClassCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/empire-class-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/empire-class-cards')
        .send({
          name: 'New EmpireClassCard',
          info: 'This is the brand new empireClassCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEmpireClassCard = res.body;
          done();
        });
    });

    it('should respond with the newly created empireClassCard', function() {
      expect(newEmpireClassCard.name).to.equal('New EmpireClassCard');
      expect(newEmpireClassCard.info).to.equal('This is the brand new empireClassCard!!!');
    });

  });

  describe('GET /api/empire-class-cards/:id', function() {
    var empireClassCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/empire-class-cards/' + newEmpireClassCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          empireClassCard = res.body;
          done();
        });
    });

    afterEach(function() {
      empireClassCard = {};
    });

    it('should respond with the requested empireClassCard', function() {
      expect(empireClassCard.name).to.equal('New EmpireClassCard');
      expect(empireClassCard.info).to.equal('This is the brand new empireClassCard!!!');
    });

  });

  describe('PUT /api/empire-class-cards/:id', function() {
    var updatedEmpireClassCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/empire-class-cards/' + newEmpireClassCard._id)
        .send({
          name: 'Updated EmpireClassCard',
          info: 'This is the updated empireClassCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEmpireClassCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEmpireClassCard = {};
    });

    it('should respond with the updated empireClassCard', function() {
      expect(updatedEmpireClassCard.name).to.equal('Updated EmpireClassCard');
      expect(updatedEmpireClassCard.info).to.equal('This is the updated empireClassCard!!!');
    });

  });

  describe('DELETE /api/empire-class-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/empire-class-cards/' + newEmpireClassCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when empireClassCard does not exist', function(done) {
      request(app)
        .delete('/api/empire-class-cards/' + newEmpireClassCard._id)
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
