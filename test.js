var spawn = require('child_process').spawn
  , hello = spawn('node', ['hello.js']);

var received = '';

hello.stdout.on('data', function(data) {
  received += data.toString('utf8');
});

hello.on('exit', function() {
  console.log('received: ', received);
  if (received === "Hello, world.\n") {
    console.log('passed');
    process.exit(0);
  } else {
    console.log('fail: invalid message');
    process.exit(-1);
  }
});

