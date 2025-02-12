

export default function Experience() {
  const experiences = [
    {
      company: 'Project Building (Self-Initiated)',
      position: 'Full Stack Developer',
      description: [
        'Troubleshot and optimised web applications, enhancing performance and user experience.',
        'Developed and maintained API integrations to connect applications, improving efficiency and data flow.',
        'Optimised SQL queries for faster data retrieval and reporting.',
        'Built and maintained SaaS applications, implementing performance monitoring best practices.'
      ]
    }, {
      company: 'SeventySeven Wealth Management',
      position: 'Digital Marketing Assistant',
      description: [
        'Collaborated with developers to enhance website functionality, leading to improved SEO rankings and user engagement.',
        'Designed and implemented data-driven digital campaigns, aligning with business goals.',
        'Worked with leadership to translate ideas into actionable marketing strategies.'
      ]
    }, {
      company: 'The Training Room',
      position: 'Sales & Client Support',
      description: [
        'Established client relationships through needs analysis, delivering tailored solutions.',
        'Achieved results in a goal-driven environment, utilising time management and prioritisation skills.'
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
