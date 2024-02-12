import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";



type Props = {}

const QuizResult = (props: Props) => {
    const result = {
        "id": 585,
        "correct_index": 0,
        "correct_option": "Opt 1",
        "is_correct": false
    };
  return (
    <div className='quiz-result-container'>
        <div className='quiz-result'>
            <div className={result.is_correct ? 'quiz ans-right' : 'quiz ans-wrong'}>
                <div className='icon'>
                    {result.is_correct ? 
                    <FaCheckCircle color='#66bf97' />
                    :
                    <FaCircleXmark color='#E74C3C' style={{opacity: 0}} />
                    }
                </div>
                <div className='title'>
                    <p>Your answer is {result.is_correct ? 'right' : 'wrong'}!</p>
                    {result.is_correct && 
                    <span className='xp-addition'>+0.5 XP</span> }
                </div>
                <div className='bottom'>
                    {!result.is_correct && 
                    <p className='correct-anwer'>The correct answer is <strong>{result.correct_option}</strong>.</p>
                    }
                    <div className='buttons-container'>
                        <button className='button button-focus'>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuizResult