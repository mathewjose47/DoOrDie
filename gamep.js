var game = new Phaser.Game(1366,768, Phaser.AUTO );

var sb;
var lp;
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
var score_text;
var score=0;
var seconds;
var style;
var story_text;
var flag;
var flagv;
var flagh;
var flag1;
var bot5=0;
var bot6=0;

/*
var map [];
var column0[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var column1[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
var column2[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
var column3[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
var column4[0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0];
var column5[0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0];
var column6[0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0];
var column7[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
var column8[0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0];
var column9[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
var column10[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0];
var column11[0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0];
var column12[0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0];
var column13[0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0];
var column14[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0];
var column15[0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0];
var column16[0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0];

var column33[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var column32[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
var column31[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
var column30[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
var column29[0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0];
var column28[0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0];
var column27[0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0];
var column26[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
var column25[0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0];
var column24[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
var column23[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0];
var column22[0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0];
var column21[0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0];
var column20[0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0];
var column19[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0];
var column18[0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0];
var column17[0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0];

map.push(column0);
map.push(column1);
map.push(column2);
map.push(column3);
map.push(column4);
map.push(column5);
map.push(column6);
map.push(column7);
map.push(column8);
map.push(column9);
map.push(column10);
map.push(column11);
map.push(column12);
map.push(column13);
map.push(column14);
map.push(column15);
map.push(column16);
map.push(column17);
map.push(column18);
map.push(column19);
map.push(column20);
map.push(column21);
map.push(column22);
map.push(column23);
map.push(column24);
map.push(column25);
map.push(column26);
map.push(column27);
map.push(column28);
map.push(column29);
map.push(column30);
map.push(column31);
map.push(column32);
map.push(column33);


var j,k;

*/

var button_press;
var flames_sound;
var kill_sound;
var background_music;
var score_increase_sound;
var ghosts;
var pirates;

var pause_button;
var mute_button;
var pause_button_scale=0.12;
var mute_button_scale=0.15;


var l=0;
var m=0.000000;


var arrows;

var decide1=1;
var decide2=4;
var decide3=1;
var decide4=4;
var decide5=2;
var decide6=2;
var decide7=1;
var decide8=1;

var a4p11=0;
var a4p12=0;
var a2p1=1;
var a1p4=1;
var a3p21=0;
var a3p4=0;
var a3p5=0;
var a5p4=1;
var a6p1=1;
var a2p4=1;

//var a0;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;


var x1;
var y1;
var x2;
var y2;
var x3;
var y3;
var x4;
var y4;
var x0;
var y0;

var x;
var y;

var quitButton;
var fullButton;
var fullButton_scale = 0.3;
var quitButton_scale = 0.3;

var i;

//Game story (story button)
var gameState0 = function()
{

};

//home page state (START STATE) this state will have 4 buttons, story,instructions,play,leaderboard
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
    update : update2,
    

    createTimer: function(){
 
    var me = this;
    
    me.timeLabel = me.game.add.text(100, 640, "00:00", {font: "100px Arial", fill: "#fff"}); 
    me.timeLabel.anchor.setTo(0.5, 0);
    me.timeLabel.align = 'center';
    me.timeLabel.scale.setTo(0.4,0.4);

 
    },
    updateTimer: function(){
 
    var me = this;
 
    var currentTime = new Date();
    var timeDifference = me.startTime.getTime() - currentTime.getTime();
 
    //Time elapsed in seconds
    me.timeElapsed = Math.abs(timeDifference / 1000);
 
    //Time remaining in seconds
    //var timeRemaining = me.totalTime - me.timeElapsed; 
    var timeRemaining = me.timeElapsed;
 
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(timeRemaining / 60);
    seconds = Math.floor(timeRemaining) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    var result = (minutes < 10) ? "0" + minutes : minutes; 
 
    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    me.timeLabel.text = result;
    
    setTimeout(function(){ updateScore(); }, 0);




    }
};

function updateScore()
{
    
    if (seconds==15||seconds==45) 
    {
        score += 1;
        score_text.text = score;
    }
}

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
game.state.start('gameState1'); // later change it to 1



function preload0()
{
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.image('sb', 'images/background/w33.jpg');
    game.load.audio('button_press','audio/blop.mp3');
    game.load.audio('ghosts','audio/Mission-Impossible.mp3');

    game.load.image('mute_button', 'images/background/mute_button.png');
    
};

function create0()
{
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    button_press=game.add.audio('button_press');
    ghosts=game.add.audio('ghosts');
    ghosts.loop=true;
    ghosts.play();
    
    

    sb = game.add.sprite(0, 0, 'sb');
    mute_button = game.add.button(105, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);
    if (!game.sound.mute) 
    {
       mute_button.tint = 16777215;
    } else 
    {
       mute_button.tint = 16700000;
    }

    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);

    story_text = game.add.text(game.world.width/2,120,'STORY',{font: "Algerian" ,fontSize: '45px', fill:'#FFF'});
    story_text.anchor.setTo(0.5,0.5);

    style = { font: '30pt Gabriola', fill: 'white', align: 'justified', wordWrap: true, wordWrapWidth: 1135 };

    game.add.text(120, 200, "Year 2245, Human intergalactic missions are on a new high, explorers of the day and age, daring astronauts (Historical term for explorers) storm nook and corners of the cluster, but not all missions are adventurous and enticing, some… are horrifyingly deadly.", style);
    game.add.text(120, 375, "One such unfortunate explorer is caught in a labyrinth of razor-sharp debris plagued with unwelcoming creatures whose natural instinct is to kill anything incognizant. His only hope is to run for his life till the mathematics of certainty proves to be a life saver.", style);
    game.add.text(120, 550, "An inferno in Heaven with the devil on back!!! My lads!!! Let the the games begin!!!", style);
  
};

function update0()
{
   
};

function preload1()
{
    game.load.spritesheet('astronaut', 'images/character/astronaut.png',32,32);
    game.load.image('lp', 'images/landing_page.jpg');
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.audio('button_press','audio/blop.mp3');
    game.load.audio('ghosts','audio/Mission-Impossible.mp3');

    game.load.image('mute_button', 'images/background/mute_button.png');


};

function create1()
{
    lp = game.add.sprite(0, 0, 'lp');
    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    mute_button = game.add.button(50, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);
    if (!game.sound.mute) 
    {
       mute_button.tint = 16777215;
    } else 
    {
       mute_button.tint = 16700000;
    }

    button_press=game.add.audio('button_press');
    ghosts=game.add.audio('ghosts');
    ghosts.loop=true;
    ghosts.play();

    astronaut=game.add.sprite(630,550,'astronaut');
    astronaut.scale.setTo(2,2);
    game.physics.arcade.enable(astronaut);
    astronaut.animations.add('spin', [0,1,2,0,1,2,0,1,2,3,4,5,3,4,5,3,4,5,6,7,8,6,7,8,6,7,8,9,10,11,9,10,11,9,10,11], 7, true);
};

function update1()
{
    astronaut.animations.play('spin');
    x = game.input.mousePointer.x;
    y = game.input.mousePointer.y;
    //console.log(x,y);
    if (game.input.activePointer.isDown) 
    {
        if (x>970&&x<1260&&y>575&&y<630) 
        {
            game.sound.stopAll();
            button_press.play();
            game.state.start('gameState2'); //play button
        }
        else if (x>970&&x<1260&&y>435&&y<490) 
        {
            //game.sound.stopAll();
            button_press.play();
            game.state.start('gameState0');//story
        }
         else if (x>970&&x<1260&&y>505&&y<560) 
        {
            //game.sound.stopAll();
            button_press.play();
           game.state.start('gameState4');//instructions           
        }
         else if (x>970&&x<1260&&y>650&&y<700) 
        {
            game.sound.stopAll();
            button_press.play();
            game.state.start('gameState5');//leaderboard
        }
    } 
};



function preload3()
{
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.audio('button_press','audio/blop.mp3');
    game.load.image('mute_button', 'images/background/mute_button.png');
};

function create3()
{
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    button_press=game.add.audio('button_press');

    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);

    mute_button = game.add.button(105, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);

    
};

function update3()
{

};

function preload4()
{
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.image('sb', 'images/background/w33.jpg');
    game.load.image('arrows', 'images/background/arrows.png');
    game.load.spritesheet('astronaut', 'images/character/astronaut.png',32,32);
    game.load.image('flamethrower', 'images/flame/f2.png');
    game.load.spritesheet('flamethrower_flames', 'images/flame/Flames/flamethrower_/flamethrower_flames.png',512,512);
    game.load.image('mflamethrower', 'images/flame/mf2.png');
    game.load.spritesheet('mflamethrower_flames', 'images/flame/Flames/flamethrower_/mflamethrower_flames.png',512,512);
    game.load.spritesheet('a1', 'images/aliens/spider.png',35,35);
    game.load.audio('button_press','audio/blop.mp3');
    game.load.audio('ghosts','audio/Mission-Impossible.mp3');
    game.load.image('mute_button', 'images/background/mute_button.png');

};

function create4()
{
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    sb = game.add.sprite(0, 0, 'sb');

    button_press=game.add.audio('button_press');
    ghosts=game.add.audio('ghosts');
    ghosts.loop=true;
    ghosts.play();

    mute_button = game.add.button(105, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);
    if (!game.sound.mute) 
    {
       mute_button.tint = 16777215;
    } else 
    {
       mute_button.tint = 16700000;
    }

    story_text = game.add.text(game.world.width/2,120,'INSTRUCTIONS',{font: "Algerian" ,fontSize: '45px', fill:'#FFF'});
    story_text.anchor.setTo(0.5,0.5);

    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);

    style = { font: '18pt Hobo Std', fill: 'white', align: 'justified', wordWrap: true, wordWrapWidth: 1135 };

    // setTimeout(function()
    // { 
        arrows=game.add.sprite(175, 175, 'arrows');
        arrows.scale.setTo(0.55,0.55);
        game.add.text(415, 240, "Use arrow keys to move the astronaut around the maze", style);
        astronaut=game.add.sprite(1090, 200, 'astronaut');
        astronaut.scale.setTo(2,2);
        game.physics.arcade.enable(astronaut);
        astronaut.animations.add('spin', [0,1,2,0,1,2,0,1,2,3,4,5,3,4,5,3,4,5,6,7,8,6,7,8,6,7,8,9,10,11,9,10,11,9,10,11], 7, true);
        astronaut.animations.play('spin');
    // }, 1000);

    // setTimeout(function()
    // { 
        game.add.text(590, 390, "Avoid the aliens!! ", style);
        a1=game.add.sprite(335,375,'a1');
        a1.scale.setTo(2,2);
        game.physics.arcade.enable(a1);
        a2=game.add.sprite(940,375,'a1');
        a2.scale.setTo(2,2);
        a1.animations.add('spin',[0,1,2,3,4,5,7,8,9,10,11,12,14,15,16,17,18,19,21,22,23,24,25,26],7,true);
        a2.animations.add('spin',[0,1,2,3,4,5,21,22,23,24,25,26,14,15,16,17,18,19,7,8,9,10,11,12],7,true);
        a1.animations.play('spin');
        a2.animations.play('spin');
    // }, 4000);

    // setTimeout(function()
    // { 
        game.add.text(455, 555, "And stay away from their Flamethrowers ", style);
        flamethrower = game.add.sprite(150,545,'flamethrower');
        flamethrower.scale.setTo(0.5,0.5);
        flamethrower.enableBody=true;
        game.physics.arcade.enable(flamethrower);
        mflamethrower = game.add.sprite(1050,545,'mflamethrower');
        mflamethrower.scale.setTo(0.5,0.5);
        mflamethrower.enableBody=true;
        game.physics.arcade.enable(mflamethrower);
        flamethrower_flames = game.add.sprite(265,465,'flamethrower_flames');
        flamethrower_flames.scale.setTo(0.4,0.4);
        flamethrower_flames.enableBody=true;
        game.physics.arcade.enable(flamethrower_flames);
        flamethrower_flames.animations.add('burn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 10, true);
        mflamethrower_flames = game.add.sprite(880,465,'mflamethrower_flames');
        mflamethrower_flames.scale.setTo(0.4,0.4);
        mflamethrower_flames.enableBody=true;
        game.physics.arcade.enable(mflamethrower_flames);
        mflamethrower_flames.animations.add('mburn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 10, true);
        flamethrower_flames.animations.play('burn');
        mflamethrower_flames.animations.play('mburn');

    // }, 7000);


};

function update4()
{
    
};

function preload5()
{
    game.load.image('sb', 'images/background/w33.jpg');
    game.load.audio('button_press','audio/blop.mp3');
    game.load.image('mute_button', 'images/background/mute_button.png');
};

function create5()
{
    sb = game.add.sprite(0, 0, 'sb');
    game_end_text = game.add.text(game.world.width/2,game.world.height/2,'Leaderboard',{fontSize: '32px', fill:'#FFF'});
    game_end_text.anchor.setTo(0.5,0.5);

    button_press=game.add.audio('button_press');

    mute_button = game.add.button(105, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);
    if (!game.sound.mute) 
    {
       mute_button.tint = 16777215;
    } else 
    {
       mute_button.tint = 16700000;
    }

score_text = game.add.text(game.world.width/2,game.world.height/2+75,score,{fontSize: '32px', fill:'#000'});
    score_text.anchor.setTo(0.5,0.5);

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    fullButton = game.add.button(1220, 90, 'fullButton', goFull, this, 2, 1, 0);
    quitButton = game.add.button(1270, 90, 'quitButton', quit, this, 2, 1, 0);
    quitButton.scale.setTo(quitButton_scale, quitButton_scale);
    fullButton.scale.setTo(fullButton_scale, fullButton_scale);

        $.ajax({
        type: 'POST',
        url: '/input_score',
        data: { score:score },
        dataType: 'json',
        success: function(response){
            if(response.msg === "success"){
                console.log('success');
            }
            else{
                $('#error-msg').html('');
                $('#error-msg').append('<span>Server error!</span>');
            }
        }
        });
   
    

    
    
};

function showGameOver()
{
    kill_sound.play();
    astronaut.kill();
    setTimeout(function(){ 
        game.state.start('gameState5');
    }, 2700); // kill_sound time
    

    game_end_text = game.add.text(game.world.width/2,game.world.height/2,'Game Over',{fontSize: '32px', fill:'#FFF'});
    game_end_text.anchor.setTo(0.5,0.5); 
}

function update5()
{

};
function quit(){

    game.sound.stopAll();
    button_press.play();
    score=0;
    game.state.start('gameState1');
}

function goFull() {
    button_press.play();
    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
}




 function preload2() 
 {
    game.load.image('w1', 'images/background/w33.jpg'); // space image (w33)
    game.load.spritesheet('quitButton', 'images/background/quitButton.png', 125,100);
    game.load.spritesheet('fullButton', 'images/background/fullButton.png', 125, 100);
    game.load.image('c', 'images/background/sc1.png'); // crystals
    game.load.spritesheet('astronaut', 'images/character/astronaut.png',32,32);
    game.load.image('flamethrower', 'images/flame/f2.png');
    game.load.spritesheet('flamethrower_flames', 'images/flame/Flames/flamethrower_/flamethrower_flames.png',512,512);
    game.load.image('mflamethrower', 'images/flame/mf2.png');
    game.load.spritesheet('mflamethrower_flames', 'images/flame/Flames/flamethrower_/mflamethrower_flames.png',512,512);
    game.load.spritesheet('blast', 'images/flame/Flames/fireball_hit_/flame_hit.png',512,512);

    game.load.spritesheet('a1', 'images/aliens/spider.png',35,35);

    game.load.image('pause_button', 'images/background/pause_button.png');
    game.load.image('mute_button', 'images/background/mute_button.png');

    game.load.audio('button_press','audio/blop.mp3');
    game.load.audio('kill_sound','audio/torture-sound.mp3');
    game.load.audio('flames_sound','audio/flames1.mp3');
    game.load.audio('score_increase_sound','audio/score_increase.mp3');
    game.load.audio('pirates','audio/pirates.mp3');


 }

 function create2(){



    button_press=game.add.audio('button_press');
    kill_sound=game.add.audio('kill_sound');
    flames_sound=game.add.audio('flames_sound');
    score_increase_sound=game.add.audio('score_increase_sound');
    pirates=game.add.audio('pirates');
    pirates.loop=true;
    pirates.play();
        
    // for(j=0;j<=33;j++)
    //     for(k=0;k<=33;k++)
    //         console.log(map[column1[i]]);

    game.time.desiredFps = 60;
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    w1 = game.add.sprite(0, 0, 'w1');

    walls = game.add.group();
    game.physics.arcade.enable(walls);
    walls.enableBody=true;

    astronaut=game.add.sprite(520,520,'astronaut');
    astronaut.scale.setTo(0.9,0.9);
    game.physics.arcade.enable(astronaut);
    astronaut.enableBody=true;

    flamethrower = game.add.sprite(420,360,'flamethrower');
    flamethrower.scale.setTo(0.3,0.3);
    flamethrower.enableBody=true;
    game.physics.arcade.enable(flamethrower);
    flamethrower.body.immovable=true;

    mflamethrower = game.add.sprite(840,360,'mflamethrower');
    mflamethrower.scale.setTo(0.3,0.3);
    mflamethrower.enableBody=true;
    game.physics.arcade.enable(mflamethrower);
    mflamethrower.body.immovable=true;


    astronaut.animations.add('left', [3,4,5], 10, true);
    astronaut.animations.add('right', [6,7,8], 10, true);
    astronaut.animations.add('up', [9,10,11], 10, true);
    astronaut.animations.add('down', [0,1,2], 10, true);

    flamethrower_flames = game.add.sprite(490,325,'flamethrower_flames');
    flamethrower_flames.scale.setTo(0.2,0.2);
    flamethrower_flames.enableBody=true;
    game.physics.arcade.enable(flamethrower_flames);
    flamethrower_flames.animations.add('burn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 10, false);

    mflamethrower_flames = game.add.sprite(760,325,'mflamethrower_flames');
    mflamethrower_flames.scale.setTo(0.2,0.2);
    mflamethrower_flames.enableBody=true;
    game.physics.arcade.enable(mflamethrower_flames);
    mflamethrower_flames.animations.add('mburn', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 10, false);
    

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

    // a0=game.add.sprite(280,200,'a1');
    // a0.scale.setTo(0.75,0.75);
    // game.physics.arcade.enable(a0);
    // a0.enableBody=true;

    a1=game.add.sprite(280,200,'a1');
    a1.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a1);
    a1.enableBody=true;

    a2=game.add.sprite(1040,200,'a1');
    a2.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a2);
    a2.enableBody=true;

    a3=game.add.sprite(280,600,'a1');
    a3.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a3);
    a3.enableBody=true;

    a4=game.add.sprite(1040,600,'a1');
    a4.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a4);
    a4.enableBody=true;

    a5=game.add.sprite(280,200,'a1');
    a5.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a5);
    a5.enableBody=true;

    a6=game.add.sprite(1040,200,'a1');
    a6.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(a6);
    a6.enableBody=true;

    // a7=game.add.sprite(280,600,'a1');
    // a7.scale.setTo(0.75,0.75);
    // game.physics.arcade.enable(a7);
    // a7.enableBody=true;

    // a8=game.add.sprite(1040,600,'a1');
    // a8.scale.setTo(0.75,0.75);
    // game.physics.arcade.enable(a8);
    // a8.enableBody=true;

    // a0.animations.add('a0left', [7,8,9,10,11,12], 10, true);
    // a0.animations.add('a0right', [21,22,23,24,25,26], 10, true);
    // a0.animations.add('a0up', [14,15,16,17,18,19], 10, true);
    // a0.animations.add('a0down', [0,1,2,3,4,5], 10, true);

    a1.animations.add('a1left', [7,8,9,10,11,12], 10, true);
    a1.animations.add('a1right', [21,22,23,24,25,26], 10, true);
    a1.animations.add('a1up', [14,15,16,17,18,19], 10, true);
    a1.animations.add('a1down', [0,1,2,3,4,5], 10, true);

    a2.animations.add('a2left', [7,8,9,10,11,12], 10, true);
    a2.animations.add('a2right', [21,22,23,24,25,26], 10, true);
    a2.animations.add('a2up', [14,15,16,17,18,19], 10, true);
    a2.animations.add('a2down', [0,1,2,3,4,5], 10, true);

    a3.animations.add('a3left', [7,8,9,10,11,12], 10, true);
    a3.animations.add('a3right', [21,22,23,24,25,26], 10, true);
    a3.animations.add('a3up', [14,15,16,17,18,19], 10, true);
    a3.animations.add('a3down', [0,1,2,3,4,5], 10, true);

    a4.animations.add('a4left', [7,8,9,10,11,12], 10, true);
    a4.animations.add('a4right', [21,22,23,24,25,26], 10, true);
    a4.animations.add('a4up', [14,15,16,17,18,19], 10, true);
    a4.animations.add('a4down', [0,1,2,3,4,5], 10, true);

    a5.animations.add('a5left', [7,8,9,10,11,12], 10, true);
    a5.animations.add('a5right', [21,22,23,24,25,26], 10, true);
    a5.animations.add('a5up', [14,15,16,17,18,19], 10, true);
    a5.animations.add('a5down', [0,1,2,3,4,5], 10, true);

    a6.animations.add('a6left', [7,8,9,10,11,12], 10, true);
    a6.animations.add('a6right', [21,22,23,24,25,26], 10, true);
    a6.animations.add('a6up', [14,15,16,17,18,19], 10, true);
    a6.animations.add('a6down', [0,1,2,3,4,5], 10, true);

    // a7.animations.add('a4left', [7,8,9,10,11,12], 10, true);
    // a7.animations.add('a4right', [21,22,23,24,25,26], 10, true);
    // a7.animations.add('a4up', [14,15,16,17,18,19], 10, true);
    // a7.animations.add('a4down', [0,1,2,3,4,5], 10, true);

    // a8.animations.add('a4left', [7,8,9,10,11,12], 10, true);
    // a8.animations.add('a4right', [21,22,23,24,25,26], 10, true);
    // a8.animations.add('a4up', [14,15,16,17,18,19], 10, true);
    // a8.animations.add('a4down', [0,1,2,3,4,5], 10, true);


    // UP COUNTER
    var me = this;
 
    me.startTime = new Date();
    me.totalTime = 120;
    me.timeElapsed = 0;
 
    me.createTimer();
 
    me.gameTimer = game.time.events.loop(100, function()
    {
        me.updateTimer();
    });


    score_text = game.add.text(1260,660,'0',{fontSize: '32px', fill:'#0F0'});
    score_text.anchor.setTo(0.5,0.5);






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
    c=walls.create(920,360,'c');c=walls.create(1000,360,'c');c=walls.create(1080,360,'c');c=walls.create(1240,360,'c');

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

    
    
    mute_button = game.add.button(105, 90, 'mute_button', toggleMute, this, 2, 1, 0);
    mute_button.scale.setTo(mute_button_scale, mute_button_scale);
    if (!game.sound.mute) 
    {
       mute_button.tint = 16777215;
    } else 
    {
       mute_button.tint = 16700000;
    }


    pause_button = game.add.button(60, 90, 'pause_button', pauseGame, this, 2, 1, 0);
    pause_button.scale.setTo(pause_button_scale, pause_button_scale);

    walls.children.forEach(function(c){
        c.enableBody=true;   
        game.physics.arcade.enable(c);
        c.body.immovable=true;
    });
 }


function pauseGame()
{
    button_press.play();
    if (!game.paused) 
    {
       game.paused = true;
       pause_button.tint = 16700000;
    } 
    else 
    {
       game.paused = false;
       pause_button.tint = 16777215;
    }
    game.input.onDown.add(function() 
    {
        if (game.paused) game.paused = false;
        pause_button.tint = 16777215;
    }, this);
}

function toggleMute()
{
    button_press.play();
    if (!game.sound.mute) 
    {
       game.sound.mute = true;
       mute_button.tint = 16700000;
    } else 
    {
       game.sound.mute = false;
       mute_button.tint = 16777215;
    }
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
    setTimeout(function(){ blastf(); }, 250); // RUNNING INTO FLAMES 
 }

function mburst()
 {
    setTimeout(function(){ mblastf();}, 250); // RUNNING INTO FLAMES
 }



function blastf()
{
    blast = game.add.sprite(520,360,'blast');
    blast.scale.setTo(0.1,0.1);
    blast.animations.add('blastHim',[0,1,2,3,4,5,6,7,8],10,false);
    blast.animations.play('blastHim');
    setTimeout(function(){ blast.visible=false; },750);
    showGameOver();
}

function mblastf()
{
    blast = game.add.sprite(800,360,'blast');
    blast.scale.setTo(0.1,0.1);
    blast.animations.add('blastHim',[0,1,2,3,4,5,6,7,8],10,false);
    blast.animations.play('blastHim');
    setTimeout(function(){ blast.visible=false; },750);
    showGameOver();
    
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fix()
{
    if ((flagv==0||flagv==1)&&(astronaut.x%40)>20&&flagh==1&&flag1==1) 
    {
        m=(astronaut.x)/40;
        l=parseInt(m);
        astronaut.x=astronaut.x+(1-(m-l))*40;
        flag1=0;
    }
    else if ((flagv==0||flagv==1)&&(astronaut.x%40)<25&&(astronaut.x%40)>10&&flagh==0&&flag1==1) 
    {
        m=(astronaut.x)/40;
        l=parseInt(m);
        astronaut.x=astronaut.x-(m-l)*40+10;
        flag1=0;
    }
    if ((flagh==0||flagh==1)&&(astronaut.y%40)>20&&(astronaut.y%40)>10&&flagv==1&&flag1==1) 
    {
        m=(astronaut.y)/40;
        l=parseInt(m);
        astronaut.y=astronaut.y+(1-(m-l))*40;
        flag1=0;
    }
    else if ((flagh==0||flagh==1)&&(astronaut.y%40)<25&&(astronaut.y%40)>10&&flagv==0&&flag1==1) 
    {
        m=(astronaut.y)/40;
        l=parseInt(m);
        astronaut.y=astronaut.y-(m-l)*40+10;
        flag1=0;
    }
}


 function update2()
 {


    game.physics.arcade.overlap(astronaut, walls, fix, null, this);

    game.physics.arcade.collide(astronaut,walls);
    game.physics.arcade.collide(astronaut,flamethrower);
    game.physics.arcade.collide(astronaut,mflamethrower);

    game.physics.arcade.collide(a1,walls);
    game.physics.arcade.collide(a2,walls);
    game.physics.arcade.collide(a3,walls);
    game.physics.arcade.collide(a4,walls);
    game.physics.arcade.collide(a5,walls);
    game.physics.arcade.collide(a6,walls);

    game.physics.arcade.overlap(astronaut, a1, showGameOver, null, this);
    game.physics.arcade.overlap(astronaut, a2, showGameOver, null, this);
    game.physics.arcade.overlap(astronaut, a3, showGameOver, null, this);
    game.physics.arcade.overlap(astronaut, a4, showGameOver, null, this);
    if (bot5==1) 
    {
        game.physics.arcade.overlap(astronaut, a5, showGameOver, null, this);
        a5.visible=true;
    }
    else
    {
        a5.visible=false;
    }
    if (bot6==1) 
    {
        game.physics.arcade.overlap(astronaut, a6, showGameOver, null, this);
        a6.visible=true;
    }
    else
    {
        a6.visible=false;
    }
    

    if (seconds==14||seconds==44) 
    {
        score_increase_sound.play();
    }
    if (seconds==8||seconds==18||seconds==28||seconds==38||seconds==48||seconds==58) 
    {
        flames_sound.play();
    }
    if (seconds==9||seconds==10||seconds==19||seconds==20||seconds==29||seconds==30||seconds==39||seconds==40||seconds==49||seconds==50||seconds==59||seconds==00) 
    {
        burn(); 
        mburn();
        game.physics.arcade.overlap(astronaut, flamethrower_flames, burst, null, this);
        game.physics.arcade.overlap(astronaut, mflamethrower_flames, mburst, null, this);
    }


//--------------------------------------------------------------------------------------------------------------------------
    
    if (score>=10) 
    {
        if (!(astronaut.x>=120&&astronaut.x<=480&&astronaut.y>=80&&astronaut.y<=440)) 
        {
            bot5=1;
        }
    }

    if (score>=45) 
    {
        if (!(astronaut.x>=840&&astronaut.x<=1160&&astronaut.y>=40&&astronaut.y<=400)) 
        {
            bot6=1;
        }
    }

//--------------------------------------------------------------------------------------------------------------------------


    if (astronaut.x==x&&astronaut.y==y) 
    {
        flag=5;
    }
    astronaut.body.velocity.x = 0;
    astronaut.body.velocity.y = 0;
    x=astronaut.x;
    y=astronaut.y;
    if (cursors.left.isDown)
    {
        astronaut.body.velocity.x = -150;
        astronaut.animations.play('left');
        flagh=0;
        flag=1;
        flag1=1;
    }
    else if (cursors.right.isDown)
    {
        astronaut.body.velocity.x = 150;
        astronaut.animations.play('right');
        flag=2;
        flagh=1;
        flag1=1;
    }
    else if (cursors.down.isDown)
    {
        astronaut.body.velocity.y = +150;
        astronaut.animations.play('down');
        flag=3;
        flagv=1;
        flag1=1;
    }
    else if (cursors.up.isDown)
    {
        astronaut.body.velocity.y = -150;
        astronaut.animations.play('up');
        flag=4;
        flagv=0;
        flag1=1;
    }
    else if (flag==1) 
    {
        astronaut.body.velocity.x = -150;
        astronaut.animations.play('left');
        flagh=0;
        flag1=1;
    }
    else if (flag==2) 
    {
        astronaut.body.velocity.x = 150;
        astronaut.animations.play('right');
        flagh=1;
        flag1=1;
    }
    else if (flag==3) 
    {
        astronaut.body.velocity.y = +150;
        astronaut.animations.play('down');
        flagv=1;
        flag1=1;
    }
    else if (flag==4) 
    {
        astronaut.body.velocity.y = -150;
        astronaut.animations.play('up');
        flagv=0;
        flag1=1;
    }
    else if (flag==5)
    {
        //  Stand still
        astronaut.animations.stop();
        astronaut.frame = 1;
    }




    // ALIENS MOVEMENT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A0          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// if (astronaut.x>a0.x&&(map[parseInt(a0.x/40+1)][parseInt(a0.y/40)]==1)) 
// {
//     a0.body.velocity.x = 120;
//     a0.animations.play('a0right');
// }
// else if (astronaut.x<a0.x&&(map[parseInt(a0.x/40-1)][parseInt(a0.y/40)]==1)) 
// {
//     a0.body.velocity.x = -120;
//     a0.animations.play('a0left');
// }
// else if (astronaut.y<a0.y&&(map[parseInt(a0.x/40)][parseInt(a0.y/40)-1]==1)) 
// {
//     a0.body.velocity.y = -120;
//     a0.animations.play('a0up');
// }
// else if (astronaut.y>a0.y&&(map[parseInt(a0.x/40)][parseInt(a0.y/40)+1]==1)) 
// {
//     a0.body.velocity.y = 120;
//     a0.animations.play('a0down');
// }
// // else if (astronaut.x==a0.x) 
// // {
// //     if (astronaut.y>a0.y&&(map[parseInt(a0.x/40)][parseInt(a0.y/40)+1]==1)) 
// //     {
// //         a0.body.velocity.y = 120;
// //         a0.animations.play('a0down');
// //     }
// //     else if (astronaut.y>a0.y&&(map[parseInt(a0.x/40)-1][parseInt(a0.y/40)]==1)) 
// //     {
// //         a0.body.velocity.y = -120;
// //         a0.animations.play('a0up');
// //     }
// // }
// // else if (astronaut.y==a0.y) 
// // {
// //     if (astronaut.x>a0.x&&(map[parseInt(a0.x/40)+1][parseInt(a0.y/40)]==1)) 
// //     {
// //         a0.body.velocity.x = 120;
// //         a0.animations.play('a0right');
// //     }
// //     else if (astronaut.y>a0.y&&(map[parseInt(a0.x/40)][parseInt(a0.y/40)+1]==1)) 
// //     {
// //         a0.body.velocity.x = -120;
// //         a0.animations.play('a0left');
// //     }
// // }


































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A1          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log('x1,y1 : '+a1.x+' , '+a1.y);
a1.body.velocity.x=0;
a1.body.velocity.y=0;
if (a1.x>=280&&a1.x<=320&&a1.y>=198&&a1.y<200) 
    {
        //decide1=game.rnd.integerInRange(1,5);
        console.log(decide1);
    }

//////////////////////////////////////////////////        A1 Path1        ///////////////////////////////////////////////////////

    if (decide1==1) 
    {
        if (a1.x>=280&&a1.x<=320&&a1.y>=200&&a1.y<=280) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=280&&a1.x<=360&&a1.y>=280&&a1.y<=320) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=360&&a1.x<=400&&a1.y>=280&&a1.y<=680) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=360&&a1.x<=600&&a1.y>=680&&a1.y<=720) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=600&&a1.x<=640&&a1.y>520&&a1.y<=720) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=525&&a1.x<=640&&a1.y>=520&&a1.y<=560) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=520&&a1.x<=560&&a1.y>=445&&a1.y<=520) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=520&&a1.x<=800&&a1.y>=440&&a1.y<=480) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=800&&a1.x<=840&&a1.y>=285&&a1.y<=480) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=605&&a1.x<=840&&a1.y>=280&&a1.y<=320) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=600&&a1.x<=640&&a1.y>=125&&a1.y<=320) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=600&&a1.x<=800&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=800&&a1.x<=840&&a1.y>=45&&a1.y<=160) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=445&&a1.x<=840&&a1.y>=40&&a1.y<=80) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=440&&a1.x<=480&&a1.y>=40&&a1.y<=120) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=285&&a1.x<=480&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=280&&a1.x<=320&&a1.y>=120&&a1.y<=200) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else
        {
            a1.body.velocity.y=0;
            a1.body.velocity.x=0;
            a1.animations.stop();
            a1.frame=0;
        }
    }

//////////////////////////////////////////////////         A1 Path2        ///////////////////////////////////////////////////////

    else if (decide1==2) 
    {
        if (a1.x>=210&&a1.x<=320&&a1.y>=200&&a1.y<=240) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=200&&a1.x<=240&&a1.y>=200&&a1.y<=360) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=130&&a1.x<=240&&a1.y>=350&&a1.y<=400) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=120&&a1.x<=160&&a1.y>=215&&a1.y<=399) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=55&&a1.x<=160&&a1.y>=200&&a1.y<=240) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=40&&a1.x<=80&&a1.y>=200&&a1.y<=520) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=40&&a1.x<=200&&a1.y>=520&&a1.y<=560) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=200&&a1.x<=240&&a1.y>=520&&a1.y<=680) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=200&&a1.x<=365&&a1.y>=680&&a1.y<=720) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=360&&a1.x<=400&&a1.y>=135&&a1.y<=720) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=290&&a1.x<=400&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=280&&a1.x<=320&&a1.y>=120&&a1.y<=200) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        
        else
        {
            a1.body.velocity.y=0;
            a1.body.velocity.x=0;
            a1.animations.stop();
            a1.frame=0;
        }


    }

//////////////////////////////////////////////////         A1 Path3        ///////////////////////////////////////////////////////
    
      else if (decide1==3) 
      {
        if (a1.x>=280&&a1.x<=320&&a1.y>=200&&a1.y<=440) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=280&&a1.x<=440&&a1.y>=440&&a1.y<=480) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=440&&a1.x<=480&&a1.y>=440&&a1.y<=680) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=440&&a1.x<=1120&&a1.y>=680&&a1.y<=720) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=1120&&a1.x<=1160&&a1.y>=455&&a1.y<=720) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=1055&&a1.x<=1160&&a1.y>=440&&a1.y<=480) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=1040&&a1.x<=1080&&a1.y>=135&&a1.y<=480) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=295&&a1.x<=1080&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=280&&a1.x<=320&&a1.y>=120&&a1.y<=200) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        
        
        else
        {
            a1.body.velocity.y=0;
            a1.body.velocity.x=0;
            a1.animations.stop();
            a1.frame=0;
        }
    }


//////////////////////////////////////////////////         A1 Path4        ///////////////////////////////////////////////////////


 else if (decide1==4) 
    {

        if (a1.x>=280&&a1.x<=320&&a1.y>=135&&a1.y<=240&&a1p4==1) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=280&&a1.x<=1120&&a1.y>=120&&a1.y<=160&&a1p4==1) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=1120&&a1.x<=1160&&a1.y>=55&&a1.y<=160) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
            a1p4=0;
        }
        else if (a1.x>=215&&a1.x<=1160&&a1.y>=40&&a1.y<=80) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=200&&a1.x<=240&&a1.y>=40&&a1.y<=120) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=200&&a1.x<=285&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=280&&a1.x<=320&&a1.y>=120&&a1.y<=200&&a1p4==0) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>200) 
        {
            a1p4=1;
        }
        else
        {
            a1.body.velocity.y=0;
            a1.body.velocity.x=0;
            a1.animations.stop();
            a1.frame=0;

        }
        

    }


//////////////////////////////////////////////////         A1 Path5        ///////////////////////////////////////////////////////

    else if (decide1==5) 
    {
        if (a1.x>=280&&a1.x<=320&&a1.y>=200&&a1.y<=600) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=215&&a1.x<=320&&a1.y>=600&&a1.y<=640) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=200&&a1.x<=240&&a1.y>=600&&a1.y<=680) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else if (a1.x>=200&&a1.x<=1120&&a1.y>=680&&a1.y<=720) 
        {
            a1.body.velocity.x = 120;
            a1.animations.play('a1right');
        }
        else if (a1.x>=1120&&a1.x<=1160&&a1.y>440&&a1.y<=720) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=1055&&a1.x<=1160&&a1.y>=440&&a1.y<=480) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        else if (a1.x>=1040&&a1.x<=1080&&a1.y>=135&&a1.y<=480) 
        {
            a1.body.velocity.y = -120;
            a1.animations.play('a1up');
        }
        else if (a1.x>=295&&a1.x<=1080&&a1.y>=120&&a1.y<=160) 
        {
            a1.body.velocity.x = -120;
            a1.animations.play('a1left');
        }
        
        else if (a1.x>=280&&a1.x<=320&&a1.y>=120&&a1.y<=200) 
        {
            a1.body.velocity.y = 120;
            a1.animations.play('a1down');
        }
        else
        {
            a1.body.velocity.y=0;
            a1.body.velocity.x=0;
            a1.animations.stop();
            a1.frame=0;
        }
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A2          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log('x2,y2 : '+a2.x+' , '+a2.y);

    a2.body.velocity.x=0;
    a2.body.velocity.y=0;

    if (a2.x>=1040&&a2.x<=1080&&a2.y==220) 
    {
        //decide2=game.rnd.integerInRange(1,3);
        console.log(decide2);
    }

//////////////////////////////////////////////////         A2 Path1        ///////////////////////////////////////////////////////

if (decide2==1) 
    {
        if (a2.x>=965&&a2.x<=1080&&a2.y>=200&&a2.y<=205&&a2p1==1) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=960&&a2.x<=1000&&a2.y>=200&&a2.y<=280) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=885&&a2.x<=1000&&a2.y>=280&&a2.y<=320) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=880&&a2.x<=920&&a2.y>=205&&a2.y<=320) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=725&&a2.x<=920&&a2.y>200&&a2.y<=240) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=720&&a2.x<=760&&a2.y>=125&&a2.y<=240) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=205&&a2.x<=760&&a2.y>=120&&a2.y<=160) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=200&&a2.x<=240&&a2.y>=45&&a2.y<=160) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=200&&a2.x<=1120&&a2.y>=40&&a2.y<=80) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=40&&a2.y<=120) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1045&&a2.x<=1160&&a2.y>=120&&a2.y<=160) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
            a2p1=0;
        }
        else if (a2.x>=1040&&a2.x<=1160&&a2.y>=120&&a2.y<=202&&a2p1==0) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1040&&a2.x<=1120&&a2.y>=200&&a2.y<=240&&a2p1==0) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=200&&a2.y<=280) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1120&&a2.x<=1200&&a2.y>=280&&a2.y<=300) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1200&&a2.x<=1240&&a2.y>=205&&a2.y<=320) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=1200&&a2.x<=1280&&a2.y>=200&&a2.y<=240) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1280&&a2.x<=1320&&a2.y>=200&&a2.y<=520) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1205&&a2.x<=1320&&a2.y>=520&&a2.y<=560) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=1200&&a2.x<=1240&&a2.y>=365&&a2.y<=560) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=1125&&a2.x<=1240&&a2.y>=360&&a2.y<=400) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=325&&a2.y<=400) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=1045&&a2.x<=1160&&a2.y>=320&&a2.y<=360) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
            a2p1=1;
        }
        else if (a2.x>=1040&&a2.x<=1080&&a2.y>=160&&a2.y<=360&&a2p1==1) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else
        {
            a2.body.velocity.y=0;
            a2.body.velocity.x=0;
            a2.animations.stop();
            a2.frame=0;
        }
    }

//////////////////////////////////////////////////         A2 Path2        ///////////////////////////////////////////////////////

    else if (decide2==2) 
    {
        if (a2.x>=975&&a2.x<=1080&&a2.y>=200&&a2.y<204) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=960&&a2.x<=1000&&a2.y>=200&&a2.y<=440) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=895&&a2.x<=1000&&a2.y>=440&&a2.y<=480) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=880&&a2.x<=920&&a2.y>=440&&a2.y<=520) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=815&&a2.x<=920&&a2.y>520&&a2.y<=560) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=800&&a2.x<=840&&a2.y>=295&&a2.y<=560) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=535&&a2.x<=840&&a2.y>=280&&a2.y<=320) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=520&&a2.x<=560&&a2.y>=280&&a2.y<=680) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=520&&a2.x<=1120&&a2.y>=680&&a2.y<=720) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=455&&a2.y<=720) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=1050&&a2.x<=1160&&a2.y>=440&&a2.y<=480) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
       
        else if (a2.x>=1040&&a2.x<=1080&&a2.y>=205&&a2.y<=480) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else
        {
            a2.body.velocity.y=0;
            a2.body.velocity.x=0;
            a2.animations.stop();
            a2.frame=0;
        }
    }




//////////////////////////////////////////////////         A2 Path3        ///////////////////////////////////////////////////////

 else if (decide2==3) 
    {
        if (a2.x>=1040&&a2.x<=1120&&a2.y>=200&&a2.y<204) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=200&&a2.y<=280) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1120&&a2.x<=1200&&a2.y>=280&&a2.y<=320) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1200&&a2.x<=1240&&a2.y>=280&&a2.y<=520) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=1135&&a2.x<=1240&&a2.y>520&&a2.y<=560) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=1120&&a2.x<=1160&&a2.y>=520&&a2.y<=680) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=895&&a2.x<=1160&&a2.y>=680&&a2.y<=720) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=880&&a2.x<=920&&a2.y>=455&&a2.y<=720) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=880&&a2.x<=1040&&a2.y>=440&&a2.y<=480) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }

        else if (a2.x>=1040&&a2.x<=1080&&a2.y>=205&&a2.y<=480) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        
        else
        {
            a2.body.velocity.y=0;
            a2.body.velocity.x=0;
            a2.animations.stop();
            a2.frame=0;
        }
    }


//////////////////////////////////////////////////         A2 Path4        ///////////////////////////////////////////////////////

 else if (decide2==4) 
    {
        if (a2.x>=1040&&a2.x<=1080&&a2.y>=125&&a2.y<=240) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=725&&a2.x<=1080&&a2.y>=120&&a2.y<=160) 
        {
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }
        else if (a2.x>=720&&a2.x<=760&&a2.y>=120&&a2.y<=280) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=720&&a2.x<=800&&a2.y>=280&&a2.y<=320) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=800&&a2.x<=840&&a2.y>280&&a2.y<=680) 
        {
            a2.body.velocity.y = 120;
            a2.animations.play('a2down');
        }
        else if (a2.x>=240&&a2.x<=840&&a2.y>=680&&a2.y<=720&&a2p4==1) 
        {
            
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
        }

        else if(a2.x>=220&&a2.x<=240&&a2p4==1)
        {
            a2p4=0;
            a2.body.velocity.x = -120;
            a2.animations.play('a2left');
            console.log(a2p4);
        }
        else if (a2.x>=200&&a2.x<=880&&a2.y>=680&&a2.y<=720&&a2p4==0) 
        {
            
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=880&&a2.x<=920&&a2.y>=445&&a2.y<=880) 
        {   
            a2p4=1;
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        else if (a2.x>=880&&a2.x<=1040&&a2.y>=440&&a2.y<=480) 
        {
            a2.body.velocity.x = 120;
            a2.animations.play('a2right');
        }
        else if (a2.x>=1040&&a2.x<=1080&&a2.y>=205&&a2.y<=480) 
        {
            a2.body.velocity.y = -120;
            a2.animations.play('a2up');
        }
        
        else
        {
            a2.body.velocity.y=0;
            a2.body.velocity.x=0;
            a2.animations.stop();
            a2.frame=0;
        }
    }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A3          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log('x3,y3 : '+a3.x+' , '+a3.y);

    a3.body.velocity.x=0;
    a3.body.velocity.y=0;

    if (a3.x==282&&a3.y>=600&&a3.y<640) 
    {
        //decide3=game.rnd.integerInRange(1,4);
        //console.log(decide3);
    }


//////////////////////////////////////////////////         A3 Path1        ///////////////////////////////////////////////////////


    if (decide3==1) 
    {
        if (a3.x>=205&&a3.x<=280&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=525&&a3.y<=640) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=45&&a3.x<=240&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=40&&a3.x<=80&&a3.y>=205&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=40&&a3.x<=120&&a3.y>200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=120&&a3.x<=160&&a3.y>=200&&a3.y<=360) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=120&&a3.x<=200&&a3.y>=360&&a3.y<=400) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=325&&a3.y<=400) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=200&&a3.x<=280&&a3.y>=320&&a3.y<=360) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=280&&a3.x<=320&&a3.y>=320&&a3.y<=440) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=280&&a3.x<=440&&a3.y>=440&&a3.y<=480) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=440&&a3.y<=680) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=370&&a3.x<=480&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=605&&a3.y<=720) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=278&&a3.x<=400&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else
        {
            a3.body.velocity.y=0;
            a3.body.velocity.x=0;
            a3.animations.stop();
            a3.frame=0;
        }
    }

//////////////////////////////////////////////////         A3 Path2        ///////////////////////////////////////////////////////
    else if (decide3==2) 
    {
        if (a3.x>=275&&a3.x<=360&&a3.y>=600&&a3.y<=640&&a3p21==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=600&&a3.y<=680&&a3p21==0) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=360&&a3.x<=600&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=600&&a3.x<=640&&a3.y>=605&&a3.y<=720&&a3p21==0) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=600&&a3.x<=720&&a3.y>=600&&a3.y<=640&&a3p21==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=720&&a3.x<=760&&a3.y>=525&&a3.y<=640) 
        {
            a3p21=1;
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=720&&a3.x<=880&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=880&&a3.x<=920&&a3.y>=445&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=880&&a3.x<=1040&&a3.y>=440&&a3.y<=480) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=880&&a3.x<=1040&&a3.y>=440&&a3.y<=480) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=1040&&a3.x<=1080&&a3.y>=440&&a3.y<=520) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=965&&a3.x<=1080&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=960&&a3.x<=1000&&a3.y>=520&&a3.y<=600) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=960&&a3.x<=1120&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=1120&&a3.x<=1160&&a3.y>=600&&a3.y<=680) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=885&&a3.x<=1160&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=880&&a3.x<=920&&a3.y>=605&&a3.y<=720) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=805&&a3.x<=920&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=800&&a3.x<=840&&a3.y>=600&&a3.y<=680) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=605&&a3.x<=840&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=600&&a3.x<=640&&a3.y>=525&&a3.y<=720&&a3p21==1) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=445&&a3.x<=640&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=445&&a3.x<=640&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=445&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=285&&a3.x<=480&&a3.y>=440&&a3.y<=480) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=280&&a3.x<=320&&a3.y>=440&&a3.y<=520) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=280&&a3.x<=360&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=520&&a3.y<=600&&a3p21==1) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=285&&a3.x<=400&&a3.y>=600&&a3.y<=640&&a3p21==1) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x<=285&&a3.x>280) 
        {
            a3p21=0;
        }
    }

//////////////////////////////////////////////////         A3 Path3        ///////////////////////////////////////////////////////
    else if (decide3==3) 
    {
        if (a3.x>=280&&a3.x<=285&&a3.y>=445&&a3.y<=640) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=205&&a3.x<=320&&a3.y>=440&&a3.y<=480) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=440&&a3.y<=520) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=125&&a3.x<=240&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=120&&a3.x<=160&&a3.y>=285&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=120&&a3.x<=200&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=205&&a3.y<=320) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=200&&a3.x<=360&&a3.y>=200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=200&&a3.y<=280) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=360&&a3.x<=440&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=205&&a3.y<=320) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }

        else if (a3.x>=440&&a3.x<=600&&a3.y>=200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=600&&a3.x<=640&&a3.y>=200&&a3.y<=280) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=525&&a3.x<=640&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=520&&a3.x<=560&&a3.y>=280&&a3.y<=520) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=445&&a3.x<=560&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=520&&a3.y<=600) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=440&&a3.x<=520&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=520&&a3.x<=560&&a3.y>=600&&a3.y<=680) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=365&&a3.x<=560&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=605&&a3.y<=720) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=285&&a3.x<=640&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else
        {
            a3.body.velocity.y=0;
            a3.body.velocity.x=0;
            a3.animations.stop();
            a3.frame=0;
        }
    }

//////////////////////////////////////////////////         A3 Path4        ///////////////////////////////////////////////////////
    else if (decide3==4) 
    {
        if (a3.x>=275&&a3.x<=360&&a3.y>=600&&a3.y<=640&&a3p4==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=600&&a3.y<=680&&a3p4==0) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=360&&a3.x<=440&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=525&&a3.y<=720) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=440&&a3.x<=600&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=600&&a3.x<=640&&a3.y>=520&&a3.y<=600) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=600&&a3.x<=720&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=720&&a3.x<=760&&a3.y>=600&&a3.y<=680) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=720&&a3.x<=880&&a3.y>=680&&a3.y<=720) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=880&&a3.x<=920&&a3.y>=525&&a3.y<=720) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=805&&a3.x<=920&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=800&&a3.x<=840&&a3.y>=285&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=725&&a3.x<=840&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=720&&a3.x<=760&&a3.y>=205&&a3.y<=320) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=720&&a3.x<=880&&a3.y>=200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=880&&a3.x<=920&&a3.y>=125&&a3.y<=240&&a3p4==0) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=880&&a3.x<=960&&a3.y>=120&&a3.y<=160&&a3p4==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=960&&a3.x<=1000&&a3.y>=120&&a3.y<=280) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=960&&a3.x<=1040&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=1040&&a3.x<=1080&&a3.y>=125&&a3.y<=320) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=1040&&a3.x<=1120&&a3.y>=120&&a3.y<=160) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=1120&&a3.x<=1160&&a3.y>=45&&a3.y<=160) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=885&&a3.x<=1160&&a3.y>=40&&a3.y<=80) 
        {
            a3p4=1;
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=880&&a3.x<=920&&a3.y>=40&&a3.y<=120&&a3p4==1) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=525&&a3.x<=920&&a3.y>=120&&a3.y<=160&&a3p4==1) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=520&&a3.x<=560&&a3.y>=45&&a3.y<=160) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=445&&a3.x<=560&&a3.y>=40&&a3.y<=80) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=440&&a3.x<=480&&a3.y>=40&&a3.y<=280) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=365&&a3.x<=480&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=280&&a3.y<=600&&a3p4==1) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=285&&a3.x<=400&&a3.y>=600&&a3.y<=680&&a3p4==1) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x<285)
        {
            a3p4=0;
        }

    }

//////////////////////////////////////////////////         A3 Path5        ///////////////////////////////////////////////////////


else if (decide3==5) 
    {
        if (a3.x>=205&&a3.x<=280&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=445&&a3.y<=640) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=200&&a3.x<=280&&a3.y>=440&&a3.y<=480&&a3p5==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=280&&a3.x<=320&&a3.y>=325&&a3.y<=480&&a3p5==0) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=205&&a3.x<=320&&a3.y>=320&&a3.y<=360) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=320&&a3.y<=360) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=125&&a3.x<=240&&a3.y>=360&&a3.y<=400) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=120&&a3.x<=160&&a3.y>=360&&a3.y<=520) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=45&&a3.x<=160&&a3.y>=520&&a3.y<=560) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=40&&a3.x<=80&&a3.y>=205&&a3.y<=560) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=40&&a3.x<=120&&a3.y>=200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=120&&a3.x<=160&&a3.y>=200&&a3.y<=280) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=120&&a3.x<=200&&a3.y>=280&&a3.y<=320) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=205&&a3.y<=320) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=200&&a3.x<=280&&a3.y>=200&&a3.y<=240) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=280&&a3.x<=320&&a3.y>=125&&a3.y<=240) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=205&&a3.x<=320&&a3.y>=120&&a3.y<=160) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=200&&a3.x<=240&&a3.y>=45&&a3.y<=160) 
        {
            a3.body.velocity.y = -120;
            a3.animations.play('a3up');
        }
        else if (a3.x>=200&&a3.x<=640&&a3.y>=40&&a3.y<=80&&a3p5==0) 
        {
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=640&&a3.x<=650&&a3.y>=40&&a3.y<=80&&a3p5==0) 
        {
            a3p5=1;
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
            console.log(a3p5);
        }
        else if (a3.x>=525&&a3.x<=680&&a3.y>=40&&a3.y<=80&&a3p5==1) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=520&&a3.x<=560&&a3.y>=40&&a3.y<=120&&a3p5==1) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=365&&a3.x<=560&&a3.y>=120&&a3.y<=160) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=365&&a3.x<=560&&a3.y>=120&&a3.y<=160) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=120&&a3.y<=440) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=285&&a3.x<=400&&a3.y>=440&&a3.y<=480&&a3p5==1) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
        else if (a3.x>=280&&a3.x<=320&&a3.y>=440&&a3.y<=520&&a3p5==1) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=280&&a3.x<=360&&a3.y>=520&&a3.y<=560) 
        {
            a3p5=0;
            a3.body.velocity.x = 120;
            a3.animations.play('a3right');
        }
        else if (a3.x>=360&&a3.x<=400&&a3.y>=520&&a3.y<=600) 
        {
            a3.body.velocity.y = 120;
            a3.animations.play('a3down');
        }
        else if (a3.x>=280&&a3.x<=400&&a3.y>=600&&a3.y<=640) 
        {
            a3.body.velocity.x = -120;
            a3.animations.play('a3left');
        }
       

    }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A4          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('x4,y4 : '+a4.x+' , '+a4.y);

    a4.body.velocity.x=0;
    a4.body.velocity.y=0;

    if (a4.x==1038&&a4.y>=600&&a4.y<640) 
    {
        //decide4=game.rnd.integerInRange(1);
        console.log(decide4);
    }

//////////////////////////////////////////////////         A4 Path1        ///////////////////////////////////////////////////////

if (decide4==1) 
    {
        if (a4.x>=1040&&a4.x<=1080&&a4.y>=445&&a4.y<=640) 
        {
            a4p12=0;
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=1040&&a4.x<=1120&&a4.y>=440&&a4.y<=480) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=1120&&a4.x<=1160&&a4.y>=440&&a4.y<=680) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=965&&a4.x<=1160&&a4.y>=680&&a4.y<=720) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=960&&a4.x<=1000&&a4.y>445&&a4.y<=720&&a4p12==0) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=885&&a4.x<=1000&&a4.y>=440&&a4.y<=480) 
        {
            a4p12=1;
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=880&&a4.x<=920&&a4.y>=440&&a4.y<=520) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=805&&a4.x<=920&&a4.y>=520&&a4.y<=560) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=800&&a4.x<=840&&a4.y>=365&&a4.y<=560&&a4p11==0) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=525&&a4.x<=840&&a4.y>=360&&a4.y<=400) 
        {
            a4p11=1;
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=520&&a4.x<=560&&a4.y>=360&&a4.y<=680) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=520&&a4.x<=720&&a4.y>=680&&a4.y<=720) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=720&&a4.x<=760&&a4.y>=525&&a4.y<=720) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=720&&a4.x<=800&&a4.y>=520&&a4.y<=560) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=800&&a4.x<=840&&a4.y>=520&&a4.y<=680&&a4p11==1) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=800&&a4.x<=960&&a4.y>=680&&a4.y<=720) 
        {
            a4p11=0;
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=960&&a4.x<=1000&&a4.y>=605&&a4.y<=720&&a4p12==1) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=960&&a4.x<=1040&&a4.y>=600&&a4.y<=640&&a4p12==1) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else
        {
            a4.body.velocity.y=0;
            a4.body.velocity.x=0;
            a4.animations.stop();
            a4.frame=0;
        }
    }

//////////////////////////////////////////////////         A4 Path2        ///////////////////////////////////////////////////////
else if (decide4==2) 
    {
        if (a4.x>=1040&&a4.x<=1120&&a4.y>=600&&a4.y<=640) 
        {
        
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=1120&&a4.x<=1160&&a4.y>=600&&a4.y<=680) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=885&&a4.x<=1160&&a4.y>=680&&a4.y<=720) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=880&&a4.x<=920&&a4.y>=525&&a4.y<=720) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=725&&a4.x<=920&&a4.y>520&&a4.y<=560) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=720&&a4.x<=760&&a4.y>=520&&a4.y<=600) 
        {
            
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=605&&a4.x<=760&&a4.y>=600&&a4.y<=640) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=600&&a4.x<=640&&a4.y>=525&&a4.y<=640) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=445&&a4.x<=640&&a4.y>=520&&a4.y<=560) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=440&&a4.x<=480&&a4.y>=445&&a4.y<=560) 
        {
            
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=285&&a4.x<=480&&a4.y>=440&&a4.y<=480) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=280&&a4.x<=320&&a4.y>=125&&a4.y<=480) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=280&&a4.x<=440&&a4.y>=120&&a4.y<=160) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=440&&a4.x<=480&&a4.y>=45&&a4.y<=160) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=440&&a4.x<=880&&a4.y>=40&&a4.y<=80) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=880&&a4.x<=920&&a4.y>=40&&a4.y<=280) 
        {
           
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=880&&a4.x<=960&&a4.y>=280&&a4.y<=320) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=960&&a4.x<=1000&&a4.y>=280&&a4.y<=600) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=960&&a4.x<=1040&&a4.y>=600&&a4.y<=640) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else
        {
            a4.body.velocity.y=0;
            a4.body.velocity.x=0;
            a4.animations.stop();
            a4.frame=0;
        }
    }

//////////////////////////////////////////////////         A4 Path3        ///////////////////////////////////////////////////////
else if (decide4==3) 
    {
        if (a4.x>=1040&&a4.x<=1120&&a4.y>=600&&a4.y<=640) 
        {
        
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=1120&&a4.x<=1160&&a4.y>=525&&a4.y<=640) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=1120&&a4.x<=1280&&a4.y>=520&&a4.y<=560) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=1280&&a4.x<=1320&&a4.y>=205&&a4.y<=560) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=1205&&a4.x<=1320&&a4.y>200&&a4.y<=240) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=1200&&a4.x<=1240&&a4.y>=200&&a4.y<=280) 
        {
            
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=1125&&a4.x<=1240&&a4.y>=280&&a4.y<=320) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=1120&&a4.x<=1160&&a4.y>=205&&a4.y<=320) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=965&&a4.x<=1160&&a4.y>=200&&a4.y<=240) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=960&&a4.x<=1000&&a4.y>=200&&a4.y<=600) 
        {
            
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=960&&a4.x<=1040&&a4.y>=600&&a4.y<=640) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else
        {
            a4.body.velocity.y=0;
            a4.body.velocity.x=0;
            a4.animations.stop();
            a4.frame=0;
        }
    }

 //////////////////////////////////////////////////         A4 Path4        ///////////////////////////////////////////////////////

if (decide4==4) 
    {
        if (a4.x>=1040&&a4.x<=1080&&a4.y>=125&&a4.y<=640) 
        {
            
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=285&&a4.x<=1080&&a4.y>=120&&a4.y<=160) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=280&&a4.x<=320&&a4.y>=120&&a4.y<=200) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=205&&a4.x<=320&&a4.y>=200&&a4.y<=240) 
        {
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=200&&a4.x<=240&&a4.y>200&&a4.y<=360) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=125&&a4.x<=240&&a4.y>=360&&a4.y<=400) 
        {
            
            a4.body.velocity.x = -120;
            a4.animations.play('a4left');
        }
        else if (a4.x>=120&&a4.x<=160&&a4.y>=360&&a4.y<=520) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=120&&a4.x<=200&&a4.y>=520&&a4.y<=560) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=200&&a4.x<=240&&a4.y>=520&&a4.y<=680) 
        {
            a4.body.velocity.y = 120;
            a4.animations.play('a4down');
        }
        else if (a4.x>=200&&a4.x<=960&&a4.y>=680&&a4.y<=720) 
        {
            
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else if (a4.x>=960&&a4.x<=1000&&a4.y>=605&&a4.y<=720) 
        {
            a4.body.velocity.y = -120;
            a4.animations.play('a4up');
        }
        else if (a4.x>=960&&a4.x<=1040&&a4.y>=600&&a4.y<=640) 
        {
            a4.body.velocity.x = 120;
            a4.animations.play('a4right');
        }
        else
        {
            a4.body.velocity.y=0;
            a4.body.velocity.x=0;
            a4.animations.stop();
            a4.frame=0;
        }
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A5          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (bot5==1) 
{



//console.log('x5,y5 : '+a5.x+' , '+a5.y);
a5.body.velocity.x=0;
a5.body.velocity.y=0;
if (a5.x>=280&&a5.x<=320&&a5.y>=198&&a5.y<200) 
    {
        //decide5=game.rnd.integerInRange(1,5);
        //console.log(decide5);
    }

//////////////////////////////////////////////////        A5 Path1        ///////////////////////////////////////////////////////

    if (decide5==1) 
    {
        if (a5.x>=280&&a5.x<=320&&a5.y>=200&&a5.y<=280) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=280&&a5.x<=360&&a5.y>=280&&a5.y<=320) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=360&&a5.x<=400&&a5.y>=280&&a5.y<=680) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=360&&a5.x<=600&&a5.y>=680&&a5.y<=720) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=600&&a5.x<=640&&a5.y>520&&a5.y<=720) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=525&&a5.x<=640&&a5.y>=520&&a5.y<=560) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=520&&a5.x<=560&&a5.y>=445&&a5.y<=520) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=520&&a5.x<=800&&a5.y>=440&&a5.y<=480) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=800&&a5.x<=840&&a5.y>=285&&a5.y<=480) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=605&&a5.x<=840&&a5.y>=280&&a5.y<=320) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=600&&a5.x<=640&&a5.y>=125&&a5.y<=320) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=600&&a5.x<=800&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=800&&a5.x<=840&&a5.y>=45&&a5.y<=160) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=445&&a5.x<=840&&a5.y>=40&&a5.y<=80) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=440&&a5.x<=480&&a5.y>=40&&a5.y<=120) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=285&&a5.x<=480&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=280&&a5.x<=320&&a5.y>=120&&a5.y<=200) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else
        {
            a5.body.velocity.y=0;
            a5.body.velocity.x=0;
            a5.animations.stop();
            a5.frame=0;
        }
    }

//////////////////////////////////////////////////        A5 Path2        ///////////////////////////////////////////////////////
else if (decide5==2) 
    {
        if (a5.x>=210&&a5.x<=320&&a5.y>=200&&a5.y<=240) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=200&&a5.x<=240&&a5.y>=200&&a5.y<=360) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=130&&a5.x<=240&&a5.y>=350&&a5.y<=400) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=120&&a5.x<=160&&a5.y>=215&&a5.y<=399) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=55&&a5.x<=160&&a5.y>=200&&a5.y<=240) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=40&&a5.x<=80&&a5.y>=200&&a5.y<=520) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=40&&a5.x<=200&&a5.y>=520&&a5.y<=560) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=200&&a5.x<=240&&a5.y>=520&&a5.y<=680) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=200&&a5.x<=365&&a5.y>=680&&a5.y<=720) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=360&&a5.x<=400&&a5.y>=135&&a5.y<=720) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=290&&a5.x<=400&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=280&&a5.x<=320&&a5.y>=120&&a5.y<=200) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        
        else
        {
            a5.body.velocity.y=0;
            a5.body.velocity.x=0;
            a5.animations.stop();
            a5.frame=0;
        }

    }

//////////////////////////////////////////////////        A5 Path3        ///////////////////////////////////////////////////////

else if (decide5==3) 
      {
        if (a5.x>=280&&a5.x<=320&&a5.y>=200&&a5.y<=440) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=280&&a5.x<=440&&a5.y>=440&&a5.y<=480) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=440&&a5.x<=480&&a5.y>=440&&a5.y<=680) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=440&&a5.x<=1120&&a5.y>=680&&a5.y<=720) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=1120&&a5.x<=1160&&a5.y>=455&&a5.y<=720) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=1055&&a5.x<=1160&&a5.y>=440&&a5.y<=480) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=1040&&a5.x<=1080&&a5.y>=135&&a5.y<=480) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=295&&a5.x<=1080&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=280&&a5.x<=320&&a5.y>=120&&a5.y<=200) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else
        {
            a5.body.velocity.y=0;
            a5.body.velocity.x=0;
            a5.animations.stop();
            a5.frame=0;
        }
    }


//////////////////////////////////////////////////         A5 Path4        ///////////////////////////////////////////////////////

else if (decide5==4) 
    {

        if (a5.x>=280&&a5.x<=320&&a5.y>=135&&a5.y<=240&&a5p4==1) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=280&&a5.x<=1120&&a5.y>=120&&a5.y<=160&&a5p4==1) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=1120&&a5.x<=1160&&a5.y>=55&&a5.y<=160) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
            a5p4=0;
        }
        else if (a5.x>=215&&a5.x<=1160&&a5.y>=40&&a5.y<=80) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=200&&a5.x<=240&&a5.y>=40&&a5.y<=120) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=200&&a5.x<=285&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=280&&a5.x<=320&&a5.y>=120&&a5.y<=200&&a5p4==0) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>200) 
        {
            a5p4=1;
        }
        else
        {
            a5.body.velocity.y=0;
            a5.body.velocity.x=0;
            a5.animations.stop();
            a5.frame=0;

        }
        

    }


//////////////////////////////////////////////////         A5 Path5        ///////////////////////////////////////////////////////

else if (decide5==5) 
    {
        if (a5.x>=280&&a5.x<=320&&a5.y>=200&&a5.y<=600) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=215&&a5.x<=320&&a5.y>=600&&a5.y<=640) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=200&&a5.x<=240&&a5.y>=600&&a5.y<=680) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else if (a5.x>=200&&a5.x<=1120&&a5.y>=680&&a5.y<=720) 
        {
            a5.body.velocity.x = 120;
            a5.animations.play('a5right');
        }
        else if (a5.x>=1120&&a5.x<=1160&&a5.y>440&&a5.y<=720) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=1055&&a5.x<=1160&&a5.y>=440&&a5.y<=480) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        else if (a5.x>=1040&&a5.x<=1080&&a5.y>=135&&a5.y<=480) 
        {
            a5.body.velocity.y = -120;
            a5.animations.play('a5up');
        }
        else if (a5.x>=295&&a5.x<=1080&&a5.y>=120&&a5.y<=160) 
        {
            a5.body.velocity.x = -120;
            a5.animations.play('a5left');
        }
        
        else if (a5.x>=280&&a5.x<=320&&a5.y>=120&&a5.y<=200) 
        {
            a5.body.velocity.y = 120;
            a5.animations.play('a5down');
        }
        else
        {
            a5.body.velocity.y=0;
            a5.body.velocity.x=0;
            a5.animations.stop();
            a5.frame=0;
        }
    }



} // END OF IF BOT5==1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////          A6          ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (bot6==1) 
{

//console.log('x6,y6 : '+a6.x+' , '+a6.y);

    a6.body.velocity.x=0;
    a6.body.velocity.y=0;

    if (a6.x>=1040&&a6.x<=1080&&a6.y==220) 
    {
        //decide6=game.rnd.integerInRange(1,3);
        console.log(decide6);
    }

//////////////////////////////////////////////////         A6 Path1        ///////////////////////////////////////////////////////

if (decide6==1) 
    {
        if (a6.x>=965&&a6.x<=1080&&a6.y>=200&&a6.y<=205&&a6p1==1) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=960&&a6.x<=1000&&a6.y>=200&&a6.y<=280) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=885&&a6.x<=1000&&a6.y>=280&&a6.y<=320) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=880&&a6.x<=920&&a6.y>=205&&a6.y<=320) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=725&&a6.x<=920&&a6.y>200&&a6.y<=240) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=720&&a6.x<=760&&a6.y>=125&&a6.y<=240) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=205&&a6.x<=760&&a6.y>=120&&a6.y<=160) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=200&&a6.x<=240&&a6.y>=45&&a6.y<=160) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=200&&a6.x<=1120&&a6.y>=40&&a6.y<=80) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=40&&a6.y<=120) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1045&&a6.x<=1160&&a6.y>=120&&a6.y<=160) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
            a6p1=0;
        }
        else if (a6.x>=1040&&a6.x<=1160&&a6.y>=120&&a6.y<=202&&a6p1==0) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1040&&a6.x<=1120&&a6.y>=200&&a6.y<=240&&a6p1==0) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=200&&a6.y<=280) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1120&&a6.x<=1200&&a6.y>=280&&a6.y<=300) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1200&&a6.x<=1240&&a6.y>=205&&a6.y<=320) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=1200&&a6.x<=1280&&a6.y>=200&&a6.y<=240) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1280&&a6.x<=1320&&a6.y>=200&&a6.y<=520) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1205&&a6.x<=1320&&a6.y>=520&&a6.y<=560) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=1200&&a6.x<=1240&&a6.y>=365&&a6.y<=560) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=1125&&a6.x<=1240&&a6.y>=360&&a6.y<=400) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=325&&a6.y<=400) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=1045&&a6.x<=1160&&a6.y>=320&&a6.y<=360) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
            a6p1=1;
        }
        else if (a6.x>=1040&&a6.x<=1080&&a6.y>=160&&a6.y<=360&&a6p1==1) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else
        {
            a6.body.velocity.y=0;
            a6.body.velocity.x=0;
            a6.animations.stop();
            a6.frame=0;
        }
    }

//////////////////////////////////////////////////         A6 Path2        ///////////////////////////////////////////////////////

    else if (decide6==2) 
    {
        if (a6.x>=975&&a6.x<=1080&&a6.y>=200&&a6.y<204) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=960&&a6.x<=1000&&a6.y>=200&&a6.y<=440) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=895&&a6.x<=1000&&a6.y>=440&&a6.y<=480) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=880&&a6.x<=920&&a6.y>=440&&a6.y<=520) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=815&&a6.x<=920&&a6.y>520&&a6.y<=560) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=800&&a6.x<=840&&a6.y>=295&&a6.y<=560) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=535&&a6.x<=840&&a6.y>=280&&a6.y<=320) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=520&&a6.x<=560&&a6.y>=280&&a6.y<=680) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=520&&a6.x<=1120&&a6.y>=680&&a6.y<=720) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=455&&a6.y<=720) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=1050&&a6.x<=1160&&a6.y>=440&&a6.y<=480) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
       
        else if (a6.x>=1040&&a6.x<=1080&&a6.y>=205&&a6.y<=480) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else
        {
            a6.body.velocity.y=0;
            a6.body.velocity.x=0;
            a6.animations.stop();
            a6.frame=0;
        }
    }




//////////////////////////////////////////////////         A2 Path3        ///////////////////////////////////////////////////////

 else if (decide6==3) 
    {
        if (a6.x>=1040&&a6.x<=1120&&a6.y>=200&&a6.y<204) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=200&&a6.y<=280) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1120&&a6.x<=1200&&a6.y>=280&&a6.y<=320) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }
        else if (a6.x>=1200&&a6.x<=1240&&a6.y>=280&&a6.y<=520) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=1135&&a6.x<=1240&&a6.y>520&&a6.y<=560) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a6.x>=1120&&a6.x<=1160&&a6.y>=520&&a6.y<=680) 
        {
            a6.body.velocity.y = 120;
            a6.animations.play('a6down');
        }
        else if (a6.x>=895&&a6.x<=1160&&a6.y>=680&&a6.y<=720) 
        {
            a6.body.velocity.x = -120;
            a6.animations.play('a6left');
        }
        else if (a2.x>=880&&a2.x<=920&&a6.y>=455&&a6.y<=720) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        else if (a6.x>=880&&a6.x<=1040&&a6.y>=440&&a6.y<=480) 
        {
            a6.body.velocity.x = 120;
            a6.animations.play('a6right');
        }

        else if (a6.x>=1040&&a6.x<=1080&&a6.y>=205&&a6.y<=480) 
        {
            a6.body.velocity.y = -120;
            a6.animations.play('a6up');
        }
        
        else
        {
            a6.body.velocity.y=0;
            a6.body.velocity.x=0;
            a6.animations.stop();
            a6.frame=0;
        }
    }

} // END OF BOT6 ka if


















} //END OF UPDATE2 FUNCTION



