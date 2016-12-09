/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/campaigns/:userName    ->  index
 * POST    /api/campaigns              ->  create
 * GET     /api/campaigns/:userName/:id->  show
 * PUT     /api/campaigns/:id          ->  update
 * DELETE  /api/campaigns/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Campaign from './campaign.model';

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
    updated.markModified('missions');
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function saveMessagesUpdate(updates, missionId) {
    return function(entity) {
        // var updated = _.intersection(entity.missions, updates.missions);
        // updated.markModified('missions');
        // console.log('updated', updated);
        return updatentityes.update({}, {$pull: {'missions' : {_id: missionId}}})
        .then(updated => {
            console.log('updated', updated);
            return updated;
        });
    }
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

// Gets a list of Campaigns
export function index(req, res) {
  return Campaign.find({
      $or: [{
          owner: req.params.userName
      }, {
          'empire.player.email': req.params.userName
      }, {
          rebelion: { $elemMatch: { 'player.email': req.params.userName }}
      }]
  }).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Gets a single Campaign from the DB
export function show(req, res) {
  return Campaign.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Campaign in the DB
export function create(req, res) {
  return Campaign.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Campaign in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Campaign.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates campaign with removed message
export function updateMission(req, res) {
    if (req.body._id) {
      delete req.body._id;
    }
    return Campaign.update({'_id': req.params.id}, {$pull: {'missions': {'_id': req.params.mission}}}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Campaign from the DB
export function destroy(req, res) {
  return Campaign.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
