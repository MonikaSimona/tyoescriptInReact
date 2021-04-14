import React from 'react'
import { ButtonWrapper } from './QuestionCard.styles'
import { AnswerObject } from '../App';
interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
// function QuestionCard:React.FC<Props> = ({question,answer,...destrucure all props})
function QuestionCard(props: Props) {
    const { question, answers, callback, userAnswer, questionNr, totalQuestions } = props

    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            {answers.map(answer => (
                <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}>
                    <button disabled={!!userAnswer} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    )
}

export default QuestionCard
