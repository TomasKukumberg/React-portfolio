const Logos = () => {
    return (
      <div className='mt-8 h-32 overflow-hidden relative w-full flex items-center py-0 px-5 before:content-[""] after:content-[""] before:absolute after:absolute
      before:h-[130px] after:h-[130px] before:w-[150px] after:w-[150px] before:z-[2] after:z-[2] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180'>
        <div className='flex w-[150px * 10] animate-scroll'>
            <div className='w-[150px]'>
                <img src="/src/assets/react.svg" alt="react logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/vue.svg" alt="vue logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/typescript.svg" alt="typescript logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/tailwind.svg" alt="tailwind logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/bootstrap.svg" alt="bootstrap logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/laravel.svg" alt="laravel logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/html.svg" alt="html logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/css.svg" alt="css logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/javascript.svg" alt="javascript logo" className="h-[90px]" />
            </div>
            <div className='w-[150px]'>
                <img src="/src/assets/alpinejs.svg" alt="alpine.js logo" className="h-[90px]" />
            </div>
        </div>
      </div>
    )
  }
  
  export default Logos;