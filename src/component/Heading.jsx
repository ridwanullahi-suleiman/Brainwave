import React from 'react'
import { Tagline } from './Tagline'

const Heading = ({clasName, tittle,text,tag}) => {
  return (
    <div className={`${clasName} max-w-[50rem mx-auto mb-12 lg:mb-20 md:text-center ]`}>
      {tag && <Tagline className='mb-4 md:justify-center'>{tag}</Tagline>}
        {tittle && <h2 className='h2'>{tittle}</h2>}
        {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  )
}


export default Heading