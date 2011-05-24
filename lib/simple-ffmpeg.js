var fs      = require('fs'),
    path    = require('path'),
    async   = require('../support/async/index.js'),
    exec    = require('child_process').exec,
    spawn   = require('child_process').spawn;

var FFMPEG_NAME = 'ffmpeg';

var FFMpegWrapper = function() {
    var self = this;
    self._commands = [];
}


FFMpegWrapper.prototype = {
    withFrameRate : function(frameRate) {
        this._commands.push('-r', frameRate);
        return this;
    },

    withVideoBitRate : function(videoBitRate) {
        this._commands.push('-b', videoBitRate);
        return this;
    },

    withInputFile : function(fileName) {
        this._commands.push('-i', fileName);
        return this;
    },

    withOutputFile : function(fileName) {
        this._commands.push(fileName);
        return this;
    },

    exec : function() {
        var args = this._commands;
        
        var ffmpegSpawn = spawn(FFMPEG_NAME, args);

        var stdout = '';
        var stderr = '';

        ffmpegSpawn.on('exit', function(code) {
            console.log('exit');
        });

        ffmpegSpawn.stdout.on('data', function (data) {
            stdout += data;
        });

        ffmpegSpawn.stderr.on('data', function (data) {
            stderr += data;
        });
    },

    _buildArgs : function() {
        //async.forEach(this._commands,
    },

    //VL:TODO: add support for K M G i B
    _convertToRate : function(value) {
        var kbits = Math.round(value / 1000); //k
        return kbits + 'k';
    }
}
