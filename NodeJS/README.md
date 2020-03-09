# NodeJS

Node js is based on the JavaScript runtime engine that has been built for the Chrome browser. So the Chrome V8 JavaScript Engine has been ported from the browser to run on the desktop and support the execution of JavaScript programs on the desktop. Node.js is built around an event-driven, non-blocking I/O model which makes it very efficient to run JavaScript programs on the desktop, asynchronous JavaScript on the desktop.
## Typical architechture Of NodeJS
The Chrome V8 engine is the bottom layer together with libuv, forms the layer that interacts with the underlying computer system to support the execution of JavaScript programs. On top of it we have Node Bindings which is also implemented in C++. At the top layer you have the Node.js and Standard Library, which are all implemented in JavaScript and this is what enables us to write JavaScript programs and run them on the desktop.<br>
###     Node Core/Standard Library(JS)
###        Node Binings(C++)
###     Chrome V8(C++) |  libuv(C) 
