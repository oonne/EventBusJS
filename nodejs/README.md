# EventBusJS
Nodejs 事件总线
-----------------------------------------------

## Installation
``` 
npm install eventbus-typescript
```

## Usage
``` javascript
import {on, off, emit} from './eventbus-typescript';

// Subscribe
on('eventName', 'id-1', () => {/* do something */});

// Unsubscribe
off('eventName', 'id-1');

// Publish
emit('eventName', 'payload');
```