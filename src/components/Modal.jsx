import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  const { handleCloseModal } = props
  const projects = [
    {
      name: 'Caffeind - Your Personal Caffeine Tracker',
      link: 'https://caffeind-track-your-coffee.netlify.app',
      desc: 'Caffeind is a caffeine tracking app that allows users to log their daily coffee intake, monitor the associated costs, and gain insights into their consumption habits. A full-stack application built with React, Node.js, and Firebase, featuring secure user authentication and scalable backend functionality.',
      github: 'https://github.com/tomlhennessy/caffeind'
    }, {
      name: 'Pokedex - Explore the World of Pokémon',
      link: 'https://toms-pokedex.netlify.app',
      desc: 'This interactive Pokedex showcases all 151 original Pokémon by fetching real-time data from the PokéAPI. Built with React and Node.js, demonstrating optimised API performance and dynamic, real-time data handling.',
      github: 'https://github.com/tomlhennessy/pokedex'
    }, {
      name: 'Minimalist Modern E-Commerce App',
      link: 'https://e-store-rj5usbl6u-toms-projects-6ad889a2.vercel.app/#',
      desc: 'A fully responsive e-commerce web app where users can browse a dynamic product catalog, manage their cart, and securely checkout via Stripe. Built with Next.js and TailwindCSS, this project highlights dynamic state management, server-side rendering for performance, and seamless API integration.',
      github: 'https://github.com/tomlhennessy/e-store'
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
