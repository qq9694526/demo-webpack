import _ from 'lodash';
import './style.css';
import Icon from './icon.jpeg';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    // 添加按钮
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console222!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());