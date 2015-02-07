
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload: preload,
	create: create,
	update: update
});

function preload() {
	game.load.image('star', 'assets/star.png');
}

var star;
var listener = function(e) {

};

function create() {
	star = game.add.sprite(0, 0, 'star');
	game.physics.arcade.enable(star);
	
	star.body.bounce.y = 0.3;
	star.body.collideWorldBounds = true;

	star.inputEnabled = true;
    star.input.enableDrag(true);
    star.events.onInputDown.add(listener, this);
}

function update() {
	if (game.input.mousePointer.isDown) {
		star.body.velocity.y = 0;
		star.body.gravity.y = 0;
	} else {
		star.body.gravity.y = 300;
	}
}