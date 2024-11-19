import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal() {
  return ReactDOM.createPortal(
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80%] md:h-[80%] w-full height-full shadow text-white bg-slate-900 z-20 flex flex-col p-4'>
        <div className='flex text-lg justify-between items-center'>
            <h2>Projects</h2>
            <i className="fa-solid fa-xmark text-white hover:rotate-[30deg]"></i>
        </div>
    </div>,
    document.getElementById('portal')
  )
}
