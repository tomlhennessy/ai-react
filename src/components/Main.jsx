import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import Modal from './Modal'
import { useState } from 'react'

export default function Main() {
  const [showModal, setShowModal] = useState(false)
  function handleCloseModal() {
    setShowModal(false)
  }
  function handleOpenModal() {
    setShowModal(true)
  }

  return (
    <div className='p-4 flex flex-1 gap-4 flex-col md:grid md:grid-cols-4'>
      <div className='md:col-span-3 flex flex-col gap-4'>
        {showModal && <Modal handleCloseModal={handleCloseModal} />}
        <AboutMe handleOpenModal={handleOpenModal} />
        <Experience />
      </div>
      <Skills />
    </div>
  )
}
