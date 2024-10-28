import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine, RightLine} from './design/Pricing'

const Pricing = () => {
  return (
    <Section className='overflow-hidden 'id='pricing'>
        <div className='container relative z-2'>
            <div className=' relative justify-center mb-[6.5rem] lg:flex'>
                <img src={smallSphere}className='relative z-1 ' width={225} height={225} alt='shere'/>
                <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2  '>
                     <img src={stars} className='full ' width={950} height={400} alt='starts'/>
                </div>
            </div>
            <Heading tag='Get started with Brainwave' tittle='pay once, use forever'/>
            <div className='relative'>
              <PricingList/>
              <LeftLine/>
              <RightLine/>
            </div>
            <div className='flex justify-center mt-10'>
               <a className='text-xs font-code font-bold tracking-wider uppercase border-b'  href='/pricing'>See the full details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing