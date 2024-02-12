import React from 'react'
import { Table, Tooltip, Progress, Tag } from 'antd';
import { domainOnly, APIDomain } from '../constants';
import { getFormattedDateTime } from '../utils';
import { Record, Stats } from '../@types/Quiz';
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import "../styles/profile.scss";
import StatHeader from '../components/quiz/StatHeader';
import { stat } from 'fs';
import QuizHistoryProgressCircle from '../components/quiz/QuizHistoryProgressCircle';

type Props = {}
const { Column, ColumnGroup } = Table;

function Profile({}: Props) {
  const data =  {
    "id": 1,
    "username": "darpan",
    "email": "darpankattel1@gmail.com",
    "first_name": "Darpan",
    "last_name": "Kattel",
    "last_login": "2024-02-11T16:12:40.418794Z",
    "date_joined": "2024-02-01T15:28:42.669751Z",
    "profile": {
        "image": "/media/profile_pics/darpan_new.jpg",
        "interested_in": [
            "Mathematics",
            "History",
            "Science"
        ]
    }
}
  const records: Record[] = [
    {
        "quiz": "Science - Question (1, 53)?",
        "result": "wrong",
        "xp": 0.25
    },
    {
        "quiz": "Science - What is the chemical symbol for water?",
        "result": "wrong",
        "xp": 1.0
    },
    {
        "quiz": "Science - What is the largest planet in our solar system?",
        "result": "right",
        "xp": 0.25
    }
]
const stats: Stats = {
  "user_total_xp": 1.5,
  "user_level": 0.75,
  "total_quizzes": 3,
  "total_right_quizzes": 1
}
const columns = [
  {
    title: 'Category/Quiz',
    dataIndex: 'quiz',
    key: 'quiz',
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
    render: (text: string) => {
      return <Tag color={text === 'right' ? 'green' : 'red'} style={{textTransform: 'capitalize'}}>{text}</Tag>
    }
  },
  {
    title: 'XP',
    dataIndex: 'xp',
    key: 'xp',
    render: (text: number, record: Record) => {
      return <p style={{textAlign: 'center'}}>{record.result === 'right' ? `+${text}` : "--"}</p>
    }
  }
]
  return (
    <div className='profile-container'>
      <StatHeader />
      <div className='profile-inner-container'>
        <div className='top-container'>
          <div className='profile'>
            <div className='profile-img'>
              <Tag color="#55acee" className='level-tag'>
                Level {Math.floor(stats.user_level)}
              </Tag>
              <Tooltip title={`Level ${stats.user_level}; Level is calculated from XP.`}>
                <Progress type='circle' style={{cursor: 'pointer'}} strokeColor={"#59c3e1"} percent={
                  (stats.user_level - Math.floor(stats.user_level)) * 100
                } format={() => 
                  <img src={`${domainOnly}${data.profile.image}`} alt={`${data.username}'s profile`} />
                } />
              </Tooltip>
            </div>
            <div className='profile-info'>
              <p className='profile-name'>{`${data.first_name} ${data.last_name}`}</p>
              <p className='profile-username'>@{data.username}</p>
            </div>
          </div>
          <QuizHistoryProgressCircle numerator={12} denominator={20} />
          <div className='profile-times'>
            <div className="last-login">
              <span className='icon'><IoIosLogIn /></span>
              <p className='text'>Last Login</p>
              <p className='content'>{getFormattedDateTime(data.last_login)}</p>
            </div>
            <div className="date-joined">
              <span className='icon'><FiUserPlus /></span>
              <p className='text'>Date Joined</p>
              <p className='content'>{getFormattedDateTime(data.date_joined)}</p>
            </div>
          </div>
        </div>
        <div className='other-container'>
          <h2 className='other-title'>Other Details</h2>
          <div className="other-container-inner">
            <div className='other-info'>
              <p className='title'>Email</p>
              <a href={`mailto:${data.email}`} className='content email'>{data.email}</a>
            </div>
            <div className='other-info'>
              <p className='title'>Interested In</p>
              <p className='content'>{data.profile.interested_in.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className='record-container'>
          <h2 className='record-title'>Records</h2>
          <Table dataSource={records} columns={columns} style={{width: '100%'}}
          bordered
          pagination={{}}

          />
        </div>
      </div>
    </div>
  )
}

export default Profile