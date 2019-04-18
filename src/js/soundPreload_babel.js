import createjs from 'createjs-npm'
import domInit from './domInit'
import render from './imgRender_babel'
import {
    getScale,
    contentWidth,
    contentHeight
} from './utils'

function noobnoob() { }
var progressBar = document.querySelector(".progressBar");
var progressText = document.querySelector(".progressText");
var load = document.querySelector(".load");
var canvasDom = document.querySelector("#testCanvas");
var boy = document.querySelector(".boy");
var boy_1 = document.querySelector(".boy-1");
var boy_flag = true;
setInterval(function () {
    if (boy_flag) {
        boy.style.display = "block";
        boy_1.style.display = "none"
    } else {
        boy.style.display = "none";
        boy_1.style.display = "block"
    }
    boy_flag = !boy_flag
}, 500);
var fileList = [{
    id: "ring",
    src: require("../audio/ring.mp3")
},
{
    id: "bird",
    src: require("../audio/bird.mp3")
},
{
    id: "girl",
    src: require("../audio/girl.mp3")
},
{
    id: "cd_audio1",
    src: require("../audio/cd_audio1.mp3")
},
{
    id: "tj_audio1",
    src: require("../audio/tj_audio1.mp3")
},
{
    id: "tj_audio2",
    src: require("../audio/tj_audio2.mp3")
},
{
    id: "tj_audio3",
    src: require("../audio/tj_audio3.mp3")
},
{
    id: "tj_audio4",
    src: require("../audio/block.mp3")
},
{
    id: "sy_audio1",
    src: require("../audio/sy_audio1.mp3")
},
{
    id: "sy_audio2",
    src: require("../audio/sy_audio2.mp3")
},
{
    id: "sy_audio3",
    src: require("../audio/sy_audio3.mp3")
},
{
    id: "sy_audio4",
    src: require("../audio/cat.mp3")
},
{
    id: "bg",
    src: require("../audio/bg.mp3")
},
{
    id: "dog",
    src: require("../audio/dog.mp3")
},
require("../img/bg-repeat.png"), require("../img/boy1.png"), require("../img/boy2.png"), require("../img/cha-1.png")];

function loadAudioAndInit() {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", complete, undefined);
    queue.on("progress", progress, undefined);
    queue.loadManifest(fileList);
}

function complete() {
    setTimeout(function () {
        load.style.display = "none";
        canvasDom.style.display = "block";
        var a = createSound(require("../audio/bg.mp3")).play({
            loop: 5
        });
        a.volume = 0.5;
        domInit(contentWidth, contentHeight, init)
    }, 500)
}
function init(c, b, a) {
    audioInit(b);
    render(c, b, a)
}
function progress(a) {
    progressBar.style.transform = "translateX(" + -(408 - a.progress * 408) + "px)";
    progressText.innerHTML = parseInt(a.progress * 100) + "%"
}
function audioInit(a) {
    audioList.forEach(function (c, b) {
        var d = c.starY * getScale();
        var e = c.endY * getScale();
        if (a > d && a < e && !c.hasPlay) {
            c.hasPlay = true;
            c.sound.play()
        } else {
            if (a <= d || a >= e) {
                if (c.hasPlay) {
                    c.sound._paused = true;
                    c.hasPlay = false
                }
            }
        }
    })
}
function createSound(a) {
    return createjs.Sound.createInstance(a)
}
var audioList = [{
    name: "ring",
    sound: createSound(require("../audio/ring.mp3")),
    hasPlay: false,
    starY: "500",
    endY: "1000"
},
{
    name: "bird",
    sound: createSound(require("../audio/bird.mp3")),
    hasPlay: false,
    starY: "2300",
    endY: "3800"
},
{
    name: "girl",
    sound: createSound(require("../audio/girl.mp3")),
    hasPlay: false,
    starY: "24507",
    endY: "25509"
},
{
    name: "dog",
    sound: createSound(require("../audio/dog.mp3")),
    hasPlay: false,
    starY: "4700",
    endY: "5700"
},
{
    name: "cd_audio1",
    sound: createSound(require("../audio/cd_audio1.mp3")),
    hasPlay: false,
    starY: "5400",
    endY: "6400"
},
{
    name: "tj_audio1",
    sound: createSound(require("../audio/tj_audio1.mp3")),
    hasPlay: false,
    starY: "25507",
    endY: "26507"
},
{
    name: "tj_audio2",
    sound: createSound(require("../audio/tj_audio2.mp3")),
    hasPlay: false,
    starY: "20907",
    endY: "21907"
},
{
    name: "tj_audio3",
    sound: createSound(require("../audio/tj_audio3.mp3")),
    hasPlay: false,
    starY: "30507",
    endY: "31507"
},
{
    name: "tj_audio4",
    sound: createSound(require("../audio/block.mp3")),
    hasPlay: false,
    starY: "19271",
    endY: "20871"
},
{
    name: "sy_audio1",
    sound: createSound(require("../audio/sy_audio1.mp3")),
    hasPlay: false,
    starY: "11087",
    endY: "12387"
},
{
    name: "sy_audio2",
    sound: createSound(require("../audio/sy_audio2.mp3")),
    hasPlay: false,
    starY: "12387",
    endY: "13387"
},
{
    name: "sy_audio3",
    sound: createSound(require("../audio/sy_audio3.mp3")),
    hasPlay: false,
    starY: "9087",
    endY: "10387"
},
{
    name: "sy_audio4",
    sound: createSound(require("../audio/cat.mp3")),
    hasPlay: false,
    starY: "29060",
    endY: "30060"
}];


export default loadAudioAndInit