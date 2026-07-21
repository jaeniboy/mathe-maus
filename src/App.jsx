import './App.css'
import { useState } from 'react'
import maus from './assets/maus.png'

function App() {

  const [puzzleCount, updatePuzzleCount] = useState(1)
  
  function increasePuzzleCount() {
    updatePuzzleCount(puzzleCount + 1)
  }

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50 select-none">
      <Headline puzzleCount={puzzleCount}></Headline>
      <MouseImage></MouseImage>
      <MathPuzzle updatePuzzleCount={increasePuzzleCount}></MathPuzzle>
    </main>
  )
}

function Headline({puzzleCount}) {
  return(
    <header className="h-[15vh] flex flex-col items-center justify-center bg-blue-200 text-white shadow-md">
      <h1 className="text-3xl text-black font-extrabold">Mathe-Maus</h1>
      <h2 className="text-xl text-black font-bold tracking-wide">Aufgabe {puzzleCount}</h2>
    </header>
  )
}

function MouseImage() {
  return(
    <div className="h-[55vh] flex items-center justify-center p-4 bg-white">
      <img 
        src={maus} 
        alt="Mathe Maus" 
        className="max-h-full max-w-full object-contain rounded-xl shadow-sm"
      />
    </div>
  )
}

function createPuzzle() {
  const firstNumber = Math.floor(Math.random() * 5)
  const secondNumber = Math.floor(Math.random() * 5)
  const solution = firstNumber + secondNumber
  let choices = [solution]

  while (choices.length < 5) {
    const newChoice = Math.floor(Math.random() * 10)
    if (!choices.includes(newChoice)) {
      choices.push(newChoice)
    }
  }

  const choicesShuffled = shuffle(choices)

  return [firstNumber, secondNumber, solution, choicesShuffled]

}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MathPuzzle({updatePuzzleCount}) {

  const [choice, updateChoice] = useState(null)
  const [firstAddent, secondAddent, solution, choices] = createPuzzle()

  const choicesButtons = choices.map(number => 
  <div
    key={number}
    className={`px-5 py-2 shadow-md rounded-full cursor-pointer border-2 border-transparent hover:border-indigo-400 ${(number === choice && number === solution) ? "bg-green-100" : (number === choice && number !== solution) ? "bg-red-100" : "bg-white"}`}
    onClick={() => {
      updateChoice(number)
      if (number === solution) {updatePuzzleCount()}
    }
  }
  >{number}</div>)

  return(
    <section className="h-[30vh] flex flex-col items-center justify-center bg-amber-100 p-4 border-t-4 border-amber-300">
      <div className="text-2xl font-bold text-slate-800 bg-white px-6 py-3 rounded-full shadow-md">
        {firstAddent} + {secondAddent} = ?
      </div>
      <div 
        className="flex flex-row gap-2 font-bold pt-3"
      >
        {choicesButtons}
      </div>
    </section>
  )
}


export default App
