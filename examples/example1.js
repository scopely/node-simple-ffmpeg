var async          = require('../support/async/index.js'),
    SimpleFfmpeg   = require('../lib/simple-ffmpeg.js').SimpleFfmpeg;


var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(1)
    .withVideoBitRate(800)
    .withInputFile('input1.png')
    .withOutputFile('output1.png')
    .exec(function(code, stdout, stderr) {
        console.log(code);
        console.log(stdout);
        console.log(stderr);
    });
