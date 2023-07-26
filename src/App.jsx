import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomePage from './WelcomePage';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import QuizPage from './pages/Quiz';
import { Auth0Provider } from '@auth0/auth0-react';

import { useState } from 'react';
import IntroPage from './components/IntroPage';
import Courses from './pages/Courses';
import LandingPage from './pages/LandingPage';
// import QuizPage from './components/QuizPage';
// import { questions } from '../data/questions';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const domain = 'dev-7qp35j7ak5xlfvvp.us.auth0.com';
  const clientId = 'MUfr3mIXASFwRS3whXHawwaLjf7IwOM2';

  const startQuiz = () => {
    setQuizStarted(true);
  };
  const endQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <>  
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      </Auth0Provider>
    </>
  );
};

export default App;
