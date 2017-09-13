export default class Boot extends Phaser.State {
    init(){
    }
    create (){
        this.state.start('Preload');
    }
}