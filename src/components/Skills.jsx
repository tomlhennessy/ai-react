import React from 'react'

export default function Skills() {
  const ski = {
    JavaScript: ['React', 'Node.js'],
    Python: ['Data Analysis'],
    Web: ['TailwindCSS', 'Firebase', 'Netlify', 'GIT']
  }

  return (
    <div className='shadow-xl p-4 bg-white rounded flex flex-col gap-4 md:gap-12'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl'>Info</h1>

        <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:translate-x-[-100%] hover:after:translate-x-0 after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>Email</h3>
          <a href='mailto:tomlhennessy@outlook.com' target='_blank' className='text-cyan-500'>tomlhennessy@outlook.com</a>
        </div>

        <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:translate-x-[-100%] hover:after:translate-x-0 after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>GitHub</h3>
          <a href='https://github.com/tomlhennessy' target='_blank'  className='text-cyan-500'>tomlhennessy</a>
        </div>

        <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:translate-x-[-100%] hover:after:translate-x-0 after:duration-300 overflow-hidden'>
          <h3 className='font-semibold'>LinkedIn</h3>
          <a href='https://www.linkedin.com/in/tomlhennessy96' target='_blank' className='text-cyan-500'>tomlhennessy96</a>
        </div>
      </div>

      <div>
        <h1 className='text-3xl'>Skills</h1>
        <div className='flex flex-col gap-3'>
          {Object.keys(ski).map((keyName, index) => {
            return (
              <div key={index}>
                <h3 className='text-lg'>{keyName}</h3>
                <div className='flex items-center gap-1 flex-wrap'>
                  {ski[keyName].map((skill, i) => {
                    return (
                      <div key={i} className='rounded bg-gradient-to-r from-blue-700 to-violet-700 text-white hover:opacity-70 px-4 py-1 text-xs'>
                        {skill}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl'>Just For Fun</h1>
        <div className='flex items-center flex-wrap text-lg p-4 gap-2'>
          <i className="fa-solid fa-rocket"></i>
          <i className="fa-solid fa-book"></i>
          <i className="fa-solid fa-mug-hot"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-ice-cream"></i>
        </div>
      </div>
    </div>
  )
}
