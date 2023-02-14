import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Question.css';

const Question = () => {
    const [quizState, dispacth] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];


  return <div id="question">
    <p>Pergunta {quizState.currentQuestion + 1} de {quizState.question.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
        <p>Opções</p>
    </div>
    <button>Continuar</button>
  </div>;
};

export default Question;
