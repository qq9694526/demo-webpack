import createjs from 'createjs-npm'

import {
    moveAnimateByOffset,
    singleAnimate,
    getScale,
    getBitmaps,
    bitmaps,
    contentWidth,
    contentHeight
} from './utils'


function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var c = 0, b = Array(a.length); c < a.length; c++) {
            b[c] = a[c]
        }
        return b
    } else {
        return Array.from(a)
    }
}
var canvas = document.getElementById("testCanvas");
canvas.height = contentHeight;
canvas.width = contentWidth;
var stage = new createjs.Stage(canvas);
var circle = new createjs.Shape();

// function getScale() {
//     return contentWidth / 750
// }
function staticImg(f) {
    var c = f.name,
        b = f.url,
        a = f.x,
        h = f.y,
        g = f.init,
        e = f.speed;
    return {
        name: c,
        url: b,
        x: a,
        y: h,
        init: g ||
            function () { },
        bitmap: null,
        call: function d(j, k) {
            if (!j) {
                return
            }
            this.bitmap.regY = k * (e || 1)
        }
    }
}
var sinGirl = getBitmaps({
    name: "sinGirl",
    url: [require("../img/zl1.png"), require("../img/zl2.png"), require("../img/zl3.png"), require("../img/zl4.png")],
    x: 300,
    y: 2992,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(1652, 4268, 400, 290, b, this.bitmap, sinGirl)
    }
},stage);
var bgList = [];
var bgY = [0, 2056, 5182, 5933, 5217, 5280, 5621, 4877, 8041];

function getSum(d, a) {
    var c = 0;
    for (var b = 0; b < 9; b++) {
        c = c + d[b];
        if (b == a) {
            break
        }
    }
    return c
}
for (var i = 0; i < 8; i++) {
    bgList.push(staticImg({
        name: "bg_" + i,
        url: require("../img/bg/bg_" + (i + 1) + ".png"),
        x: 0,
        y: getSum(bgY, i)
    }))
}
var ride_boy13 = getBitmaps({
    name: "ride_boy13",
    url: [require("../img/ride/ride_boy2-1.png"), require("../img/ride/ride_boy2-2.png")],
    x: 800,
    y: 34709,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(34009, 36009, -1400, 1900, b, this.bitmap, ride_boy13)
    }
},stage);
var imgs = [{
    name: "girl1",
    url: require("../img/ride/ride_girl1-2.png"),
    x: 480,
    y: 1540,
    lastY: 0,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        if (!a) {
            return
        }
        if (Math.abs(b - this.lastY) < 100) {
            this.bitmap.visible = true;
            this.bitmap.regY = b * 0.8;
            this.bitmap.regX = b * 0.2 * (52 / 57)
        } else {
            this.bitmap.visible = false;
            if (Math.abs(b - this.lastY) >= 200) {
                this.lastY = b
            }
        }
    }
},
{
    name: "girl2",
    url: require("../img/ride/ride_girl1-1.png"),
    x: 480,
    y: 1540,
    bitmap: null,
    init: function init() { },
    call: function call(a, b) {
        if (!a) {
            return
        }
        this.bitmap.visible = !a.girl1.isVisible();
        this.bitmap.regY = b * 0.8;
        this.bitmap.regX = b * 0.2 * (52 / 57)
    }
},
{
    name: "ren2",
    url: require("../img/cd/cd_pers0.png"),
    x: 212,
    y: 1900,
    bitmap: null,
    call: function call(a, b) {
        if (!a) {
            return
        }
        this.bitmap.regY = b * 0.95
    }
},
staticImg({
    name: "tj",
    url: require("../img/tj/tj_persZ3.png"),
    x: 360,
    y: 23400,
    speed: 0.9
}), staticImg({
    name: "sy_pers8",
    url: require("../img/sy/sy_pers8.png"),
    x: 255,
    y: 16500,
    speed: 0.9
})].concat(bgList, _toConsumableArray(ride_boy13), _toConsumableArray(sinGirl), [staticImg({
    name: "tower",
    url: require("../img/bg/tower.png"),
    x: 490,
    y: 3000
}), {
    name: "ld",
    url: require("../img/ld.png"),
    x: 252,
    y: 6879,
    bitmap: null,
    init: function init() {
        var a = this;
        setInterval(function () {
            a.bitmap.visible = !a.bitmap.isVisible()
        }, 1000)
    },
    call: function call(a, b) {
        this.bitmap.regY = b
    }
},
{
    name: "hd",
    url: require("../img/hd.png"),
    x: 537,
    y: 14327,
    bitmap: null,
    init: function init() {
        var a = this;
        setInterval(function () {
            a.bitmap.visible = !a.bitmap.isVisible()
        }, 1000)
    },
    call: function call(a, b) {
        this.bitmap.regY = b
    }
},
staticImg({
    name: "ren1",
    url: require("../img/cd_pers1.png"),
    x: 250,
    y: 990,
    speed: 0.9
}), staticImg({
    name: "ren2",
    url: require("../img/cd_pers2.png"),
    x: 430,
    y: 1190,
    speed: 0.9
}), staticImg({
    name: "cd_pers4",
    url: require("../img/cd_pers4.png"),
    x: 70,
    y: 5741,
    speed: 0.9
}), staticImg({
    name: "sy_pers1",
    url: require("../img/sy/sy_pers1.png"),
    x: 420,
    y: 9500,
    speed: 0.9
}), staticImg({
    name: "sy_pers3",
    url: require("../img/sy/sy_pers3.png"),
    x: 310,
    y: 11100,
    speed: 0.9
}), staticImg({
    name: "sy_pers6",
    url: require("../img/sy/sy_pers6.png"),
    x: 20,
    y: 14451,
    speed: 0.9
}), staticImg({
    name: "sy_pers7",
    url: require("../img/sy/sy_pers7.png"),
    x: 218,
    y: 15561,
    speed: 0.9
}), staticImg({
    name: "tj_pers0",
    url: require("../img/tj/tj_pers0.png"),
    x: 349,
    y: 25541
}), staticImg({
    name: "tj_pers1",
    url: require("../img/tj/tj_pers1.png"),
    x: 240,
    y: 20889,
    speed: 0.9
}), staticImg({
    name: "tj",
    url: require("../img/tj/tj_persZ2.png"),
    x: 380,
    y: 24600,
    speed: 0.9
}), staticImg({
    name: "tj_pers4",
    url: require("../img/tj/tj_pers4.png"),
    x: 103,
    y: 30093,
    speed: 0.9
}), {
    name: "btn",
    url: require("../img/getBtn.png"),
    x: 140,
    y: 39000,
    bitmap: null,
    init: function init() {
        this.bitmap.addEventListener("click", function (a) {
            golden.trackEvent("city_story_btn_ck", {}, "月卡按钮点击");
            window.location.href = "https://dc.tt/r4Q3HfCTgU3vJ"
        })
    },
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}]);
var bmx = bitmaps([staticImg({
    name: "bmx",
    url: require("../img/bmx/bmx.png"),
    x: 170,
    y: 19050
})], stage);
var ride_boy = getBitmaps({
    name: "rideBoy",
    url: [require("../img/ride/ride_boy1-1.png"), require("../img/ride/ride_boy1-2.png")],
    x: 750,
    y: 8000,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(7304, 9671, -1400, 1400, b, this.bitmap, ride_boy)
    }
},stage);
var ride_boy2 = getBitmaps({
    name: "rideBoy2",
    url: [require("../img/ride/ride_boy2-1.png"), require("../img/ride/ride_boy2-2.png")],
    x: 700,
    y: 22189,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(21351, 23858, -1400, 1700, b, this.bitmap, ride_boy2)
    }
},stage);
var ride_boy3 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_girl1-1-r.png"), require("../img/ride/ride_girl1-2-r.png")],
    x: -200,
    y: 3596,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(2736, 4736, 1400, 700, b, this.bitmap, ride_boy3)
    }
},stage);
var ride_boy4 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_boy2-1-r.png"), require("../img/ride/ride_boy2-2-r.png")],
    x: 293,
    y: 6185,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(5485, 7485, -700, 300, b, this.bitmap, ride_boy4)
    }
},stage);
var ride_boy5 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_girl1-1-r.png"), require("../img/ride/ride_girl1-2-r.png")],
    x: 0,
    y: 7329,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(6329, 7529, 780, 800, b, this.bitmap, ride_boy5)
    }
},stage);
var ride_boy6 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_girl1-1.png"), require("../img/ride/ride_girl1-2.png")],
    x: 293,
    y: 6185,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(5485, 7485, -700, 300, b, this.bitmap, ride_boy6)
    }
},stage);
console.log(ride_boy6);
var ride_boy7 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_boy1-1-r.png"), require("../img/ride/ride_boy1-2-r.png")],
    x: -200,
    y: 9800,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(8893, 11193, 700, 400, b, this.bitmap, ride_boy7)
    }
},stage);
var ride_boy8 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_boy1-1.png"), require("../img/ride/ride_boy1-2.png")],
    x: 700,
    y: 12900,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(12000, 14600, -1400, 1600, b, this.bitmap, ride_boy8)
    }
},stage);
var ride_boy9 = getBitmaps({
    name: "rideBoy3",
    url: [require("../img/ride/ride_boy1-1-r.png"), require("../img/ride/ride_boy1-2-r.png")],
    x: -200,
    y: 18448,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(17448, 19448, 1400, 1600, b, this.bitmap, ride_boy9)
    }
},stage);
var ride_boy10 = getBitmaps({
    name: "ride_boy10",
    url: [require("../img/ride/ride_boy2-1-r.png"), require("../img/ride/ride_boy2-2-r.png")],
    x: -200,
    y: 23806,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(23406, 25406, 1400, 1800, b, this.bitmap, ride_boy10)
    }
},stage);
var ride_boy11 = getBitmaps({
    name: "ride_boy11",
    url: [require("../img/ride/ride_boy2-1.png"), require("../img/ride/ride_boy2-2.png")],
    x: 800,
    y: 28885,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(28085, 30085, -1400, 1700, b, this.bitmap, ride_boy11)
    }
},stage);
var ride_boy12 = getBitmaps({
    name: "ride_boy11",
    url: [require("../img/ride/ride_boy2-1-r.png"), require("../img/ride/ride_boy2-2-r.png")],
    x: -250,
    y: 30649,
    bitmap: null,
    init: function init() {
        this.bitmap.visible = false
    },
    call: function call(a, b) {
        moveAnimateByOffset(30249, 32249, 1400, 1700, b, this.bitmap, ride_boy12)
    }
},stage);
var qiqiu = singleAnimate({
    name: "deng",
    url: [require("../img/qq1.png"), require("../img/qq2.png")],
    x: 434,
    y: 25431,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var rideList = [].concat(_toConsumableArray(ride_boy), _toConsumableArray(ride_boy2), _toConsumableArray(ride_boy3), _toConsumableArray(ride_boy5), _toConsumableArray(ride_boy6), _toConsumableArray(ride_boy7), _toConsumableArray(ride_boy8), _toConsumableArray(ride_boy9), _toConsumableArray(ride_boy10), _toConsumableArray(ride_boy11), _toConsumableArray(ride_boy12));
var bitmapObj = bitmaps(imgs, stage);
var geZi = singleAnimate({
    name: "geZi",
    url: [require("../img/gezi1.png"), require("../img/gezi2.png"), require("../img/gezi3.png")],
    x: 400,
    y: 4253,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 300, stage);
var cha = singleAnimate({
    name: "cha",
    url: [require("../img/cha-1.png"), require("../img/cha-2.png")],
    x: 43,
    y: 1485,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 300, stage);
var majiang = singleAnimate({
    name: "majiang",
    url: [require("../img/maj1.png"), require("../img/maj2.png")],
    x: 240,
    y: 2417,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 300, stage);
var dog = singleAnimate({
    name: "dog",
    url: [require("../img/dog1.png"), require("../img/dog2.png")],
    x: 118,
    y: 5518,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 300, stage);
var deng = singleAnimate({
    name: "deng",
    url: [require("../img/dl1.png"), require("../img/dl2.png")],
    x: 15,
    y: 735,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var cd_deng = singleAnimate({
    name: "cd_deng",
    url: [require("../img/cd/cd_deng2-1.png"), require("../img/cd/cd_deng2-2.png")],
    x: 590,
    y: 1475,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var motianlun = singleAnimate({
    name: "motianlun",
    url: [require("../img/tj/m1.png"), require("../img/tj/m2.png"), require("../img/tj/m3.png")],
    x: 105,
    y: 33569,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 200, stage);
var rabbit = singleAnimate({
    name: "motianlun",
    url: [require("../img/tj/tj_gif1-1.png"), require("../img/tj/tj_gif1-2.png")],
    x: 547,
    y: 30340,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var baoziD = singleAnimate({
    name: "baoziD",
    url: [require("../img/tj/d2.png"), require("../img/tj/d3.png")],
    x: 235,
    y: 31555,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var shopD = singleAnimate({
    name: "baoziD",
    url: [require("../img/tj/dl17.png"), require("../img/tj/dl18.png")],
    x: 0,
    y: 28383,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var coffe = singleAnimate({
    name: "coffe",
    url: [require("../img/tj/dl15.png"), require("../img/tj/dl16.png")],
    x: 385,
    y: 24080,
    bitmap: null,
    call: function call(a, b) {
        this.bitmap.regY = b
    }
}, 700, stage);
var imgList = [].concat(_toConsumableArray(majiang), _toConsumableArray(imgs), [bmx.bmx], _toConsumableArray(geZi), _toConsumableArray(cha), _toConsumableArray(dog), _toConsumableArray(deng), _toConsumableArray(cd_deng), _toConsumableArray(qiqiu), _toConsumableArray(motianlun), _toConsumableArray(rideList), _toConsumableArray(rabbit), _toConsumableArray(baoziD), _toConsumableArray(shopD), _toConsumableArray(coffe));
var circleList = [];
var circlePostionList = [{
    x: 85,
    y: 37304
},
{
    x: 85 + 130,
    y: 37304
},
{
    x: 85 + 130 * 2,
    y: 37304
},
{
    x: 85 + 130 * 3,
    y: 37304
},
{
    x: 140 + 120 * 3,
    y: 37304 + 122
},
{
    x: 140 + 120 * 2,
    y: 37304 + 122
},
{
    x: 140 + 120,
    y: 37304 + 122
},
{
    x: 140,
    y: 37304 + 122
},
{
    x: 140,
    y: 37304 + 122 * 2
},
{
    x: 140 + 120,
    y: 37304 + 122 * 2
},
{
    x: 140 + 120 * 2,
    y: 37304 + 122 * 2
},
{
    x: 140 + 120 * 3,
    y: 37304 + 122 * 2
},
{
    x: 140 + 120 * 3,
    y: 37304 + 122 * 3
},
{
    x: 140 + 120 * 2,
    y: 37304 + 122 * 3
},
{
    x: 140 + 120,
    y: 37304 + 122 * 3
},
{
    x: 140,
    y: 37304 + 122 * 3
},
{
    x: 140,
    y: 37304 + 122 * 4
},
{
    x: 140 + 120,
    y: 37304 + 122 * 4
},
{
    x: 140 + 120 * 2,
    y: 37304 + 122 * 4
},
{
    x: 140 + 120 * 3,
    y: 37304 + 122 * 4
},
{
    x: 140 + 120 * 3,
    y: 37304 + 120 * 5
},
{
    x: 140 + 120 * 2,
    y: 37304 + 120 * 5
},
{
    x: 140 + 140,
    y: 37304 + 120 * 5
},
{
    x: 140,
    y: 37304 + 120 * 5
},
{
    x: 160,
    y: 37304 + 120 * 6
},
{
    x: 160 + 120,
    y: 37304 + 120 * 6
},
{
    x: 160 + 120 * 2,
    y: 37304 + 120 * 6
},
{
    x: 160 + 120 * 3,
    y: 37304 + 120 * 6
}];
var cityIntervalStar = false;
var i = 0;

function cityInterval() {
    var a = setInterval(function () {
        if (i >= 28) {
            clearInterval(a);
            cityInterval = null;
            return
        }
        circle.graphics.beginFill("#FFFFFF").drawCircle(circlePostionList[i].x * getScale(), circlePostionList[i].y * getScale(), 15 * getScale());
        circleList.push(circle);
        stage.addChild(circle);
        i++
    }, 300)
}
function openCity(a) {
    if (a > 36324 * getScale() && !cityIntervalStar) {
        cityIntervalStar = true;
        cityInterval()
    }
    circleList.forEach(function (c, b) {
        c.regY = a * getScale()
    })
}
var render = function render(c, b, a) {
    openCity(b);
    imgList.forEach(function (d) {
        if (d.bitmap) {
            d.call(bitmapObj, b)
        }
    });
    stage.update()
};

export default render