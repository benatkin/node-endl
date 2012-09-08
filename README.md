# endl

endl from C++ writing to node

Why do this:

``` javascript
console.log('Hello, world.');
```

When you can do this?

``` javascript
var endl = require('endl');

process.stdout.write("Hello, world.");
process.stdout.write(endl);
```

It's like C++, but without the awksome operator overloading.

# TODO

Support for CRLF terminated lines?

# LICENSE

Public Domain.
