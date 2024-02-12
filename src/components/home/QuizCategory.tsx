import React from 'react'
import { Category } from '../../@types/Quiz'
import { Link } from 'react-router-dom'

type Props = Category & {
  handleShowDescription: (id: number) => void
}

export default function QuizCategory({id, name, icon, handleShowDescription}: Props) {
  return (
    <div className='quiz-category' onClick={(e) => handleShowDescription(id)}>
        <p className='quiz-category__icon'>
            {icon}
        </p>
        <p className='quiz-category__title'>{name}</p>
    </div>
  )
}
