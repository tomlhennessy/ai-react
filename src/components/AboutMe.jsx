import React from 'react'

export default function AboutMe(props) {
  const { handleOpenModal } = props

  return (
    <div className='flex flex-col md:grid md:grid-cols-2'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center'>
            <h1 className='font-bold text-4xl sm:text-6xl'>Tom Hennessy</h1>
            <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg' src='https://media.licdn.com/dms/image/v2/D4E03AQFXNylXUxQfGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731983470996?e=1737590400&v=beta&t=hHafkOWBsy3b1jWesWkgNidVQ39siEyQL6o9m6qXq04' alt='me' />
        </div>
        <h2 className='font-medium text-lg text-slate-800 sm:text-2xl'>Software Engineer</h2>
        <p className='text-slate-500'>I specialize in creating efficient, scalable, and user-friendly web applications using modern tools like React, Node.js, and TailwindCSS. I enjoy solving problems and collaborating in fast-paced environments to create meaningful results.</p>

        <div className='my-10 flex items-center gap-4 text-sm sm:text-base'>
          <button onClick={handleOpenModal} className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 text-white hover:opacity-70 px-4 py-2'>projects</button>
          <a href='mailto:tomlhennessy@outlook.com' className='rounded-full text-purple-800 border-solid border-violet-800 hover:opacity-70 px-4 py-2'>contact</a>
        </div>

      </div>
      <img className='mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg' src='https://media.licdn.com/dms/image/v2/D4E03AQFXNylXUxQfGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731983470996?e=1737590400&v=beta&t=hHafkOWBsy3b1jWesWkgNidVQ39siEyQL6o9m6qXq04' alt='me' />
    </div>
  )
}
