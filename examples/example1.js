var async          = require('../support/async/index.js'),
    SimpleFfmpeg   = require('../lib/simple-ffmpeg.js').SimpleFfmpeg;


var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(1)
    .withVideoBitRate(800)
    .withInputFile(__dirname + '/videos/input1.mp4')
    .withOutputFile(__dirname + '/videos/output1.flv')
    .exec(function(code, stdout, stderr) {
        console.log(code);
        console.log(stdout);
        console.log(stderr);
    });
