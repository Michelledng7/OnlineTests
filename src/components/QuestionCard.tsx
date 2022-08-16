import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswers: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswers,
    questionNr, 
    totalQuestions
}) => {
  return (
    <div>
        <p className = 'number'>
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}/>
        <div>
            {answers.map(answer => {
                return (
                    <div>
                        <button disabled={userAnswers} onClick = {callback}>
                            <span dangerouslySetInnerHTML={ { __html: answer } } />
                        </button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default QuestionCard