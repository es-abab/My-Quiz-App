import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomePage from './WelcomePage';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import QuizPage from './pages/Quiz';

import { useState } from 'react';
import IntroPage from './components/IntroPage';
// import QuizPage from './components/QuizPage';
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
    <>  
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
};

export default App;
