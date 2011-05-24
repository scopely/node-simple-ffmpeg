var fs      = require('fs'),
    path    = require('path'),
    async   = require('../support/async/index.js'),
    exec    = require('child_process').exec,
    spawn   = require('child_process').spawn;

var FFMPEG_NAME = 'ffmpeg';

var SimpleFfmpeg = function() {
    var self = this;
    self._commands = [];
}


SimpleFfmpeg.prototype = {
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

    withFormat : function(format) {
        this._commands.push('-f', format);
        return this;
    },

    overwriteOutputFile : function() {
        this._commands.push('-y');
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
            console.log('stdout');
            stdout += data;
        });

        ffmpegSpawn.stderr.on('data', function (data) {
            console.log('stderr');
            stderr += data;
        });
    },

    _buildArgs : function() {
        //async.forEach(this._commands,
    },

    getArgs : function() {
        var args = '';
        
        for(var i=0; i<this._commands.length; i++) {
            args += this._commands[i];

            if (i < this._commands.length-1) {
                args += ' ';
            }
        }

        return args;
    },

    //VL:TODO: add support for K M G i B
    _convertToRate : function(value) {
        var kbits = Math.round(value / 1000); //k
        return kbits + 'k';
    }
}

exports.SimpleFfmpeg = SimpleFfmpeg;