import { background } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};


export const HambugerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};


// import {brainwave} from '../assets';
// import { navigation }  from   '../constants/index'
// import { useLocation } from 'react-router-dom';
// import Button from './Button';
// import { useState } from 'react';
// import MenuSvg from '../assets/svg/MenuSvg'
// import {HambugerMenu} from './design/Header'
// import  {disablePagecroll, enablePageScroll} from 'scroll-lock'
//  const Header = () => {
//     const pathname = useLocation();
//     const [openNavigation, setOpenNavigation] = useState (false);
//      const toggleNavigation =() =>{
//     if (openNavigation){
//         setOpenNavigation(false)
//         enablePageScroll()
//     }else{
//         setOpenNavigation(true)
//         disablePagecroll()
//     }
//      };
//      const handClick =() =>{
//         if(!openNavigation) return
//         enablePageScroll()
//         setOpenNavigation(false) 
//      }
//   return ( <>
//     <div className={` fixed top-0 right-0 left-0 lg:w-full z-50 bg-n-8/90  border-b border-n-6 lg:bg-n-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
//         <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 '>
//         <a className='  block w-[12rem] xl:mr-8' href='#hero'>
//             <img  src={brainwave} width={190} height={40} alt='Brainwave'/>
//          </a>
//           <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx auto lg:bg-transparent`}>
//               <div className='relative lg:mr-11 lg:ml-11  z-2 flex flex-col items-center justify-center m-auto lg:py-0  lg:flex-row'>
//               {navigation.map((item =>
//                 <a key={item.id} href={item.url}onClick={handClick} className={`  text-center  relative text-2xl  justify-center transition-colors hover:text-color-1 
//                  ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:flex lg:text-center justify-center lg:-mr-0.25 lg:text-xs 
//                 lg:font-semibold  lg:text-n-1/50 sm:text-n-1/100 ${item.url === pathname.hash ? ' z-2 lg:text-n-1 ': "lg:text-n-1/50"}lg:leading-5 lg:hover:text-n-1 xl:px-12` } >
//                 {item.title}
//             </a>
//              ))
//              }
//             </div>
//               <HambugerMenu/>              
//           </nav>
//             <a href='#signup' className='button hidden mr-8 text-n-1/50 transition-colors hover:text-color-1 lg:block'>
//               New accoount
//             </a>
//             <Button>
//                 Sign in
//             </Button>

//             <Button className="sm:block  lg:hidden ml-auto px-3" onClick={toggleNavigation}>
//                  < MenuSvg openNavigation={openNavigation} />
//             </Button>
//         </div>
//     </div>
//   </> )
// }
// export default Header


// import ButtonSvg from '../assets/./svg/ButtonSvg'

//  const Button = ({className, href, onClick, children, px, white }) => {
//     const classes  = `hidden lg:flex <lg:left-0></lg:left-0> mt-0 button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7' } ${white ? 'text-n-8':'text-n-1'} ${className || ''}  ' `
//     const spanClasses =  " relative z-10"
//  const renderButton = () => (
//     <button className={classes} onClick={onClick} >
//         <span className={spanClasses}>{children}</span>
//         {ButtonSvg(white)}
//     </button>
//  )
//  const renderLink = () =>{
//      <a href='href' className={classes}>
//          <span className={spanClasses}>{children}</span>
//          {ButtonSvg(white)}
//      </a>
//  }
//   return href 
//   ?  renderLink()
//   : renderButton()
// }
// export default Button