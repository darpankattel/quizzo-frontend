import React, {useState, useEffect} from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import { Outlet, useLocation } from 'react-router-dom'

type Props = {}

const AppLayout = (props: Props) => {
  const [bg, setBg] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setBg(true)
    } else {
      setBg(false)
    }
  }, [location, bg])

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname === '/quiz') {
      setShowFooter(false)
    } else {
      setShowFooter(true)
    }
  }, [location, showFooter])
  return (
    <>
    <div id="app" className={bg ? "bg" : ""}>
      <Navbar />
      <Outlet />
      <Footer show={showFooter} />
    </div>
    </>
  )
}

export default AppLayout