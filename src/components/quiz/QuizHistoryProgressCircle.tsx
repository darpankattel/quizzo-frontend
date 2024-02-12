import React from 'react'

type Props = {
    numerator: number;
    denominator: number;
}

function QuizHistoryProgressCircle({numerator, denominator}: Props) {
  return (
    <div className='progress-bar'>
        <p className='score-card'>{numerator}<small>{denominator}</small></p>
    </div>
  )
}

export default QuizHistoryProgressCircle