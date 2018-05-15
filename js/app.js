// Enemies our player must avoid
//document.onload(start);
//document.addEventListener('DOMContentLoaded', start);
var Enemy = function(x,y,speed=100) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x=x;
  this.y=y;
  this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x>=Math.floor(Math.random()*1000)+550) {
        var random=Math.floor(Math.random()*3+1);
        this.x=0;
        this.y=random*70;
    }
    else {
        this.x+=this.speed*dt;
        //this.x+=100*dt;
    }
     //this.y=this.y*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let flag=true;
class Player {
  constructor(){
    this.x=0;
    this.y=300;
    this.sprite = 'images/char-boy.png';
    this.life=true;
    this.score=0;
  }
  win() {
    //document.body.style.backgroundColor = "green" ;
    this.score++;
    document.querySelector('#score').innerHTML=this.score;
    flag=false;
  }

  update() {
    if(this.x<0||this.x>400||this.y<-20||this.y>400) {
      this.x=200;
      this.y=300;
    }
    if(this.y==-20&&flag==true){
      player.win();
      flag=true;
      this.y=300;
    }
    for(let i=0;i<5;i++){
        if(Math.abs(allEnemies[i].x-this.x)<=30 && Math.abs(allEnemies[i].y-this.y)<=10){
            this.life=false;
            //console.log(this.x);
        }
        if(this.life==false){
    //console.log(this.x);
            if(this.score>0){
              this.score--;
              document.querySelector('#score').innerHTML=this.score;
            }
            this.y=300;
            this.life=true;
        }
    }
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key){

      switch (key) {
        case 'left':
        this.x=this.x-100;

        break;
        case 'right':
        this.x=this.x+100;

        break;
        case 'up':
        this.y=this.y-80;

        break;
        case 'down':
        this.y=this.y+80;
        break;

    }
  //console.log(allEnemies[1].x);
  //console.log(this.x);

  }
}
/*
class Gems {
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.sprite = 'images\Gem Green.png';
    //C:\Users\LENOVO\Documents\GitHub\frontend-nanodegree-arcade-game\images\Gem-Blue.png
}
render(){
  console.log(this.x);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
update()
{
  this.x;
  this.y;
}
}
*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy1=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),100);
let enemy2=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),200);
let enemy3=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),300);
let enemy4=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),400);
let enemy5=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),250);
let enemy6=new Enemy(Math.floor(Math.random()*200*-1),70*Math.floor(Math.random()*3+1),300);

let allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5];


let player=new Player;
/*allGems=[];
for(let j=0;j<Math.floor(Math.random()*3)+1;j++)
{
  let gem=new Gems(Math.floor(Math.random()*4)*100,Math.floor(Math.random()*3)*70);
  allGems.push(gem);
}
*/
let sec=0,min=2,t;
function decrease() {
    sec--;
    if(sec<0) {
        sec=60;
        min--;
    }
    let stopWatch=document.querySelector('#timer');
    let string= `${min}:${sec}`;
    stopWatch.innerHTML=string;
    if(sec===0&&min==0) {
        document.removeEventListener('keyup',key);
        clearInterval(t);
        let modal = document.querySelector('.modal');
        let closebtn = document.querySelector('.close');
        //let timeTaken=document.querySelector('.timer').innerHTML;
        document.querySelector('#wins').innerHTML=player.score;
        modal.style.display= "block";
        closebtn.addEventListener('click',closeModal);
    }
}

//timer function
function timer() {
    t=setInterval(decrease,1000);
}
function key(e){
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
}

//start function
function start() {
    player.score=0;
    closeModal();
    clearInterval(t);
    document.querySelector('#score').innerHTML=player.score;
    sec=30,min=1;
    timer();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup',key);
};

function closeModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = "none";
}
