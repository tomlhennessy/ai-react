import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'Royal Mail',
      position: 'Postman',
      description: [
        'Delivered mail efficiently while managing multiple routes in a fast-paced environment.',
        'Strengthened organizational and time-management skills by consistently meeting tight deadlines.',
        'Adapted to challenges quickly to ensure reliable and timely deliveries.'
      ]
    }, {
      company: '77WM',
      position: 'Digital Marketing Assistant',
      description: [
        'Enhanced the company website alongside the software developer, improving SEO rankings and driving measurable web traffic growth.',
        'Designed and executed engaging social media campaigns across LinkedIn, Instagram, YouTube, and Facebook.',
        'Created professional invitations and marketing materials aligned with company branding.',
        'Worked with senior leaders to translate ideas into actionable, high-quality marketing strategies.'
      ]
    }, {
      company: 'The Training Room',
      position: 'Sales',
      description: [
        'Built strong client relationships by understanding individual needs and tailoring solutions.',
        'Exceeded sales targets through effective communication and problem-solving.',
        'Thrived in a high-pressure, goal-driven environment, consistently delivering results.'
      ]
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {experiences.map((experience, index) => (
        <div className='flex flex-col gap-2' key={index}>
          <h1 className='text-lg font-bold uppercase'>{experience.company}</h1>
          <h2 className='text-sm font-medium pb-2'>{experience.position}</h2>
          <ul className='text-slate-500 list-disc pl-5'>
            {experience.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
