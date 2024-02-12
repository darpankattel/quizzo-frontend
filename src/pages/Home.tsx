import React from 'react'
import Header from '../components/home/Header';
import QuizCategories from '../components/home/QuizCategories';
import '../styles/home.scss'

type Props = {}

function Home({}: Props) {
  return (
    <div className='home'>
      <Header />
      <QuizCategories />
    </div>
  )
}

export default Home