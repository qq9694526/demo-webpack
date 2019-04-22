// import loadAudioAndInit from './js/soundPreload_babel'
// require('./lib/Animate')
// require('./css/ui.css')

// window.onload = () => {
//     loadAudioAndInit()
// }

import setp1 from './js/step1.js'

window.onload = () => {
    // 初始化画布宽高
    const canvas = document.getElementById("testCanvas");
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    setp1()
}