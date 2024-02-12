import React from 'react'
import QuizOption from '../components/quiz/QuizOption'
import "../styles/quiz.scss"
import { GrScorecard, GrNext } from "react-icons/gr";
import StatHeader from '../components/quiz/StatHeader';
import QuizHistoryProgressCircle from '../components/quiz/QuizHistoryProgressCircle';
import QuizResult from '../components/quiz/QuizResult';




type Props = {}
const options = ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur']

function Quiz({}: Props) {
  return (
    <>
    {/* <QuizResult /> */}
    <div className='quiz-container'>
      <StatHeader />
      <div className='quiz'>
        <QuizHistoryProgressCircle numerator={12} denominator={20} />
        <div className='question'>
          <p className='question-category'>Nepali</p>
          <p className='question-text'>What is the capital of Nepal?</p>
          <p className='quiz-level'>3</p>
        </div>
        <div className='options'>
          {options.map((option, index) => (
            <QuizOption key={index} index={index} option={option} />
          ))}
        </div>
        <div className='buttons'>
          <button className='button button-skip'>Skip</button>
          <button className='button button-submit'>Submit <GrNext className='icon' />
</button>
        </div>
      </div>
      <div className='footer-text'>
        <p>Please keep in mind that. when you submit or skip the quiz, your score will be saved, and that will be reflected in your profile.</p>
      </div>
    </div>
  </>
  )
}

export default Quiz