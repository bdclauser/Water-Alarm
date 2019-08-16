console.log('Hello world!');

var documentPath;
var clockPath;

// Not supported process
try {
    // Testing Environment
    documentPath = process.env.JEST ? "../tests/document" : "document";
    clockPath = process.env.JEST ? "../tests/clock" : "clock";
} catch(error){
    // Production Environment
    documentPath = "document";
    clockPath = "clock";
}

const document = require(documentPath);
const clock = require(clockPath);


functions.clearScreen();

// Unsuppoted module
try {
    module.exports = functions;
} catch(error) { }