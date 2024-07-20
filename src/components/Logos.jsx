import reactLogo from '../assets/react.svg'
import vueLogo from '../assets/vue.svg'
import tsLogo from '../assets/typescript.svg'
import tailwindLogo from '../assets/tailwind.svg'
import bootstrapLogo from '../assets/bootstrap.svg'
import laravelLogo from '../assets/laravel.svg'
import htmlLogo from '../assets/html.svg'
import cssLogo from '../assets/css.svg'
import jsLogo from '../assets/javascript.svg'
import alpineLogo from '../assets/alpinejs.svg'


const Logos = () => {
    return (
      <div className='mt-8 h-32 overflow-hidden relative w-full flex items-center py-0 px-5 before:content-[""] after:content-[""] before:absolute after:absolute
      before:h-[130px] after:h-[130px] before:w-[150px] after:w-[150px] before:z-[2] after:z-[2] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180'>
        <div className='flex w-[150px * 10] animate-scroll'>
            <div className='w-[150px]'>
                <img src={reactLogo} alt="react logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={vueLogo} alt="vue logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={tsLogo} alt="typescript logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={tailwindLogo} alt="tailwind logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={bootstrapLogo} alt="bootstrap logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={laravelLogo} alt="laravel logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={htmlLogo} alt="html logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={cssLogo} alt="css logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={jsLogo} alt="javascript logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src={alpineLogo} alt="alpine.js logo" className="h-[90px]" />
            </div>
        </div>
      </div>
    )
  }
  
  export default Logos;