var async           = require('support/async/index.js'),
    SimpleFfmpeg   = require('lib/simple-ffmpeg.js').SimpleFfmpeg;


exports['test withFrameRate'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(2);

    var args = ffmpeg.getArgs();
    test.equal(args, '-r 2', 'withFrameRate');
    test.done();
}

exports['test withVideoBitRate'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withVideoBitRate(800);

    var args = ffmpeg.getArgs();
    test.equal(args, '-b 800', 'withVideoBitRate');
    test.done();
}

exports['test withInputFile'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withInputFile('input1.png');

    var args = ffmpeg.getArgs();
    test.equal(args, '-i input1.png', 'withInputFile');
    test.done();
}

exports['test withOutputFile'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withOutputFile('output1.png');

    var args = ffmpeg.getArgs();
    test.equal(args, 'output1.png', 'withOutputFile');
    test.done();
}

exports['test withFormat'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withFormat('mp4');

    var args = ffmpeg.getArgs();
    test.equal(args, '-f mp4', 'withFormat');
    test.done();
}

exports['test overwriteOutputFile'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .overwriteOutputFile();

    var args = ffmpeg.getArgs();
    test.equal(args, '-y', 'overwriteOutputFile');
    test.done();
}

exports['test many parameters'] = function(test) {
    var ffmpeg = new SimpleFfmpeg()
    .withFrameRate(1)
    .withVideoBitRate(800)
    .withInputFile('input1.png')
    .withFormat('flv')
    .overwriteOutputFile()
    .withOutputFile('output1.png');

    var args = ffmpeg.getArgs();
    test.equal(args, '-r 1 -b 800 -i input1.png -f flv -y output1.png', 'many parameters');
    test.done();
}

exports['test exec'] = function(test) {
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
    //var args = ffmpeg.getArgs();
    //test.equal(args, '-r 1 -b 800 -i input1.png output1.png', 'many parameters');
    test.done();
}
