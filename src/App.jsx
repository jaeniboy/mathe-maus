import './App.css'
import { useState } from 'react'
import maus from './assets/maus.png'

function App() {
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50 select-none">
      <Headline></Headline>
      <MouseImage></MouseImage>
      <MathPuzzle></MathPuzzle>
    </main>
  )
}

function Headline() {
  return(
    <header className="h-[12vh] flex items-center justify-center bg-blue-200 text-white shadow-md">
      <h1 className="text-3xl font-extrabold tracking-wide">Mathe-Maus 🐭</h1>
    </header>
  )
}

function MouseImage() {
  return(
    <div className="h-[58vh] flex items-center justify-center p-4 bg-white">
      <img 
        src={maus} 
        alt="Mathe Maus" 
        className="max-h-full max-w-full object-contain rounded-xl shadow-sm"
      />
    </div>
  )
}

function MathPuzzle() {

  const [choice, updateChoice] = useState(null)
  const [resultCorrect, updateResultCorrect] = useState(false)

  const firstAddent = 1
  const secondAddent = 2
  const choices = [1,2,3,4,5]

  const choicesButtons = choices.map(number => 
  <div
    key={number}
    className={`px-5 py-2 shadow-md rounded-full cursor-pointer border-2 border-transparent hover:border-indigo-400 ${(number === choice && resultCorrect) ? "bg-green-100" : (number === choice && !resultCorrect) ? "bg-red-100" : "bg-white"}`}
    onClick={() => {
      updateChoice(number)
      updateResultCorrect(firstAddent + secondAddent === number)
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
