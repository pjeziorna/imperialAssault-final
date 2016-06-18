'use strict';

var app = require('../..');
import request from 'supertest';

var newMissionCard;

describe('MissionCard API:', function() {

  describe('GET /api/mission-cards', function() {
    var missionCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/mission-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          missionCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(missionCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mission-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mission-cards')
        .send({
          name: 'New MissionCard',
          info: 'This is the brand new missionCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMissionCard = res.body;
          done();
        });
    });

    it('should respond with the newly created missionCard', function() {
      expect(newMissionCard.name).to.equal('New MissionCard');
      expect(newMissionCard.info).to.equal('This is the brand new missionCard!!!');
    });

  });

  describe('GET /api/mission-cards/:id', function() {
    var missionCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/mission-cards/' + newMissionCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          missionCard = res.body;
          done();
        });
    });

    afterEach(function() {
      missionCard = {};
    });

    it('should respond with the requested missionCard', function() {
      expect(missionCard.name).to.equal('New MissionCard');
      expect(missionCard.info).to.equal('This is the brand new missionCard!!!');
    });

  });

  describe('PUT /api/mission-cards/:id', function() {
    var updatedMissionCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/mission-cards/' + newMissionCard._id)
        .send({
          name: 'Updated MissionCard',
          info: 'This is the updated missionCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMissionCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMissionCard = {};
    });

    it('should respond with the updated missionCard', function() {
      expect(updatedMissionCard.name).to.equal('Updated MissionCard');
      expect(updatedMissionCard.info).to.equal('This is the updated missionCard!!!');
    });

  });

  describe('DELETE /api/mission-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mission-cards/' + newMissionCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when missionCard does not exist', function(done) {
      request(app)
        .delete('/api/mission-cards/' + newMissionCard._id)
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
