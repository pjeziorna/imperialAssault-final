/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/empire-class-cards              ->  index
 * POST    /api/empire-class-cards              ->  create
 * GET     /api/empire-class-cards/:id          ->  show
 * PUT     /api/empire-class-cards/:id          ->  update
 * DELETE  /api/empire-class-cards/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import EmpireClassCard from './empire-class-card.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of EmpireClassCards
export function index(req, res) {
  return EmpireClassCard.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single EmpireClassCard from the DB
export function show(req, res) {
  return EmpireClassCard.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new EmpireClassCard in the DB
export function create(req, res) {
  return EmpireClassCard.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing EmpireClassCard in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return EmpireClassCard.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a EmpireClassCard from the DB
export function destroy(req, res) {
  return EmpireClassCard.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
