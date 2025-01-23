

export default function Experience() {
  const experiences = [
    {
      company: 'Royal Mail',
      position: 'Postman',
      description: [
        'Applied organisational and time-management skills to consistently meet tight deadlines in a high-pressure environment.'
      ]
    }, {
      company: '77WM',
      position: 'Digital Marketing Assistant',
      description: [
        'Collaborated with a software developer to enhance website performance, improving SEO rankings and increasing web traffic',
        'Designed and implemented engaging digital campaigns using data-driven insights, aligning with company objectives.',
        'Worked with senior leaders to translate ideas into actionable, high-quality marketing strategies.'
      ]
    }, {
      company: 'The Training Room',
      position: 'Sales',
      description: [
        'Built client relationships by analysing individual needs and tailoring solutions',
        'Excelled in a goal-driven environment, applying time management and prioritisation skills to consistently deliver results.'
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
