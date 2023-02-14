import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispacth] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja Bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispacth({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio de Quiz" />
    </div>
  );
};

export default Welcome;
