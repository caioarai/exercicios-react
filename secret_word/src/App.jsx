// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// data
import { wordsList } from './data/words';
// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  //Start secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // pick word and pick category
    const { category, word } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.toLocaleLowerCase().split('');

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizadLetter = letter.toLocaleLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizadLetter) ||
      wrongLetters.includes(normalizadLetter)
    ) {
      return;
    }

    // push guessed letter ou remove a guess
    if (letters.includes(normalizadLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizadLetter,
      ]);
    } else {
      setWrongLetters((actualwrongLetters) => [
        ...actualwrongLetters,
        normalizadLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses === 0) {
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condicion
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === gameStage[1].name
    ) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart
      startGame();
    }
  }, [guessedLetters, letters, startGame, gameStage]);

  //restart the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
