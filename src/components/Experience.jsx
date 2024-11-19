import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'Royal Mail',
      position: 'Postman',
      description: 'Organisation + efficiency'
    }, {
      company: '77WM',
      position: 'Digital Marketing Assistant',
      description: 'design + teamwork'
    }, {
      company: 'The Training Room',
      position: 'Sales',
      description: 'communication'
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap 4'>
      {experiences.map((experience, index) => {
        return (
          <div className='flex flex-col gap-1' key={index}>
            <h1 className='text-lg font-bold uppercase'>{experience.company}</h1>
            <h2 className='text-sm font-medium pb-2'>{experience.position}</h2>
            <p className='text-slate-500'>{experience.description}</p>
          </div>
        )
      })}
    </div>
  )
}
