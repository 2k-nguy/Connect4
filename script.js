var turnTracker = 0;
var aArray = [3, 4, 5, 6, 7, 8];
var aIndex = 5;
var bArray = [9, 10, 11, 12, 13, 14];
var bIndex = 5;
var cArray = [15, 16, 17, 18, 19, 20];
var cIndex = 5;
var dArray = [21, 22, 23, 24, 25, 26];
var dIndex = 5;
var eArray = [27, 28, 29, 30, 31, 32];
var eIndex = 5;
var fArray = [33, 34, 35, 36, 37, 38];
var fIndex = 5;
var gArray = [39, 40, 41, 42, 43, 44];
var gIndex = 5;
var gridTracker = [];
var singlePlayer = false;
var ranTurn = 0;
var timed = false;
var count1 = 0;
var count2 = 0;

timedStatus = document.querySelector("#timedMode");
timeButton = document.querySelector("#timeMode");
var timed = false;

function timerMode(){
  setTimeout(Warning, 50000);
}

function Warning() {
  if (timed = true){
  timedStatus.innerHTML = "You failed Timeout Mode, click Time Mode to Try Again";
  setTimeout(Ending, 4000);
  }
}

function Ending(){
  timed = false;
  timedStatus.classList.remove("timeCSS");
  timedStatus.classList.add("timestatus");
  for (i = 0; i < gridTracker.length; i++) {
    temp = gridTracker[i];
    document.getElementById(temp).classList.add('grid-item');
    document.getElementById(temp).classList.remove("player1");
    document.getElementById(temp).classList.remove("player2");
  }
  timeButton.classList.add("redButtonCSS");
  timeButton.classList.remove("greenButtonCSS");
  count1 = 0;
  count2 = 0;
 winCount1.innerHTML = count1;
 winCount2.innerHTML = count2;
}

function timeMode() {
  timeButton.classList.remove("redButtonCSS");
  timeButton.classList.add("greenButtonCSS");
  timed = !timed;
  if (timed == true){
   timedStatus.classList.remove("timestatus");
  timedStatus.classList.add("timeCSS");
  timedStatus.innerHTML = "You have 50 seconds to beat the other player!";
  count1 = 0;
  count2 = 0;
  winCount1.innerHTML = count1;
 winCount2.innerHTML = count2;
  timerMode(); 
  }
  else{
    timeButton.classList.add("redButtonCSS");
    timeButton.classList.remove("greenButtonCSS");
    timedStatus.classList.remove("timeCSS");
    timedStatus.classList.add("timestatus");
  }
}

function timeCheck (){
  if (count1 == 1 && timed == true){
    timedStatus.innerHTML = "You beat Timed Mode, Player 1, click Time Mode to play again!";
    setTimeout(Ending, 6000);
  }
  else if (count2 == 1 && timed == true){
    timedStatus.innerHTML = "You beat Timed Mode, Player 2, click Time Mode to play again!";
    setTimeout(Ending, 6000);
  }
}


function aiTurn() {
    ranTurn = Math.floor(Math.random()*7);
  if (turnTracker % 2 != 0 && singlePlayer) {

  if (ranTurn == 0 && aIndex >= 0)  {
    turnA();
  }
  else if (ranTurn == 1 && bIndex >= 0)  {
    turnB();
  }
  else if (ranTurn == 2 && cIndex >= 0)  {
    turnC();
  }
  else if (ranTurn == 3 && dIndex >= 0)  {
    turnD();
  }
  else if (ranTurn == 4 && eIndex >= 0)  {
    turnE();
  }
  else if (ranTurn == 5 && fIndex >= 0)  {
    turnF();
  }
  else if (ranTurn == 6 && gIndex >= 0)  {
    turnG();
  }
  else {
    aiTurn();
  }
 }
}
function ranTurn() {
    ranTurn = Math.floor(Math.random()*7);
  if (ranTurn == 0 && aIndex >= 0)  {
    turnA();
  }
  else if (ranTurn == 1 && bIndex >= 0)  {
    turnB();
  }
  else if (ranTurn == 2 && cIndex >= 0)  {
    turnC();
  }
  else if (ranTurn == 3 && dIndex >= 0)  {
    turnD();
  }
  else if (ranTurn == 4 && eIndex >= 0)  {
    turnE();
  }
  else if (ranTurn == 5 && fIndex >= 0)  {
    turnF();
  }
  else if (ranTurn == 6 && gIndex >= 0)  {
    turnG();
  }
  else {
    aiTurn();
  }
 }


function win() {
         console.log ("Player " + ((turnTracker + 1) % 2 + 1) + " wins!"); 
          if (((turnTracker + 1) % 2 + 1) == 1){
          count1++;
          winCount1.innerHTML = `${count1}`;
          winCount2.innerHTML = `${count2}`;
          modalPopUp();
          } 
          else {
          count2++;
          winCount1.innerHTML = `${count1}`;
          winCount2.innerHTML = `${count2}`;
          modalPopUp2();
          }
}

function turnA() {
  id = "A" + (aIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    aArray[aIndex] = turnTracker % 2;
    winCheck(aArray, aIndex);
    diagWinCheckA(aIndex);
    aIndex--;
    turnCheck();
    gridTracker.push(id);
    d2 = new Date() - d1;  
  console.log(d2);
}
function turnB() {
  id = "B" + (bIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    bArray[bIndex] = turnTracker % 2;
    winCheck(bArray, bIndex);
    diagWinCheckB(bIndex);
    bIndex--;
    turnCheck();
    gridTracker.push(id);
}
function turnC() {
  id = "C" + (cIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    cArray[cIndex] = turnTracker % 2;
    winCheck(cArray, cIndex);
    diagWinCheckC(cIndex);
    cIndex--;
    turnCheck();
    gridTracker.push(id);
}
function turnD() {
  id = "D" + (dIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    dArray[dIndex] = turnTracker % 2;
    winCheck(dArray, dIndex);
    diagWinCheckD(dIndex);  
    dIndex--;
    turnCheck();
    gridTracker.push(id);
}
function turnE() {
  id = "E" + (eIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    eArray[eIndex] = turnTracker % 2;
    diagWinCheckE(eIndex);
    winCheck(eArray, eIndex);
    eIndex--;
    turnCheck();
    gridTracker.push(id);  
}
function turnF() {
  id = "F" + (fIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    fArray[fIndex] = turnTracker % 2;
    diagWinCheckF(fIndex);
    winCheck(fArray, fIndex);
    fIndex--;
    turnCheck();
    gridTracker.push(id);
}
function turnG() {
  id = "G" + (gIndex+1);
  cssElement = "player" + (turnTracker % 2 + 1);
    turnTracker++;
    document.getElementById(id).classList.remove('grid-item');
    document.getElementById(id).classList.add(cssElement);
    gArray[gIndex] = turnTracker % 2;
    diagWinCheckG(gIndex);
    winCheck(gArray, gIndex);
    gIndex--;
    turnCheck();
    gridTracker.push(id);
}

function turnCheck() {
  if (turnTracker % 2 == 0) {
     turnStatus.innerHTML = "Player 1's turn";   
  }
  else {
    turnStatus.innerHTML = "Player 2's turn";
      if (singlePlayer) {
        setTimeout(aiTurn, 1500);
      }
  }
  
}






/* Win Counter */

const winCount1 = document.querySelector("#winCount1");
const winCount2 = document.querySelector("#winCount2");
const modal = document.querySelector("#myModal");
const modal2 = document.querySelector("#myModal2");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
const contentModal = document.querySelector("#modal-content");
const contentModal2 = document.querySelector("#modal-content2");

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

function modalPopUp() {
  modal.style.display = "block";
}

function modalPopUp2() {
  modal2.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


function winCheck(c, row) {
  streak = 1
  for (i = 0; i < 5; i++) {
     if (c[i] == c[i+1]) {
       streak++;
        if (streak == 4) {
        win();
        timeCheck();
       }
     }
     else {
         streak = 1;
       }
  }

  if (aArray[row] == bArray[row] && bArray[row] == cArray[row] && cArray[row] == dArray[row]) {
    win();
    timeCheck();
    }
     
  else if (bArray[row] == cArray[row] && cArray[row] == dArray[row] && dArray[row] == eArray[row]) {
    win();
    timeCheck();
   }
     
  else if (cArray[row] == dArray[row] && dArray[row] == eArray[row] && eArray[row] == fArray[row]) {
    win();
    timeCheck();
   }

  else if (dArray[row] == eArray[row] && eArray[row] == fArray[row] && fArray[row] == gArray[row]) {
    win();
    timeCheck();
  }
}
function diagWinCheckA(index) { 
    if (aArray[index] == bArray[index+1] && bArray[index+1] == cArray[index+2] && cArray[index+2] == dArray[index+3]) {
    win();
    timeCheck();
    }
    else if (aArray[index] == bArray[index-1] && bArray[index-1] == cArray[index-2] && cArray[index-2] == dArray[index-3]) {
    win();
    timeCheck();
    }
}
function diagWinCheckB(index) {
    if (aArray[index-1] == bArray[index] && bArray[index] == cArray[index+1] && cArray[index+1] == dArray[index+2]) {
    win();
      timeCheck();
    }

   else if (aArray[index+1] == bArray[index] && bArray[index] == cArray[index-1] && cArray[index-1] == dArray[index-2]) {
    win();
     timeCheck();
  }

  else if (bArray[index] == cArray [index+1] && cArray[index+1] == dArray[index+2] && dArray[index+2] == eArray[index+3]) {
    win();
    timeCheck();
  }

  else if (bArray[index] == cArray [index-1] && cArray[index-1] == dArray[index-2] && dArray[index-2] == eArray[index-3]) {
    win();
    timeCheck();
  }
  
}
function diagWinCheckC(index) {
  if (aArray[index-2] == bArray[index-1] && bArray[index-1] == cArray[index] && cArray[index] == dArray[index+1]) {
    win();
    timeCheck();
  }
  else if (aArray[index+2] == bArray[index+1] && bArray[index+1] == cArray[index] && cArray[index] == dArray[index-1]) {
    win();
    timeCheck();
  }
  else if (bArray[index-1] == cArray[index] && cArray[index] == dArray[index+1] && dArray[index+1] == eArray[index+2]) {
    win();
    timeCheck();
  }
  else if (bArray[index+1] == cArray[index] && cArray[index] == dArray[index-1] && dArray[index-1] == eArray[index-2]) {
    win();
    timeCheck();
  }
  else if (cArray[index] == dArray[index+1] && dArray[index+1] == eArray[index+2] && eArray[index+2] == fArray[index+3]) {
     win();
    timeCheck();
  }  
  else if (cArray[index] == dArray[index-1] && dArray[index-1] == eArray[index-2] && eArray[index-2] == fArray[index-3]) {
    win();
    timeCheck();
  } 
}
function diagWinCheckD(index) {
  if (aArray[index-3] == bArray[index-2] && bArray[index-2] == cArray[index-1] && cArray[index-1] == dArray[index]) {
    win();
    timeCheck();
  }
  else if (aArray[index+3] == bArray[index+2] && bArray[index+2] == cArray[index+1] && cArray[index+1] == dArray[index]) {
    win();
    timeCheck();
  }
  else if (gArray[index-3] == fArray[index-2] && fArray[index-2] == eArray[index-1] && eArray[index-1] == dArray[index]) {
    win();
    timeCheck();
  }
  else if (gArray[index+3] == fArray[index+2] && fArray[index+2] == eArray[index+1] && eArray[index+1] == dArray[index]) {
    win();
    timeCheck();
  }
  else if (bArray[index-2] == cArray[index-1] && cArray[index-1] == dArray[index] && dArray[index] == eArray[index+1]) {
    win();
    timeCheck();
  }  
  else if (bArray[index+2] == cArray[index+1] && cArray[index+1] == dArray[index] && dArray[index] == eArray[index-1]) {
    win();
    timeCheck();
  }  
  else if (cArray[index+1] == dArray[index] && dArray[index] == eArray[index-1] && eArray[index-1] == fArray[index-2]) {
    win();
    timeCheck();
  }    
  else if (cArray[index-1] == dArray[index] && dArray[index] == eArray[index+1] && eArray[index+1] == fArray[index+2]) {
     win();
    timeCheck();
  }
}
function diagWinCheckE(index) {
  if (bArray[index-3] == cArray[index-2] && cArray[index-2] == dArray[index-1] && dArray[index-1] == eArray[index]) {
    win();
    timeCheck();
    }  
  else if (bArray[index+3] == cArray[index+2] && cArray[index+2] == dArray[index+1] && dArray[index+1] == eArray[index]) {
    win();
    timeCheck();
    } 
  else if (cArray[index-2] == dArray[index-1] && dArray[index-1] == eArray[index] && eArray[index] == fArray[index+1]) {
    win();
    timeCheck();
    } 
  else if (cArray[index+2] == dArray[index+1] && dArray[index+1] == eArray[index] && eArray[index] == fArray[index-1]) {
    win();
    timeCheck();
    } 
  else if (dArray[index-1] == eArray[index] && eArray[index] == fArray[index+1] && fArray[index+1] == gArray[index+2]) {
    win();
    timeCheck();
    }
  else if (dArray[index+1] == eArray[index] && eArray[index] == fArray[index-1] && fArray[index-1] == gArray[index-2]) {
    win();
    timeCheck();
    } 
}
function diagWinCheckF(index) {
  if (cArray[index-3] == dArray[index-2] && dArray[index-2] == eArray[index-1] && eArray[index-1] == fArray[index]) {
    win();
    timeCheck();
    }
  else if (cArray[index+3] == dArray[index+2] && dArray[index+2] == eArray[index+1] && eArray[index+1] == fArray[index]) {
win();
 timeCheck();
    }
  else if (dArray[index-2] == eArray[index-1] && eArray[index-1] == fArray[index] && fArray[index] == gArray[index+1]) {
win();
timeCheck();
    }
  else if (dArray[index+2] == eArray[index+1] && eArray[index+1] == fArray[index] && fArray[index] == gArray[index-1]) {
win();
timeCheck();
    }
}
function diagWinCheckG(index) {
  if (dArray[index-3] == eArray[index-2] && eArray[index-2] == fArray[index-1] && fArray[index-1] == gArray[index]) {
 win();
 timeCheck();
  }
  else if (dArray[index+3] == eArray[index+2] && eArray[index+2] == fArray[index+1] && fArray[index+1] == gArray[index]) {
 win();
 timeCheck();
  
}
}

winCount1.innerHTML = count1;
winCount2.innerHTML = count2;

const turn = document.querySelector("#turnStatus");


function resetBoard() {
  console.log(gridTracker);
  for (i = 0; i < gridTracker.length; i++) {
    temp = gridTracker[i];
    document.getElementById(temp).classList.add('grid-item');
    document.getElementById(temp).classList.remove("player1");
    document.getElementById(temp).classList.remove("player2");
  }

turnTracker = 0;
aArray = [3, 4, 5, 6, 7, 8];
aIndex = 5;
bArray = [9, 10, 11, 12, 13, 14];
bIndex = 5;
cArray = [15, 16, 17, 18, 19, 20];
cIndex = 5;
dArray = [21, 22, 23, 24, 25, 26];
dIndex = 5;
eArray = [27, 28, 29, 30, 31, 32];
eIndex = 5;
fArray = [33, 34, 35, 36, 37, 38];
fIndex = 5;
gArray = [39, 40, 41, 42, 43, 44];
gIndex = 5;
gridTracker = [];
turnCheck();
}
const AIButton = document.getElementById("AIMode");


function aiMode() {
  singlePlayer =!singlePlayer;
  if (singlePlayer) {
    AIButton.classList.remove("redButtonCSS");
    AIButton.classList.add("greenButtonCSS");
    aiTurn();
  }
  else {
    AIButton.classList.add("redButtonCSS");
    AIButton.classList.remove("greenButtonCSS");
  }
}

function resetWin(){
  count1 = 0;
  count2 = 0;
  winCount1.innerHTML = `${count1}`;
  winCount2.innerHTML = `${count2}`;
}
