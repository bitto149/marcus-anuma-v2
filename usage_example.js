import { MessageBus } from './message_bus.js';

const bus = new MessageBus();

bus.subscribe('marcus-log', (msg) => {
    console.log('LOG:', msg);
});

bus.publish('marcus-log', 'Marcus engine initialized.');