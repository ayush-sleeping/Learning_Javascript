/* OOPSs in JS :
    OOPs in not programming language or library,
    Its the way of writing code.
    
    In this we combine variables and related functions to the unit, 
    This unit is called as Objects. 
    Vaiables are called as object properties and
    Functions are called as Object Methods.
    
    And the combining of related data and methods is called as encapsulation. */

console.clear()


// In example we have :

var videoName = "Intro to JS"
var fileFormat = "mp4"
var duration = "2:50"
var owner = "Ayush"

function getVideoName(){
    return videoName;
}
function getVideoName(){
    return fileFormat;
}
function getVideoName(){
    return duration;
}
function getVideoName(){
    return owner;
}


// Rewriting it as a Object :

var video = {
    videoName: "Intro to JS",
    fileFormat: "mp4",
    duration: "2:50",
    owner: "Ayush",
    getVideoName: function(){
        return this.videoName
    },
    getFileFormat: function(){
        return this.fileFormat
    },
    getDuration: function(){
        return this.duration
    },
    getOwner: function(){
        return this.owner
    }
}