import React, { useEffect } from 'react'

type Props = {
    handler: (id: number) => void
}

const BgForPop = ({handler}: Props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
          document.body.style.overflow = 'auto'
        }
      })
  return (
    <div className='pop-bg' onClick={() => handler(0)}></div>
  )
}

export default BgForPop