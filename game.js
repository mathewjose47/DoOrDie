var game = new Phaser.Game(1366, 768, Phaser.AUTO );

var w1;
var c;
var astronaut;
var walls;
var flamethrower;
var flamethrower_flames;
var mflamethrower;
var mflamethrower_flames;
var blastHim;
var blast;
var game_end_text;

var quitButton;
var fullButton;
var fullButton_scale = 0.3;
var quitButton_scale = 0.3;

//Game story (story button)
var gameState0 = function()
{

};

//home page state (START STATE) this state will have 4 buttons, leaderboard, story, instructions, play
var gameState1 = function(){
    
};

//Main game state (play button)
var gameState2 = function(){
 
};

//Game end state (game win. highest score reached.)
var gameState3=function() {

};

//instructions state (instructions button)
var gameState4 = function()
{

};

//leaderboard state (leaderboard button)
var gameState5 = function()
{

};

gameState0.prototype={

    preload : preload0,
    create : create0,
    update : update0
};

gameState1.prototype={
    preload:preload1,
    create:create1,
    update:update1
};


gameState2.prototype={

    preload : preload2,
    create : create2,
    update : update2
};

gameState3.prototype={

    preload : preload3,
    create : create3,
    update : update3
};

gameState4.prototype={

    preload : preload4,
    create : create4,
    update : update4
};

gameState5.prototype={

    preload : preload5,
    create : create5,
    update : update5
};


game.state.add('gameState0',gameState0);        // game story state 
game.state.add('gameState1',gameState1);        // home page state
game.state.add('gameState2',gameState2);        // play game state (if out show score and go to leaderboard)
game.state.add('gameState3',gameState3);        // game win state (end of game. highest score reached.)
game.state.add('gameState4',gameState4);        // instructions state
game.state.add('gameState5',gameState5);        // leaderboard state
game.state.start('gameState2'); // later change it to 1

function preload0()
{

};

function create0()
{

};

function update0()
{

};

function preload1()
{

};

function create1()
{

};

function update1()
{

};



function preload3()
{

};

function create3()
{

};

function update3()
{

};

function preload4()
{

};

function create4()
{

};

function update4()
{

};

function preload5()
{

};

function create5()
{
    game_end_text = game.add.text(game.world.width/2,game.world.height/2,'Leaderboard',{fontSize: '32px', fill:'#FFF'});
    game_end_text.anchor.setTo(0.5,0.5);
};

function showGameOver()
{
    setTimeout(function(){ game.state.start('gameState5'); }, 1000); // BURST ANIMATION TIME
    
    game_end_text = game.add.text(game.world.width/2,game.world.height/2,'Game Over',{fontSize: '32px', fill:'#FFF'});
    game_end_text.anchor.setTo(0.5,0.5);
}

function update5()
{

};
function quit(){
    //
}

function goFull() {
    if (game.scale.isFullScreen){
        game.scale.stopFullScreen();
    }
    else{
        game.scale.startFullScreen(false);
    }
}


 function preload2() 
 {

    game.load.image('w1', 'images/background/w3.jpg'); // space image
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.image('c', 'images/background/sc1.png'); // crystals
    game.load.spritesheet('astronaut', 'images/character/astronaut.png',32,32);
    game.load.image('flamethrower', 'images/flame/f2.png');
    game.load.spritesheet('flamethrower_flames', 'images/flame/Flames/flamethrower_/flamethrower_flames.png',512,512);
    game.load.image('mflamethrower', 'images/flame/mf2.png');
    game.load.spritesheet('mflamethrower_flames', 'images/flame/Flames/flamethrower_/mflamethrower_flames.png',512,512);
    game.load.spritesheet('blast', 'images/flame/Flames/fireball_hit_/flame_hit.png',512,512);

 }

 function create2(){
    game.time.desiredFps = 60;
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    w1 = game.add.sprite(0, 0, 'w1');
    walls = game.add.group();
    game.physics.arcade.enable(walls);
    walls.enableBody=true;

    astronaut=game.add.sprite(520,520,'astronaut');
    astronaut.scale.setTo(0.7,0.7);
    game.physics.arcade.enable(astronaut);
    astronaut.enableBody=true;

    flamethrower = game.add.sprite(420,360,'flamethrower');
    flamethrower.scale.setTo(0.3,0.3);
    flamethrower.enableBody=true;
    game.physics.arcade.enable(flamethrower);
    flamethrower.body.immovable=true;

    flamethrower = game.add.sprite(420,360,'flamethrower');
    flamethrower.scale.setTo(0.3,0.3);

    mflamethrower = game.add.sprite(420,360,'mflamethrower');
    mflamethrower.scale.setTo(0.3,0.3);
    mflamethrower.enableBody=true;
    game.physics.arcade.enable(mflamethrower);
    mflamethrower.body.immovable=true;
    
    mflamethrower = game.add.sprite(840,360,'mflamethrower');
    mflamethrower.scale.setTo(0.3,0.3);

    astronaut.animations.add('left', [3,4,5], 10, true);
    astronaut.animations.add('right', [6,7,8], 10, true);
    astronaut.animations.add('up', [9,10,11], 10, true);
    astronaut.animations.add('down', [0,1,2], 10, true);

    flamethrower_flames = game.add.sprite(490,325,'flamethrower_flames');
    flamethrower_flames.scale.setTo(0.2,0.2);
    flamethrower_flames.enableBody=true;
    game.physics.arcade.enable(flamethrower_flames);
    flamethrower_flames.animations.add('burn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 15, true);

    mflamethrower_flames = game.add.sprite(760,325,'mflamethrower_flames');
    mflamethrower_flames.scale.setTo(0.2,0.2);
    mflamethrower_flames.enableBody=true;
    game.physics.arcade.enable(mflamethrower_flames);
    mflamethrower_flames.animations.add('mburn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 15, true);
    

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();






    //.........................................................THE MAZE .....................................................
    

    //outer 4 walls
    c=walls.create(0,0,'c');c=walls.create(40,0,'c');c=walls.create(80,0,'c');c=walls.create(120,0,'c');
    c=walls.create(160,0,'c');c=walls.create(200,0,'c');c=walls.create(240,0,'c');c=walls.create(280,0,'c');
    c=walls.create(320,0,'c');c=walls.create(360,0,'c');c=walls.create(400,0,'c');c=walls.create(440,0,'c');
    c=walls.create(480,0,'c');c=walls.create(520,0,'c');c=walls.create(560,0,'c');c=walls.create(600,0,'c');
    c=walls.create(640,0,'c');c=walls.create(680,0,'c');c=walls.create(720,0,'c');c=walls.create(760,0,'c');
    c=walls.create(800,0,'c');c=walls.create(840,0,'c');c=walls.create(880,0,'c');c=walls.create(920,0,'c');
    c=walls.create(960,0,'c');c=walls.create(1000,0,'c');c=walls.create(1040,0,'c');c=walls.create(1080,0,'c');
    c=walls.create(1120,0,'c');c=walls.create(1160,0,'c');c=walls.create(1200,0,'c');c=walls.create(1240,0,'c');
    c=walls.create(1280,0,'c');c=walls.create(1320,0,'c');

    c=walls.create(0,720,'c');c=walls.create(40,720,'c');c=walls.create(80,720,'c');c=walls.create(120,720,'c');
    c=walls.create(160,720,'c');c=walls.create(200,720,'c');c=walls.create(240,720,'c');c=walls.create(280,720,'c');
    c=walls.create(320,720,'c');c=walls.create(360,720,'c');c=walls.create(400,720,'c');c=walls.create(440,720,'c');
    c=walls.create(480,720,'c');c=walls.create(520,720,'c');c=walls.create(560,720,'c');c=walls.create(600,720,'c');
    c=walls.create(640,720,'c');c=walls.create(680,720,'c');c=walls.create(720,720,'c');c=walls.create(760,720,'c');
    c=walls.create(800,720,'c');c=walls.create(840,720,'c');c=walls.create(880,720,'c');c=walls.create(920,720,'c');
    c=walls.create(960,720,'c');c=walls.create(1000,720,'c');c=walls.create(1040,720,'c');c=walls.create(1080,720,'c');
    c=walls.create(1120,720,'c');c=walls.create(1160,720,'c');c=walls.create(1200,720,'c');c=walls.create(1240,720,'c');
    c=walls.create(1280,720,'c');c=walls.create(1320,720,'c');

    c=walls.create(0,40,'c');c=walls.create(0,80,'c');c=walls.create(0,120,'c');c=walls.create(0,160,'c');
    c=walls.create(0,200,'c');c=walls.create(0,240,'c');c=walls.create(0,280,'c');c=walls.create(0,320,'c');
    c=walls.create(0,360,'c');c=walls.create(0,400,'c');c=walls.create(0,440,'c');c=walls.create(0,480,'c');
    c=walls.create(0,520,'c');c=walls.create(0,560,'c');c=walls.create(0,600,'c');c=walls.create(0,640,'c');
    c=walls.create(0,680,'c')

    c=walls.create(1320,40,'c');c=walls.create(1320,80,'c');c=walls.create(1320,120,'c');c=walls.create(1320,160,'c');
    c=walls.create(1320,200,'c');c=walls.create(1320,240,'c');c=walls.create(1320,280,'c');c=walls.create(1320,320,'c');
    c=walls.create(1320,360,'c');c=walls.create(1320,400,'c');c=walls.create(1320,440,'c');c=walls.create(1320,480,'c');
    c=walls.create(1320,520,'c');c=walls.create(1320,560,'c');c=walls.create(1320,600,'c');c=walls.create(1320,640,'c');
    c=walls.create(1320,680,'c')

    //4 corner boxes
    c=walls.create(160,40,'c');c=walls.create(160,80,'c');c=walls.create(160,120,'c');c=walls.create(160,160,'c');
    c=walls.create(40,160,'c');c=walls.create(80,160,'c');c=walls.create(120,160,'c');
    c=walls.create(160,680,'c');c=walls.create(160,640,'c');c=walls.create(160,600,'c');c=walls.create(160,560,'c');
    c=walls.create(40,560,'c');c=walls.create(80,560,'c');c=walls.create(120,560,'c');
    c=walls.create(1160,40,'c');c=walls.create(1160,80,'c');c=walls.create(1160,120,'c');c=walls.create(1160,160,'c');
    c=walls.create(1200,160,'c');c=walls.create(1240,160,'c');c=walls.create(1280,160,'c');
    c=walls.create(1160,680,'c');c=walls.create(1160,640,'c');c=walls.create(1160,600,'c');c=walls.create(1160,560,'c');
    c=walls.create(1200,560,'c');c=walls.create(1240,560,'c');c=walls.create(1280,560,'c');

    //
    c=walls.create(200,160,'c');c=walls.create(240,160,'c');c=walls.create(160,200,'c');c=walls.create(160,240,'c');
    c=walls.create(1080,160,'c');c=walls.create(1120,160,'c');c=walls.create(1160,240,'c');c=walls.create(1160,200,'c');
    c=walls.create(240,80,'c');c=walls.create(280,80,'c');c=walls.create(320,80,'c');c=walls.create(360,80,'c');
    c=walls.create(400,80,'c');c=walls.create(480,80,'c');c=walls.create(560,80,'c');c=walls.create(600,80,'c');
    c=walls.create(640,80,'c');c=walls.create(680,80,'c');c=walls.create(720,80,'c');c=walls.create(760,80,'c');
    c=walls.create(840,80,'c');c=walls.create(920,80,'c');c=walls.create(960,80,'c');c=walls.create(1000,80,'c');
    c=walls.create(1040,80,'c');c=walls.create(1080,80,'c');c=walls.create(320,160,'c');c=walls.create(400,160,'c');
    c=walls.create(480,160,'c');c=walls.create(520,160,'c');c=walls.create(560,160,'c');c=walls.create(640,160,'c');
    c=walls.create(680,160,'c');c=walls.create(760,160,'c');c=walls.create(800,160,'c');c=walls.create(840,160,'c');
    c=walls.create(920,160,'c');c=walls.create(1000,160,'c');

    c=walls.create(400,200,'c');c=walls.create(640,200,'c');c=walls.create(680,200,'c');c=walls.create(920,200,'c');
    c=walls.create(80,240,'c');c=walls.create(160,240,'c');c=walls.create(240,240,'c');c=walls.create(320,240,'c');
    c=walls.create(400,240,'c');c=walls.create(480,240,'c');c=walls.create(520,240,'c');c=walls.create(560,240,'c');
    c=walls.create(640,240,'c');c=walls.create(680,240,'c');c=walls.create(760,240,'c');c=walls.create(800,240,'c');
    c=walls.create(840,240,'c');c=walls.create(920,240,'c');c=walls.create(1000,240,'c');c=walls.create(1080,240,'c');
    c=walls.create(1240,240,'c');c=walls.create(80,280,'c');c=walls.create(240,280,'c');c=walls.create(480,280,'c');
    c=walls.create(840,280,'c');c=walls.create(1080,280,'c');c=walls.create(1240,280,'c');

    c=walls.create(80,320,'c');c=walls.create(160,320,'c');c=walls.create(320,320,'c');c=walls.create(400,320,'c');
    c=walls.create(440,320,'c');c=walls.create(480,320,'c');c=walls.create(560,320,'c');c=walls.create(600,320,'c');
    c=walls.create(640,320,'c');c=walls.create(680,320,'c');c=walls.create(720,320,'c');c=walls.create(760,320,'c');
    c=walls.create(840,320,'c');c=walls.create(880,320,'c');c=walls.create(920,320,'c');c=walls.create(1000,320,'c');
    c=walls.create(1160,320,'c');c=walls.create(1240,320,'c');

    c=walls.create(80,360,'c');c=walls.create(240,360,'c');c=walls.create(320,360,'c');c=walls.create(400,360,'c');
    //c=walls.create(560,360,'c');c=walls.create(600,360,'c');c=walls.create(640,360,'c');c=walls.create(680,360,'c');
    //c=walls.create(720,360,'c');c=walls.create(760,360,'c');
    c=walls.create(920,360,'c');c=walls.create(1000,360,'c');
    c=walls.create(1080,360,'c');c=walls.create(1240,360,'c');

    c=walls.create(80,400,'c');c=walls.create(160,400,'c');c=walls.create(200,400,'c');c=walls.create(240,400,'c');
    c=walls.create(320,400,'c');c=walls.create(400,400,'c');c=walls.create(440,400,'c');c=walls.create(480,400,'c');
    c=walls.create(560,400,'c');c=walls.create(600,400,'c');c=walls.create(640,400,'c');c=walls.create(680,400,'c');
    c=walls.create(720,400,'c');c=walls.create(760,400,'c');c=walls.create(840,400,'c');c=walls.create(880,400,'c');
    c=walls.create(920,400,'c');c=walls.create(1000,400,'c');c=walls.create(1080,400,'c');c=walls.create(1120,400,'c');
    c=walls.create(1160,400,'c');c=walls.create(1240,400,'c');

    c=walls.create(80,440,'c');c=walls.create(160,440,'c');c=walls.create(480,440,'c');c=walls.create(840,440,'c');
    c=walls.create(1160,440,'c');c=walls.create(1240,440,'c');

    c=walls.create(80,480,'c');c=walls.create(160,480,'c');c=walls.create(240,480,'c');c=walls.create(320,480,'c');
    c=walls.create(400,480,'c');c=walls.create(480,480,'c');c=walls.create(560,480,'c');c=walls.create(600,480,'c');
    c=walls.create(640,480,'c');c=walls.create(680,480,'c');c=walls.create(720,480,'c');c=walls.create(760,480,'c');
    c=walls.create(840,480,'c');c=walls.create(920,480,'c');c=walls.create(1000,480,'c');c=walls.create(1080,480,'c');
    c=walls.create(1160,480,'c');c=walls.create(1240,480,'c');

    c=walls.create(240,520,'c');c=walls.create(400,520,'c');c=walls.create(640,520,'c');c=walls.create(680,520,'c');
    c=walls.create(920,520,'c');c=walls.create(1080,520,'c');

    c=walls.create(240,560,'c');c=walls.create(320,560,'c');c=walls.create(400,560,'c');c=walls.create(480,560,'c');
    c=walls.create(560,560,'c');c=walls.create(640,560,'c');c=walls.create(680,560,'c');c=walls.create(760,560,'c');
    c=walls.create(840,560,'c');c=walls.create(920,560,'c');c=walls.create(1000,560,'c');c=walls.create(1080,560,'c');

    c=walls.create(400,600,'c');c=walls.create(560,600,'c');c=walls.create(760,600,'c');c=walls.create(920,600,'c');
    
    c=walls.create(240,640,'c');c=walls.create(280,640,'c');c=walls.create(320,640,'c');c=walls.create(400,640,'c');
    c=walls.create(480,640,'c');c=walls.create(560,640,'c');c=walls.create(640,640,'c');c=walls.create(680,640,'c');
    c=walls.create(760,640,'c');c=walls.create(840,640,'c');c=walls.create(920,640,'c');c=walls.create(1000,640,'c');
    c=walls.create(1040,640,'c');c=walls.create(1080,640,'c');


    //.........................................................MAZE ENDS.......................................................

    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);


    walls.children.forEach(function(c){
        c.enableBody=true;   
        game.physics.arcade.enable(c);
        c.body.immovable=true;
    });
  
    

 }

 function burn()
 {
    flamethrower_flames.animations.play('burn');
 }

function mburn()
 {
    mflamethrower_flames.animations.play('mburn');
 }

 function burst()
 {
    setTimeout(function(){ temp(); }, 250); // RUNNING INTO FLAMES
 }

function mburst()
 {
    setTimeout(function(){ mtemp(); }, 250); // RUNNING INTO FLAMES
 }

 function temp()
 {
    astronaut.kill();
    blastf();
 }

function mtemp()
 {
    astronaut.kill();
    mblastf();
 }

function blastf()
{
    blast = game.add.sprite(520,360,'blast');
    blast.scale.setTo(0.1,0.1);
    blast.animations.add('blastHim',[0,1,2,3,4,5,6,7,8],10,true);
    setTimeout(function(){ blast.animations.play('blastHim'); },0); //PAUSE BEFORE BLASTING ANIMATION STARTS. (KEEP 0)
    showGameOver();
    
}

function mblastf()
{
    blast = game.add.sprite(800,360,'blast');
    blast.scale.setTo(0.1,0.1);
    blast.animations.add('blastHim',[0,1,2,3,4,5,6,7,8],10,true);
    setTimeout(function(){ blast.animations.play('blastHim'); },0); //PAUSE BEFORE BLASTING ANIMATION STARTS. (KEEP 0)
    showGameOver();
    
}

 function update2()
 {
    game.physics.arcade.collide(astronaut,walls);
    game.physics.arcade.collide(astronaut,flamethrower);

    //  Reset the players velocity (movement)
    astronaut.body.velocity.x = 0;
    astronaut.body.velocity.y = 0;

    //KEEP CONSTANT SPEED 150 OF ASTRONAUT AND ALL BOTS
    
    /*
    i++;
    if (i/10===0) 
    {
       burn();
    }
    */

    burn();

    mburn();
    game.physics.arcade.overlap(astronaut, flamethrower_flames, burst, null, this);
    game.physics.arcade.overlap(astronaut, mflamethrower_flames, mburst, null, this);

    


    if (cursors.left.isDown)
    {
        //  Move to the left
        astronaut.body.velocity.x = -150;

        astronaut.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        astronaut.body.velocity.x = 150;

        astronaut.animations.play('right');
    }
    else if (cursors.down.isDown)
    {
        //  Move down
        astronaut.body.velocity.y = +150;

        astronaut.animations.play('down');
    }
    else if (cursors.up.isDown)
    {
        //  Move up
        astronaut.body.velocity.y = -150;

        astronaut.animations.play('up');
    }
    else
    {
        //  Stand still
        astronaut.animations.stop();

        astronaut.frame = 1;
    }
 }


