/**
 * AgendaCard model events
 */

'use strict';

import {EventEmitter} from 'events';
import AgendaCard from './agenda-card.model';
var AgendaCardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AgendaCardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  AgendaCard.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AgendaCardEvents.emit(event + ':' + doc._id, doc);
    AgendaCardEvents.emit(event, doc);
  }
}

export default AgendaCardEvents;
