import React from 'react';
import { AnswerObject } from '../App';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswers: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswers,
	questionNr,
	totalQuestions,
}) => {
	return (
		<div>
			<p className='number'>
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{answers.map((answer) => {
					return (
						<div key={answer}>
							<button
								disabled={userAnswers ? true : false}
								onClick={callback}
								value={answer}
							>
								<span dangerouslySetInnerHTML={{ __html: answer }} />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionCard;
