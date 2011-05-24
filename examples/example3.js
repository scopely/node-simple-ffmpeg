var async          = require('../support/async/index.js'),
    SimpleFfmpeg   = require('../lib/simple-ffmpeg.js').SimpleFfmpeg;


var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(1)
    .withVideoBitRate(800)
    .withInputFile(__dirname + '/images/1.png')
    .withInputFile(__dirname + '/images/2.png')
    .withInputFile(__dirname + '/images/3.png')
    .withInputFile(__dirname + '/images/4.png')
    .withInputFile(__dirname + '/images/5.png')
    .withInputFile(__dirname + '/images/6.png')
    .withInputFile(__dirname + '/images/7.png')
    .withInputFile(__dirname + '/images/8.png')
    .withOutputFile(__dirname + '/videos/output3.flv')
    .exec(function(code, stdout, stderr) {
        console.log(code);
        console.log(stdout);
        console.log(stderr);
    });
