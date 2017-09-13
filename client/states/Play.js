import {monstersData} from "../utils"


//Me - to preserve context

export default class Play extends Phaser.State {
    resize() {
        // let isLandscape = this.game.height / this.game.width < 1.3;
        // let me = this;
        // // console.log(Math.min(this.game.width * 2 / 3, this.game.height )* .9() /.6);
        // this.style = {font: "50px Arial", fill: "#000000"};
        // if (!isLandscape) {
        //     this.fieldSize = 300;
        //     this.RevealButton.scale.setTo(.7);
        //     this.BuyCardButton.scale.setTo(.7);
        //     this.balanceText.scale.setTo(1);
        //     this.statusText.scale.setTo(1);
        //
        //     this.balanceText.x = this.game.width * .3;
        //     this.balanceText.y = this.game.height * .91;
        //     this.statusText.x = this.game.width * .68;
        //     this.statusText.y = this.game.height * .91;
        //     this.legend('vertical');
        // } else {
        //     this.fieldSize = 128;
        //     this.RevealButton.scale.setTo(.3);
        //     this.BuyCardButton.scale.setTo(.3);
        //     this.statusText.scale.setTo(.8);
        //     this.balanceText.scale.setTo(.8);
        //     this.balanceText.x = this.game.width * .5;
        //     this.balanceText.y = this.game.height * .05;
        //     this.statusText.x = this.game.width * .5;
        //     this.statusText.y = this.game.height * .10;
        //     this.legend('horizontal');
        // }
        //
        // this.generateCard();
    }

    create() {
        // player
        this.player = {
            clickDmg: 1,
            gold: 0
        };


        // setup each of our background to be full screen.
        let me = this;
        //Groups
        this.background = this.game.add.group();
        this.monsters = this.game.add.group();
        this.monsterInfoUI = this.game.add.group();
        this.coins = this.add.group();
        this.coins.createMultiple(50, 'coin', '', false);
        this.coins.setAll('inputEnabled', true);
        this.coins.setAll('goldValue', 1);
        this.coins.callAll('events.onInputDown.add', 'events.onInputDown', this.onClickCoin, this);

        //TODO: refactor this to special file with creating backgrounds, monsters, etc.
        ['forest-back', 'forest-lights', 'forest-middle', 'forest-front']
            .forEach(function (image) {
                let bg = me.game.add.tileSprite(0, 0, me.game.world.width,
                    me.game.world.height, image, '', me.background);
                bg.tileScale.setTo(6.2);
                /**/
            });

        //TODO: WRITE IN PURE ES6m NOT ES5ES6 ABOMINATION
        let monster;
        monstersData.forEach(function (data) {
            //Create monsters offscreen
            monster = me.monsters.create(9999, me.game.world.centerY, data.image, 3);
            monster.anchor.setTo(.5);
            // reference to the database, later will be descriptions, etc
            monster.details = data;
            monster.inputEnabled = true;
            monster.events.onInputDown.add(me.monsterClick, me);
            monster.animations.add('stay');
            // use the built in health component
            monster.health = monster.maxHealth = data.maxHealth;
            // hook into health and lifecycle events
            monster.events.onKilled.add(me.onKilledMonster, me);
            monster.events.onRevived.add(me.onRevivedMonster, me);

        });
        this.monsters.onChildInputDown.add(me.monsterClick, me);
        this.currentMonster = this.monsters.getRandom();
        this.currentMonster.position.set(this.game.world.centerX,
            this.game.world.centerY);
        // this.currentMonster.inputEnabled = true;

        this.currentMonster.animations.add('stay');
        // this.currentMonster.animations.play('stay',5,true)
        this.monsterInfoUI.position.setTo(this.currentMonster.x, this.currentMonster.y + 120);
        this.monsterNameText = this.monsterInfoUI.addChild(this.game.add.text(0, 0, this.currentMonster.details.name, {
            font: '48px Arial Black',
            fill: '#fff',
            strokeThickness: 4
        }));
        this.monsterHealthText = this.monsterInfoUI.addChild(this.game.add.text(0, 80, this.currentMonster.health + ' HP', {
            font: '32px Arial Black',
            fill: '#ff0000',
            strokeThickness: 4
        }));
        this.playerGoldText = this.add.text(30, 30, 'Gold: ' + this.player.gold, {
            font: '24px Arial Black',
            fill: '#fff',
            strokeThickness: 4
        });


        this.monsterNameText.anchor.setTo(.5);
        this.monsterHealthText.anchor.setTo(.5);
        this.dmgTextPool = this.add.group();
        let dmgText;
        for (let d = 0; d < 50; d++) {
            dmgText = this.add.text(0, 0, '1', {
                font: '64px Arial Black',
                fill: '#fff',
                strokeThickness: 4
            });
            // start out not existing, so we don't draw it yet
            dmgText.exists = false;
            dmgText.tween = this.game.add.tween(dmgText)
                .to({
                    alpha: 0,
                    y: 100,
                    x: this.game.rnd.integerInRange(100, 700)
                }, 1000, Phaser.Easing.Cubic.Out);

            dmgText.tween.onComplete.add(function (text, tween) {
                text.kill();
            });
            this.dmgTextPool.add(dmgText);

        }
    }

    update() {
        // this.currentMonster.animations.add('stay');
        this.currentMonster.animations.play('stay', 5, true);
    }

    monsterClick() {
        // reset the currentMonster before we move him
        // console.log('works');
        this.currentMonster.damage(this.player.clickDmg);
        // update the health text
        this.monsterHealthText.text = this.currentMonster.alive ? this.currentMonster.health + ' HP' : 'DEAD';
        let dmgText = this.dmgTextPool.getFirstExists(false);
        if (dmgText) {
            dmgText.text = this.player.clickDmg;
            dmgText.reset(this.game.input.mousePointer.x, this.input.mousePointer.y);
            dmgText.alpha = 1;
            dmgText.tween.start();
        }
    }

    onKilledMonster(monster) {
        let coin;
        // spawn a coin on the ground
        coin = this.coins.getFirstExists(false);
        coin.reset(this.game.world.centerX + this.game.rnd.integerInRange(-100, 100), this.game.world.centerY);
        coin.goldValue = 1;
        // move the monster off screen again
        monster.position.set(9999, this.game.world.centerY);

        // pick a new monster
        this.currentMonster = this.monsters.getRandom();
        // make sure they are fully healed
        this.currentMonster.revive(this.currentMonster.maxHealth);
        this.game.time.events.add(Phaser.Timer.SECOND * 3, this.onClickCoin, this, coin);

    }

    onRevivedMonster(monster) {
        monster.position.set(this.game.world.centerX, this.game.world.centerY);
        // update the text display
        this.monsterNameText.text = monster.details.name;
        this.monsterHealthText.text = monster.health + 'HP';
    }

    onClickCoin(coin) {
        if (!coin.alive) {
            return;
        }
        // give the player gold
        this.player.gold += coin.goldValue;
        // update UI
        this.playerGoldText.text = 'Gold: ' + this.player.gold;
        // remove the coin
        coin.kill();
    }

}

