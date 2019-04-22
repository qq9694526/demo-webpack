import createjs from 'createjs-npm'
import {drawTitle} from './common.js'

const image = require("../img/boy1.png");
// 简单动画实现之闪动
const init = () => {
    const stage = new createjs.Stage("testCanvas");
    stage.addChild(drawTitle("Step2: 实现简单闪动动画"))
    // 创建图片对象,当图片加载完成再添加到舞台
    const img = new Image();
    const bitmap = new createjs.Bitmap(image);
    bitmap.x = innerWidth-236
    stage.addChild(bitmap);
    createjs.Ticker.framerate = 2
    createjs.Ticker.addEventListener("tick", () => {
        stage.update();
    });
}

window.onload = () => {
    // 初始化画布宽高
    const canvas = document.getElementById("testCanvas");
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
}
