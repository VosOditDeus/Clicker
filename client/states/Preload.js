export default class Preload extends Phaser.State {
    preload() {
        this.game.load.spritesheet('aerocephal', '/images/monsters/aerocephal.png',192,192);
        this.game.load.spritesheet('arcana_drake', '/images/monsters/arcana_drake.png', 195,225);
        this.game.load.spritesheet('aurum-drakueli', '/images/monsters/aurum-drakueli.png',325,256);
        this.game.load.spritesheet('bat', '/images/monsters/bat.png',128,128);
        this.game.load.spritesheet('daemarbora', '/images/monsters/daemarbora.png',128,128);
        this.game.load.spritesheet('deceleon', '/images/monsters/deceleon.png',256,256);
        this.game.load.spritesheet('demonic_essence', '/images/monsters/demonic_essence.png',125,192);
        this.game.load.spritesheet('dune_crawler', '/images/monsters/dune_crawler.png',64,64);
        this.game.load.spritesheet('green_slime', '/images/monsters/green_slime.png',64,64);
        this.game.load.spritesheet('nagaruda', '/images/monsters/nagaruda.png',196,256);
        this.game.load.spritesheet('rat', '/images/monsters/rat.png',64,64);
        this.game.load.spritesheet('scorpion', '/images/monsters/scorpion.png',64,64);
        this.game.load.spritesheet('scorpion_goliath', '/images/monsters/scorpion_goliath.png',513,448);
        this.game.load.spritesheet('skeleton', '/images/monsters/skeleton.png',64,128);
        this.game.load.spritesheet('snake', '/images/monsters/snake.png',125,64);
        this.game.load.spritesheet('spider', '/images/monsters/spider.png',64,64);
        this.game.load.spritesheet('stygian_lizard', '/images/monsters/stygian_lizard.png',192,192);
        this.game.load.image('forest-back', '/images/forestParallax/parallax-forest-back-trees.png');
        this.game.load.image('forest-front', '/images/forestParallax/parallax-forest-front-trees.png');
        this.game.load.image('forest-lights', '/images/forestParallax/parallax-forest-lights.png');
        this.game.load.image('forest-middle', '/images/forestParallax/parallax-forest-middle-trees.png');
        this.game.load.image('coin', '/images/coin.png');

    }
    update(){
        this.state.start('Play')
    }
}