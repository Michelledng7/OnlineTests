import React, { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { fetchQuiz } from './API';
import { Difficulty, QuestionState } from './API';

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const TOTAL_QUESTIONS = 10;
	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY);
		setQuestions(newQuestions);
		console.log(questions);

		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[number].correct_answer === answer;
			console.log(answer);
			if (correct) setScore((pre) => pre + 1);
			const answerObject: AnswerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;
		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};
	console.log(questions);

	return (
		<div className='App'>
			<h1>Online Tests</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className='start' onClick={startTrivia}>
					Start
				</button>
			) : null}

			{!gameOver && <p className='score'>Score:{score}</p>}
			{loading ? <p>Loading Questions ...</p> : null}
			{!loading && !gameOver && (
				<QuestionCard
					questionNr={number + 1}
					totalQuestions={questions.length}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswers={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className='next' onClick={nextQuestion}>
					Next Questions
				</button>
			) : null}
		</div>
	);
};

export default App;
