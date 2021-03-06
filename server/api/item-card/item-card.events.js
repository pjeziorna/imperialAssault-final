/**
 * ItemCard model events
 */

'use strict';

import {EventEmitter} from 'events';
import ItemCard from './item-card.model';
var ItemCardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ItemCardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  ItemCard.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ItemCardEvents.emit(event + ':' + doc._id, doc);
    ItemCardEvents.emit(event, doc);
  }
}

export default ItemCardEvents;
