import Section from './Section'
import Heading from './Heading'
import Arrow from '../assets/svg/Arrow'
import { benefits } from '../constants'
import {GradientLight} from './design/Benefits'
import Clipath from '../assets/svg/ClipPath'

const Benefit = () => {
  return (
  <Section id="features">
    <div className='container relative z-2'>
        <Heading className="md:max-w-md lg:max-w-2xl" tittle="Chat smarter,Not Harder with Brainwave"/>
        <div className='flex flex-wrap gap-10 mb-10'>
        {benefits.map((item)=>(
            <div className='block h-full relative p-0.5 bg-no-repeat  bg-[lenght:100%_100%] md:max-w-[24rem]' style={{
              backgroundImage: `url("${item.backgroundUrl}")`,
            }} key={item.id}>
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.5rem] pointer-events-none'>
              <h5 className='h5 mb-5'>{item.title}</h5>
               <p className='body-2 mb-6 max-w-[20rem] text-n-3'> 
                 {item.text}
               </p>
               <div className='flex items-center mt-auto'>
                  <img src={item.iconUrl } width={48} height={48} alt={item.title}/>
                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                  <Arrow/>
                </div>
                {item.light && <GradientLight/>}
                <div className='absolute -z-2 inset-0.5 
                 bg-n-8' style={{clipPath: "url(#benefits)"}}>
                   <div className='absolute 
                     inset-0  opacity-10 transition-opacity hover:opacity-10'>
                      {item.imageUrl && (<img className='w-full h-full object-cover rounded-r-[4rem] rounded-l-[2rem]'  src={item.imageUrl} width={380} height={362} alt={item.title}/>)}
                   </div>
                </div>
                <Clipath />
               </div>
            </div> 
        ))}
        </div>
    </div>
  </Section>
  )
}

export default Benefit