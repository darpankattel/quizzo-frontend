import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Category, Level } from '../../@types/Quiz';
import BgForPop from './BgForPop'
import { Select } from 'antd';
import { QuizContext } from "../../context/QuizContext";
import { QuizContextType } from '../../@types/Quiz';

type Props = Category & {
    handleShowDescription: (id: number) => void,
    categories?: Category[],
    levels?: Level[]
}

const ReadyToPlay = ({name, icon, description, handleShowDescription}: Props) => {
  const {levels, categories} = useContext(QuizContext) as QuizContextType;
  return (
    <>
    <BgForPop handler={handleShowDescription}/>
    <div className='pop ready-to-play'>
        <div className='pop-inner'>
            <div className='pop-text'>
              <h3>Ready to play, </h3>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                defaultValue={categories[0].id}
              /><h3>?</h3>
            </div>
            <div className='level-select'>
              <p className='level'>Level: </p>
              <Select
                showSearch
                style={{ width: 150 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={levels.map((level) => ({
                  label: level.id ? `${level.id}. ${level.name}` : level.name,
                  value: level.id,
                }))}
                defaultValue={levels[0].id}
              />
            </div>
            <p className='quiz-description'>{categories.find(cat => cat.name === name)?.description}</p>
            <Link to="/quiz" className='button pop-button'>Play</Link>
        </div>
    </div>
    </>
  )
}

export default ReadyToPlay