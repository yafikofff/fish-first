import Phaser from "phaser";
import './style.css'

new Phaser.Game({
  width: 420,
  height: 640,
  title: 'Phaser fish',
  url: import.meta.env.URL || '',
  version: import.meta.env.VERSION || '0.0.1',
  backgroundColor: '#000',
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,

});