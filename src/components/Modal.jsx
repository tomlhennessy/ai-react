import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  const { handleCloseModal } = props
  const projects = [
    {
      name: 'Caffeind - Your Personal Caffeine Tracker',
      link: 'https://caffeind-track-your-coffee.netlify.app',
      description: 'Caffeind is a caffeine tracking app that allows users to log their daily coffee intake, monitor the associated costs, and gain insights into their consumption habits. Built with a focus on user experience and functionality, it demonstrates practical use of data storage, user interaction design, and cost-tracking logic.',
      github: 'https://github.com/tomlhennessy/caffeind'
    }, {
      name: 'Pokedex - Explore the World of Pokémon',
      link: 'https://toms-pokedex.netlify.app',
      description: 'This interactive Pokedex showcases all 151 original Pokémon by fetching real-time data from the PokéAPI. The project highlights dynamic data handling, responsive design, and API integration, providing users with an engaging and informative experience.',
      github: 'https://github.com/tomlhennessy/pokedex'
    }, {
      name: 'To-Do List - Simple Task Management',
      link: 'https://toms-todo-list.netlify.app',
      description: 'A minimalist to-do list application designed for task tracking and productivity. Users can add, remove, and mark tasks as completed in a clean and intuitive interface. This project emphasizes CRUD functionality, state management, and responsive front-end development.',
      github: 'https://github.com/tomlhennessy/todo-list'
    }
  ]

  return ReactDOM.createPortal(
    <div className='absolute top-0 left-0 w-screen height-screen shadow text-white bg-slate-900 overflow-scroll z-20 flex flex-col gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]'>
        <div className='flex text-xl p-4 justify-between items-center'>
            <h2>Projects</h2>
            <i  onClick={handleCloseModal} className="fa-solid fa-xmark cursor-pointer text-white hover:rotate-[30deg]"></i>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-1 bg-white flex-wrap md:p-4'>
          {projects.map((project, index) => {
            return (
              <div key={index} className='w-full md:w-auto md:h=[200px] aspect-video'></div>
            )
          })}
        </div>
    </div>,
    document.getElementById('portal')
  )
}
