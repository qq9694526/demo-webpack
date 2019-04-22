import createjs from 'createjs-npm'
import {drawTitle} from './common.js'

const image = require("../img/boy1.png");
//绘制一个图片到画布指定位置
const initV1 = () => {
    // 创建舞台
    const stage = new createjs.Stage("testCanvas");
    // 创建一个图像实例
    const bitmap = new createjs.Bitmap(image);
    // 添加图像实例到舞台
    stage.addChild(bitmap);
    // 更新舞台
    stage.update();
    // 这里有个问题:图片并没有加载出来,原因是图片资源加载异步
    // setTimeout(()=>{
    //     stage.update();
    // },1000)
}
// 解决图片异步的问题
const initV2 = () => {
    const stage = new createjs.Stage("testCanvas");
    // 创建图片对象,当图片加载完成再添加到舞台
    const img = new Image();
    img.src = "../img/boy1.png";
    img.onload = () => {
        const bitmap = new createjs.Bitmap(img);
        stage.addChild(bitmap);
        stage.update();
    }
}
// 使用Ticker心跳定时刷新画布，解决资源异步
const initV3 = () => {
    const stage = new createjs.Stage("testCanvas");
    // 创建图片对象,当图片加载完成再添加到舞台
    const img = new Image();
    const bitmap = new createjs.Bitmap(image);
    stage.addChild(bitmap);
    // 一个心跳在设定的时间间隔广播，默认间隔20（每秒20次）
    // createjs.Ticker.framerate = 1
    createjs.Ticker.addEventListener("tick", () => {
        // console.log("tick")
        stage.update();
    });
}

// 在V3的基础上让图片动起来
const initV4 = () => {
    const stage = new createjs.Stage("testCanvas");
    stage.addChild(drawTitle("Step1: 绘制一个图片到画布"))
    // 创建图片对象,当图片加载完成再添加到舞台
    const img = new Image();
    const bitmap = new createjs.Bitmap(image);
    bitmap.x = innerWidth-236
    stage.addChild(bitmap);
    // 一个心跳在设定的时间间隔广播，默认间隔20（每秒20次）
    createjs.Ticker.framerate = 50
    createjs.Ticker.addEventListener("tick", () => {
        if(bitmap.x<0||bitmap.y<0){
            return
        }
        bitmap.x -= 10
        bitmap.y += 15
        bitmap.scaleX -= 0.01 
        bitmap.scaleY -= 0.01 
        stage.update();
    });
}



export default initV4