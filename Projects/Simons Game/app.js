let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

//Game Start Conditions

document.addEventListener('keypress', function () {
	if (started == false) {
		console.log('game is started');
		started = true;

		levelUp();
	}
});

//Flashing button

function gameFlash(btn) {
	btn.classList.add('flash');
	setTimeout(function () {
		btn.classList.remove('flash');
	}, 250);
}

function userFlash(btn) {
	btn.classList.add('user-flash');
	setTimeout(function () {
		btn.classList.remove('user-flash');
	}, 250);
}

// Level Up

function levelUp() {
    userSeq=[];
	level++;
	h2.innerText = `Level ${level}`;

	//random button choose
	let randomIndex = Math.floor(Math.random() * 3);
	let randomColor = btns[randomIndex];
	let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
	gameFlash(randomBtn);
}



function checkAns(index){
    

    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>. <br>Press any key restart`;
        document.querySelector('body').style.backgroundColor ='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}



// Add Event Listener for all buttons
let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}