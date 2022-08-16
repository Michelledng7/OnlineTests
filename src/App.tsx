import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';

const App = () =>{

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState ([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {
  }

  return (
    <div className="App">
     <h1>Online Tests</h1>
     <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={questions.length}
        question={questions[number].question}}
        answers = {questions[number].answers}
        userAnswers = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}/>
      <button className='next' onClick={nextQuestion}>Next Questions</button>
      
    </div>
  );
}

export default App;
