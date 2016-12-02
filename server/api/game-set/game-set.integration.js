'use strict';

var app = require('../..');
import request from 'supertest';

var newGameSet;

describe('GameSet API:', function() {

  describe('GET /api/game-sets', function() {
    var gameSets;

    beforeEach(function(done) {
      request(app)
        .get('/api/game-sets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameSets = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(gameSets).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/game-sets', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/game-sets')
        .send({
          name: 'New GameSet',
          info: 'This is the brand new gameSet!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGameSet = res.body;
          done();
        });
    });

    it('should respond with the newly created gameSet', function() {
      expect(newGameSet.name).to.equal('New GameSet');
      expect(newGameSet.info).to.equal('This is the brand new gameSet!!!');
    });

  });

  describe('GET /api/game-sets/:id', function() {
    var gameSet;

    beforeEach(function(done) {
      request(app)
        .get('/api/game-sets/' + newGameSet._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameSet = res.body;
          done();
        });
    });

    afterEach(function() {
      gameSet = {};
    });

    it('should respond with the requested gameSet', function() {
      expect(gameSet.name).to.equal('New GameSet');
      expect(gameSet.info).to.equal('This is the brand new gameSet!!!');
    });

  });

  describe('PUT /api/game-sets/:id', function() {
    var updatedGameSet;

    beforeEach(function(done) {
      request(app)
        .put('/api/game-sets/' + newGameSet._id)
        .send({
          name: 'Updated GameSet',
          info: 'This is the updated gameSet!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGameSet = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGameSet = {};
    });

    it('should respond with the updated gameSet', function() {
      expect(updatedGameSet.name).to.equal('Updated GameSet');
      expect(updatedGameSet.info).to.equal('This is the updated gameSet!!!');
    });

  });

  describe('DELETE /api/game-sets/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/game-sets/' + newGameSet._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when gameSet does not exist', function(done) {
      request(app)
        .delete('/api/game-sets/' + newGameSet._id)
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
