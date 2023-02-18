import 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
     //   this.load.image('logo', 'assets/phaser3-logo.png');
     //   this.load.image('libs', 'assets/libs.png');
     //   this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
     //   this.load.glsl('stars', 'assets/starfields.glsl.js');
    }

    create ()
    {
        // Create a rectangle
        const rect = this.add.rectangle(175, 300, 100, 50, 0x6e6962);
        // on hover, change color and then change back to original color when not hovered
        rect.setInteractive();
        rect.on('pointerover', () => {
            rect.setFillStyle(0x6eaa78);
        });
        rect.on('pointerout', () => {
            rect.setFillStyle(0x6e6962);
        });

        //when rect is clicked create a random sized circle at a random location within the bounds of the canvas
        // make sure that the circle is not created on top of the rectangle
        rect.on('pointerdown', () => {
            const x = Math.floor(Math.random() * 350);
            const y = Math.floor(Math.random() * 350);
            const radius = Math.floor(Math.random() * 50);
            if (x > 75 && x < 275 && y > 250 && y < 350) {
            } else {
                this.add.circle(x, y, radius, 0x8b5580);
            }
        });


  /*      
   this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
    */
    }

}

const config = {
    type: Phaser.AUTO,
    // make background blue 
    backgroundColor: '#68aca9',
    width: 350,
    height: 350,
    scene: Demo
};

const game = new Phaser.Game(config);
