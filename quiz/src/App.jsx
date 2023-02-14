// react , components , estáticos
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'
import './App.css'

function App() {
  const [quizState, dispacth] = useContext(QuizContext);

  useEffect(() => {
    //embaralhar as perguntas
    dispacth

  }, [])

  
  return (
    <div className="App">
     <h1>Quiz de Programação</h1>
     {quizState.gameState === "Start" && <Welcome/>}
     {quizState.gameState === "Playing" && <Question/>}
    </div>
  )
}

export default App
