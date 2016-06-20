'use strict';

var app = require('../..');
import request from 'supertest';

var newItemCard;

describe('ItemCard API:', function() {

  describe('GET /api/item-cards', function() {
    var itemCards;

    beforeEach(function(done) {
      request(app)
        .get('/api/item-cards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          itemCards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(itemCards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/item-cards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/item-cards')
        .send({
          name: 'New ItemCard',
          info: 'This is the brand new itemCard!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newItemCard = res.body;
          done();
        });
    });

    it('should respond with the newly created itemCard', function() {
      expect(newItemCard.name).to.equal('New ItemCard');
      expect(newItemCard.info).to.equal('This is the brand new itemCard!!!');
    });

  });

  describe('GET /api/item-cards/:id', function() {
    var itemCard;

    beforeEach(function(done) {
      request(app)
        .get('/api/item-cards/' + newItemCard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          itemCard = res.body;
          done();
        });
    });

    afterEach(function() {
      itemCard = {};
    });

    it('should respond with the requested itemCard', function() {
      expect(itemCard.name).to.equal('New ItemCard');
      expect(itemCard.info).to.equal('This is the brand new itemCard!!!');
    });

  });

  describe('PUT /api/item-cards/:id', function() {
    var updatedItemCard;

    beforeEach(function(done) {
      request(app)
        .put('/api/item-cards/' + newItemCard._id)
        .send({
          name: 'Updated ItemCard',
          info: 'This is the updated itemCard!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedItemCard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedItemCard = {};
    });

    it('should respond with the updated itemCard', function() {
      expect(updatedItemCard.name).to.equal('Updated ItemCard');
      expect(updatedItemCard.info).to.equal('This is the updated itemCard!!!');
    });

  });

  describe('DELETE /api/item-cards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/item-cards/' + newItemCard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when itemCard does not exist', function(done) {
      request(app)
        .delete('/api/item-cards/' + newItemCard._id)
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
