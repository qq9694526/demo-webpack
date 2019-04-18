import loadAudioAndInit from './js/soundPreload_babel'
require('./lib/Animate')
require('./css/ui.css')

window.onload = () => {
    loadAudioAndInit()
}