const addPlayer = (name, letter) => {
  return {
    name,
    letter
  };
}

//Form creates players and if names are left blank, will make names "Player 1" and "Player 2" by default.
//Will start the game upon clicking submit and hide the form in place of a game display
document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  player1 = addPlayer(document.querySelector('#player1Name').value, 'X');
  if (player1.name == '') {
    player1.name = 'Player 1'
  }
  player2 = addPlayer(document.querySelector('#player2Name').value, 'O');
  if (player2.name == '') {
    player2.name = 'Player 2'
  }
  console.log(player1.name)
  console.log(player1.letter)
  console.log(player2.name)
  console.log(player2.letter)
  document.querySelector('.board').style = ('display: flex;')
  document.querySelector('.nameInput').style = ('display: none;')
  document.querySelector('.display').textContent = `${player1.name}'s turn`;
  document.querySelector('.display').style = ('font-size: 2em;');
  playGame()
})

const gameGrid = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = '';
let playerTurn = 1;
let gameOver = false;

//Function to take turns switching from player 1 to player 2, starting with player 1. Display div displays whose turn it is once the current player has just taken a turn.
const takeTurns = () => {
  if (playerTurn === 1) {
    currentPlayer = player1.letter;
    document.querySelector('.display').textContent = `${player2.name}'s turn`;
    playerTurn = 0;
  } else if (playerTurn === 0) {
    currentPlayer = player2.letter;
    document.querySelector('.display').textContent = `${player1.name}'s turn`;
    playerTurn = 1;
  } else {
    return;
  }
}

const player1WinDisplay = () => {
  console.log(`${player1.name} wins!`)
  console.log('game over')
  gameOver = true;
  document.querySelector('.display').textContent = `${player1.name} wins!`;
  return null
}

const player2WinDisplay = () => {
  console.log(`${player2.name} wins!`)
  console.log('game over')
  gameOver = true;
  document.querySelector('.display').textContent = `${player2.name} wins!`;
  return null
}

const determineWinner = () => {
  if (gameGrid[0] != '' && gameGrid[0] == gameGrid[1] && gameGrid[2] == gameGrid[1]) {
    if (gameGrid[0] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[3] != '' && gameGrid[3] == gameGrid[4] && gameGrid[5] == gameGrid[4]) {
    if (gameGrid[3] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[6] != '' && gameGrid[6] == gameGrid[7] && gameGrid[8] == gameGrid[7]) {
    if (gameGrid[6] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[0] != '' && gameGrid[0] == gameGrid[3] && gameGrid[6] == gameGrid[3]) {
    if (gameGrid[0] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[1] != '' && gameGrid[1] == gameGrid[4] && gameGrid[7] == gameGrid[4]) {
    if (gameGrid[1] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[2] != '' && gameGrid[2] == gameGrid[5] && gameGrid[8] == gameGrid[5]) {
    if (gameGrid[2] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[0] != '' && gameGrid[0] == gameGrid[4] && gameGrid[8] == gameGrid[4]) {
    if (gameGrid[0] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[6] != '' && gameGrid[6] == gameGrid[4] && gameGrid[2] == gameGrid[4]) {
    if (gameGrid[6] == 'X') {
      player1WinDisplay()
    } else {
      player2WinDisplay()
    }
  } else if (gameGrid[0] && gameGrid[1] && gameGrid[2] && gameGrid[3] && gameGrid[4] && gameGrid[5] && gameGrid[6] && gameGrid[7] && gameGrid[8] != '') {
    console.log('Draw')
    document.querySelector('.display').textContent = `It's a draw`;
  }
}

const playGame = () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      //Locks in div display and array if div has been clicked; prevents takeTurns and turn display from changing if clicking on filled square
      if (gameOver || square.textContent != '') {
        return;
      }

      takeTurns();
      gameGrid[index] = currentPlayer;
      square.textContent = currentPlayer;
      determineWinner();
      console.log(gameGrid);
    })
  })
}