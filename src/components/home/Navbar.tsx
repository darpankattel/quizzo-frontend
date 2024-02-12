import React from 'react'
import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import "../../styles/navbar.scss"

type Props = {}

function Navbar({}: Props) {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link to="/profile" className='button dropdown-button'>
          View Profile
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to="/profile/edit"  className='button dropdown-button'>
          Edit Profile
        </Link>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <button className='button dropdown-button button-logout'>
          Log out
        </button>
      ),
      key: '3',
      danger: true
    },
  ];
  return (
    <nav className='home-nav'>
        <Link to="/" className='logo'>
            <img src="/static/logo/logo-full.png" alt="Quizzo Logo" />
        </Link>
        <div className='buttons'>
            <Link to="/login" className='button button-primary'>Login</Link>
            <Dropdown menu={{ items }} overlayClassName='antd-dropdown-custom' trigger={['hover', 'click']}>
              <button className='button button-profile'>
                  <img src="/static/images/user.jpg" alt="Profile" />
              </button>
            </Dropdown>
        </div>
    </nav>
  )
}

export default Navbar