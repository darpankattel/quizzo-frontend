import { Tooltip } from 'antd';
import React from 'react';
import { SiPremierleague } from "react-icons/si";

type Props = {}

const StatHeader = (props: Props) => {
  return (
    <div className='stat-container'>
        <div className='left'>
            <p className='league'><SiPremierleague /></p>
            <p className='profile-name'>Darpan Kattel</p>
            <Tooltip title={`XP 10; XP is the measure of your experience.`}>
              <p className='profile-xp' style={{cursor: 'pointer'}}>10</p>
            </Tooltip>
        </div>
    </div>
  )
}

export default StatHeader