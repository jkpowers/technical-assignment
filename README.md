# Technical Assignment: FE Tools Engineer

This project is an app using React atop a Node Express API server. 
It does some minimal styling using [semantic-ui](https://semantic-ui.com)

## Setup

```
git clone git@github.com:jkpowers/technical-assignment.git
cd technical-assignment
npm i

cd client
npm i

cd ..
npm start
```

Note: It uses concurrently to run the webpack dev server along side the node server. The client is configured
to proxy API requests on localhost:3000 to localhost:3001 where the node server is running.

Tests can be run with

```
npm test

cd client
npm test
```

Note: you may need to install watchman if you encounter this error running the tests.
```
react-scripts test --env=jsdom

2017-05-28 09:18 node[1154] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
2017-05-28 09:18 node[1154] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1018:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1420:11)
npm ERR! Test failed.  See above for more details.
```
Here's the issue references: https://github.com/facebookincubator/create-react-app/issues/2393