/**
 * GameSet model events
 */

'use strict';

import {EventEmitter} from 'events';
import GameSet from './game-set.model';
var GameSetEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GameSetEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  GameSet.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GameSetEvents.emit(event + ':' + doc._id, doc);
    GameSetEvents.emit(event, doc);
  }
}

export default GameSetEvents;
