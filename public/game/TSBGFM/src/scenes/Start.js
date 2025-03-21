export class Start extends Phaser.Scene {

    constructor() 
    {
        super('Start');
    }

    preload() 
    {
        this.load.image('panel_brown', 'assets/panel_brown_arrows_detail_200x100.png');
        this.load.image('star', 'assets/minimap_icon_star_yellow.png');
        this.load.image('start_banner', 'assets/banner_classic_curtain.png');
        this.load.image('knight', 'assets/more/knight.png');

        this.load.image("dice-albedo", "https://cdn.phaserfiles.com/v385assets/obj/dice/dice-albedo.png");
        this.load.obj("dice-obj", "https://cdn.phaserfiles.com/v385assets/obj/dice/dice.obj");
    }

    create_knight (x,y)
    {
        const knight = this.add.image(x, y, 'knight');
        knight.setDisplaySize(250, 250);
        return knight;
    }

    create_panel (x,y)
    {
        const panel = this.add.image(x, y, 'panel_brown');
        panel.setDisplaySize(300, 200);
        return panel;
    }

    create() 
    {
        this.cameras.main.setBackgroundColor('#808080');
        // this.background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        this.panel_left = this.create_panel(150,500);
        this.knight_left = this.create_knight(150, 300);

        this.panel_right = this.create_panel(650,500);
        this.knight_right = this.create_knight(650, 300);

        const start_banner = this.add.image(400, 555, 'start_banner');
        start_banner.setDisplaySize(150, 80);

        this.loadText = this.add.text(
            400, 550, 
            'CoMbAt...', 
            { fontFamily: 'Arial', fontSize: 24, color: '#e3f2ed' }
        );

        this.loadText.setOrigin(0.5);
        this.loadText.setStroke('#203c5b', 6);
        this.loadText.setShadow(1, 1, '#2d2d2d', 2, true, false);


        const logo = this.add.image(400, 300, 'star');

        this.tweens.add({
            targets: logo,
            y: 400,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            loop: -1
        });
    }
    
}