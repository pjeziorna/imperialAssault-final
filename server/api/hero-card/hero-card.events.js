/**
 * HeroCard model events
 */

'use strict';

import {EventEmitter} from 'events';
import HeroCard from './hero-card.model';
var HeroCardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
HeroCardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  HeroCard.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    HeroCardEvents.emit(event + ':' + doc._id, doc);
    HeroCardEvents.emit(event, doc);
  }
}

export default HeroCardEvents;
