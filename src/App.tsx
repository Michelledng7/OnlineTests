import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { fetchQuiz } from './API';
import { Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () =>{

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState ([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const TOTAL_QUESTIONS = 10;
  const startTrivia = async () => {
      setLoading(true)
      setGameOver(false)
      const newQuestions = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY)
      setQuestions(newQuestions)
      console.log(questions)

      setScore(0)
      setLoading(false)
      setUserAnswers([])
      setNumber(0)
 }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {
  }

  console.log(fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY));


  return (
    <div className="App">
     <h1>Online Tests</h1>
     {gameOver || userAnswers.length === TOTAL_QUESTIONS ? ( 
      <button className='start' onClick={startTrivia}>Start</button>): null}
     
      {!gameOver && <p className='score'>Score:</p>}
      {loading ? <p>Loading Questions ...</p> : null}
      {/* {!loading && !gameOver && (
      // <QuestionCard
      //   questionNr={number + 1}
      //   totalQuestions={questions.length}
      //   question={questions[number].question}
      //   answers = {questions[number].answers}
      //   userAnswers = {userAnswers ? userAnswers[number] : undefined}
      //   callback = {checkAnswer}
      //   />
        )} */}

      <button className='next' onClick={nextQuestion}>Next Questions</button>
      
    </div>
  );
}

export default App;
