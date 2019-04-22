import createjs from 'createjs-npm'

//
const drawTitle = (text) => {
    var text = new createjs.Text(text, "36px Arial", "#333");
    text.x = 20;
    text.y = 20;
    return text
}
export {
    drawTitle 
}