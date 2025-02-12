import ReactDOM from 'react-dom'

export default function Modal(props) {
  const { handleCloseModal } = props
  const projects = [
    {
      name: 'To-do List App',
      link: 'https://todo-app-kded.onrender.com',
      desc: 'A full-stack task management application built with Node.js, Express, and PostgreSQL, containerised using Docker. Implements secure authentication (JWT), API integrations, and database optimisation. Designed to handle structured data efficiently, improving scalability and performance monitoring through CI/CD pipelines.',
      github: 'https://github.com/tomlhennessy/todoApp'
    }, {
      name: 'Broodl - Your Daily Mood Tracker',
      link: 'https://broodl-mood-tracker.netlify.app/',
      desc: 'A data-driven mood tracking app built with Next.js and Firebase, featuring interactive dashboards that provide insights into emotional patterns. Uses real-time database synchronisation and Firebase Authentication to ensure secure, personalised user experiences. Designed with a scalable, responsive UI for seamless cross-device accessibility.',
      github: 'https://github.com/tomlhennessy/broodl'
    }, {
      name: 'Caffeind - Caffeine Tracking App ',
      link: 'https://caffeind-track-your-coffee.netlify.app/',
      desc: 'A full-stack caffeine tracking app designed to help users log and analyze their caffeine consumption over time. Built with React, Firebase, and SQL, it features secure authentication, structured data management, and real-time tracking of trends and spending habits. Optimized database queries ensure fast retrieval of user insights, improving scalability and system performance.',
      github: 'https://github.com/tomlhennessy/caffeind'
    }
  ]

  return ReactDOM.createPortal(
    <div className='absolute top-0 left-0 w-screen height-screen shadow text-white bg-slate-900 overflow-scroll z-20 flex flex-col gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]'>
        <div className='flex text-xl p-4 justify-between items-center'>
            <h2>Projects</h2>
            <i  onClick={handleCloseModal} className="fa-solid fa-xmark cursor-pointer text-white hover:rotate-[30deg]"></i>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1 bg-white flex-wrap md:p-1'>
          {projects.map((project, index) => {
            return (
              <div key={index} className='w-full md:w-auto md:h=[200px] aspect-video bg-slate-900 text-white flex flex-col gap-2 p-2'>
                <h1>{project.name}</h1>
                <p className='text-xs flex-1'>{project.desc}</p>
                <div className='grid text-center grid-cols-2'>
                  <a href={project.link} target="_blank" rel='noopener noreferrer' className='hover:text-blue-500 hover:underline transition duration-300'>
                    Live
                  </a>
                  <a href={project.github} target="_blank" rel='noopener noreferrer'  className='hover:text-green-500 hover:underline transition duration-300'>
                    GitHub
                  </a>
                </div>
              </div>
            )
          })}
        </div>
    </div>,
    document.getElementById('portal')
  )
}
