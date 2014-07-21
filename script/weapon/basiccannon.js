"use strict";

var BasicCannon = Bullet.extend(function(props){
	this.shooter = either(props.shooter, null);

	this.sprite.scale = new PIXI.Point(0.7,1.8);
	this.sprite.blendMode = PIXI.blendModes.ADD;
	this.sprite.depth = 50;
	this.angle = Math.atan2(this.xs,-this.ys);
	this.sprite.depth = 1000;
	this.updateSprite();
	Graphics.stage.addChild(this.sprite);

	this.damage = 7;
	this.collisionMask = {
		width: 16,
		height: 16
	};
})
.statics({
	texture: PIXI.Texture.fromImage("img/lasercore.png"),
	delay: 7,
	speed: 70,
	recoil: 4
})
.methods({
	updateSprite: function() {
		this.sprite.position = new PIXI.Point(
			this.x,
			this.y
		);
		this.sprite.rotation = this.angle;
	},

	step: function() {
		this.supr();

		this.angle = Math.atan2(this.xs,-this.ys);
		
		this.updateSprite();
	}
});