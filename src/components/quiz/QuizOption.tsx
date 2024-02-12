import React from 'react'

type Props = {
    option: string,
    index: number
}

function QuizOption({index, option}: Props) {
  return (
    <div className='option'>
        <button className='button'>
            <small>{index+1}.</small><p className='option-text'>{option}</p>
        </button>
    </div>
  )
}

export default QuizOption