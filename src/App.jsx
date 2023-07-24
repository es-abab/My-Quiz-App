import './App.css'

import { useState } from 'react';
import IntroPage from './components/IntroPage';
import QuizPage from './components/QuizPage';
// import { questions } from '../data/questions';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };
  const endQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <div>
      {quizStarted ? <QuizPage endQuiz={endQuiz}/> : <IntroPage startQuiz={startQuiz} />}
    </div>
    
  );
};

export default App;
