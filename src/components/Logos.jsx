import { logos } from '../data/logos'


const Logos = () => {
    return (
        <div className='mt-8 h-32 overflow-hidden relative w-full flex items-center py-0 px-5 before:content-[""] after:content-[""] before:absolute after:absolute
      before:h-[130px] after:h-[130px] before:w-[150px] after:w-[150px] before:z-[2] after:z-[2] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180'>
            <div className='flex w-[150px * 15] animate-scroll'>
                {
                    logos.map(logo => (
                        <div className='w-[150px]'>
                            <img src={logo.src} alt={`${logo.name} logo`} className="h-[90px]" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
  
export default Logos;