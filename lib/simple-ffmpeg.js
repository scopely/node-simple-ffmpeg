var fs      = require('fs'),
    path    = require('path'),
    async   = require('../support/async/index.js'),
    exec    = require('child_process').exec,
    spawn   = require('child_process').spawn;

//path to ffmpeg
var FFMPEG_NAME = 'ffmpeg';


/**
 *constructor
 */
var SimpleFfmpeg = function() {
    var self = this;
    self._commands = [];
    self._outputFile = '';
}


SimpleFfmpeg.prototype = {
    /**
     * set the frame rate
     * @param frameRate
     */
    withFrameRate : function(frameRate) {
        this._commands.push('-r', frameRate);
        return this;
    },

    /**
     * set the video bit rate
     * @param videoBitRate
     */
    withVideoBitRate : function(videoBitRate) {
        this._commands.push('-b', videoBitRate);
        return this;
    },

    /**
     * set the input file
     * @param fileName
     */
    withInputFile : function(fileName) {
        this._commands.push('-i', fileName);
        return this;
    },

    /**
     * set the output file
     * @param fileName
     */
    withOutputFile : function(fileName) {
        this._commands.push(fileName);
        this._outputFile = fileName;
        return this;
    },

    /**
     * set the output format
     * @param format
     */
    withFormat : function(format) {
        this._commands.push('-f', format);
        return this;
    },

    /**
     * overwrite the output file
     */
    overwriteOutputFile : function() {
        this._commands.push('-y');
        return this;
    },

    /**
     * add any other option
     * @param option
     */
    withOption : function(option) {
        this._commands.push(option);
        return this;
    },

    /**
     * execute ffmpeg
     * @param callback
     */
    exec : function(callback) {
        if (this._outputFile == null || this._outputFile == '') {
            throw new Error('output file required - call .withOutputFile()');
        };

        var args = this._commands;
        
        var ffmpegSpawn = spawn(FFMPEG_NAME, args);

        var stdout = '';
        var stderr = '';

        ffmpegSpawn.on('exit', function(code) {
            callback(code, stdout, stderr);
        });

        ffmpegSpawn.stdout.on('data', function (data) {
            stdout += data;
        });

        ffmpegSpawn.stderr.on('data', function (data) {
            stderr += data;
        });
    },

    /**
     * get the arguments (order matters as it applies to input or output)
     */
    getArgs : function() {
        return this._commands.join(' ');
    },

    printArgs : function() {
	console.log(this.getArgs());
	return this;
    },

    //VL:TODO: add support for K M G i B
    /**
     * convert units
     * @param value
     */
    _convertToRate : function(value) {
        var kbits = Math.round(value / 1000); //k
        return kbits + 'k';
    }
}

//export
exports.SimpleFfmpeg = SimpleFfmpeg;
