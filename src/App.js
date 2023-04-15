import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Choices from './components/Choices';

function App() {
	const [userScore, setUserScore] = useState(0);
	const [compScore, setCompScore] = useState(0);
	const [text, setText] = useState("Let's play a game!");

	const game = (userChoice) => {
		const choices = ['r', 'p', 's'];
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		checkWinner(userChoice, compChoice);
	}

	const checkWinner = (userChoice, compChoice) => {
		let result = "";
		if (userChoice === compChoice)
			result = 'draw';
		else if (userChoice === 'r' && compChoice === 's' || userChoice === 'p' && compChoice === 'r' || userChoice === 's' && compChoice === 'p')
			result = 'win';
		else
			result = 'lose';

		if (result === 'win') {
			setUserScore(userScore + 1);
			if (userChoice === 'r' && compChoice === 's')
				setText("Rock (user) crushes Scissors (comp).");
			else if (userChoice === 'p' && compChoice === 'r')
				setText("Paper (user) covers Rock (comp).");
			else if (userChoice === 's' && compChoice === 'p')
				setText("Scissors (user) cut Paper (comp).");
		}
		else if (result === 'lose') {
			setCompScore(compScore + 1);
			if (userChoice === 'r' && compChoice === 'p')
				setText("Paper (comp) covers Rock (user).");
			else if (userChoice === 'p' && compChoice === 's')
				setText("Scissors (comp) cut Paper (user).");
			else if (userChoice === 's' && compChoice === 'r')
				setText("Rock (comp) crushes Scissors (user).");
		}
		else {
			if (userChoice === 'r' && compChoice === 'r')
				setText("Rock (user) ties Rock (comp).");
			else if (userChoice === 'p' && compChoice === 'p')
				setText("Paper (user) ties Paper (comp).");
			else if (userChoice === 's' && compChoice === 's')
				setText("Scissors (user) ties Scissors (comp).");
		}
	}

	return (
		<div className="App">
			<header>Rock Paper Scissors</header>

			<Score userScore={userScore} compScore={compScore} />

			<p>{text}</p>

			<Choices game={game} />

			<button className="reset" onClick={() => {
				setUserScore(0);
				setCompScore(0);
				setText("Let's play a game!");
			}}>Reset</button>
		</div>
	);
}

export default App;
