import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'Company 1',
      position: 'Manager',
      description: 'List of things that I did at the job.'
    }, {
      company: 'Company 2',
      position: 'Manager',
      description: 'List of things that I did at the job.'
    }, {
      company: 'Company 3',
      position: 'Manager',
      description: 'List of things that I did at the job.'
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
