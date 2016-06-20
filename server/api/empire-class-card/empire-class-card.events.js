/**
 * EmpireClassCard model events
 */

'use strict';

import {EventEmitter} from 'events';
import EmpireClassCard from './empire-class-card.model';
var EmpireClassCardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EmpireClassCardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  EmpireClassCard.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EmpireClassCardEvents.emit(event + ':' + doc._id, doc);
    EmpireClassCardEvents.emit(event, doc);
  }
}

export default EmpireClassCardEvents;
