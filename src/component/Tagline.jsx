import React from 'react'
import brackets from '../assets/svg/Brackets'

export const Tagline = ({className, children}) => {
  return (
    <div className={`tagline flex item-center ${className || ""}`}>
        {brackets ("left")}
        <div className='mx-3-'>{children}</div>
        {brackets ("right")}
    </div>
  )
}
