import 'pixi';
import 'p2';
import * as Phaser from 'phaser'
import Preload from './states/preload'
import Play from './states/play'
import Boot from './states/Boot'
class Game extends Phaser.Game{
    constructor (){
        super(window.innerWidth, window.innerHeight, Phaser.AUTO);
        console.log('Booting');
        this.state.add('Boot',Boot,false);
        console.log('Preloading');
        this.state.add('Preload',Preload,false);
        console.log('Playing');
        this.state.add('Play', Play, false);
        this.state.start('Boot')
    }
}
new Game();