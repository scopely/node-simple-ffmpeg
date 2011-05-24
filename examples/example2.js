var async          = require('../support/async/index.js'),
    SimpleFfmpeg   = require('../lib/simple-ffmpeg.js').SimpleFfmpeg;


var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(1)
    .withVideoBitRate(800)
    .withInputFile(__dirname + '/images/%01d.png')
    .withOutputFile(__dirname + '/videos/output2.flv')
    .exec(function(code, stdout, stderr) {
        console.log(code);
        console.log(stdout);
        console.log(stderr);
    });
