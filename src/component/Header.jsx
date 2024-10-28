
import {brainwave} from '../assets';
import { navigation }  from   '../constants/index'
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';
import MenuSvg from '../assets/svg/MenuSvg'
import {HambugerMenu} from './design/Header'
import  {disablePagecroll, enablePageScroll} from 'scroll-lock'
 const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState (false);
     const toggleNavigation =() =>{
    if (openNavigation){
        setOpenNavigation(false)
        enablePageScroll()
    }else{
        setOpenNavigation(true)
        disablePagecroll()
    }
     };
     const handClick =() =>{
        if(!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false) 
     }
  return ( <>
    <div className={` fixed top-0 right-0 left-0 lg:w-full z-50 bg-n-8/90  border-b border-n-6 lg:bg-n-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className='flex items-center lg:justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4 '>
        <a className='  block w-[12rem] xl:mr-8' href='#hero'>
            <img  src={brainwave} width={190} height={40} alt='Brainwave'/>
         </a>
          <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx auto lg:bg-transparent`}>
              <div className='relative lg:mr-11 lg:ml-11  z-2 flex flex-col items-center justify-center m-auto lg:py-0  lg:flex-row'>
              {navigation.map((item =>
                <a key={item.id} href={item.url}onClick={handClick} className={`  text-center  relative text-2xl  justify-center transition-colors hover:text-color-1 
                 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:flex lg:text-center justify-center lg:-mr-0.25 lg:text-xs 
                lg:font-semibold  lg:text-n-1/50 sm:text-n-1/100 ${item.url === pathname.hash ? ' z-2 lg:text-n-1 ': "lg:text-n-1/50"}lg:leading-5 lg:hover:text-n-1 xl:px-12` } >
                {item.title}
            </a>
             ))
             }
            </div>
              <HambugerMenu/>              
          </nav>
            <a href='#signup' className=' hidden button  :hidden mr-0 text-n-1/50 transition-colors hover:text-color-1 lg:block'>
              New accoount
            </a>
            <Button className='hidden lg:block'>
                Sign in
            </Button>

            <Button className="sm:block  lg:hidden ml-auto px-3" onClick={toggleNavigation}>
                 < MenuSvg openNavigation={openNavigation} />
            </Button>
        </div>
    </div>
  </> )
}
export default Header