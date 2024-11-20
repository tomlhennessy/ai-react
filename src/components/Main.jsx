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
    <div className="relative flex flex-col gap-4 p-4 md:grid md:grid-cols-4">
      {/* Whale background image (only on larger screens) */}
      <img
        className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover opacity-5 pointer-events-none"
        src="./whale-outline.png"
        alt="whale"
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col gap-4 md:col-span-3">
        {showModal && <Modal handleCloseModal={handleCloseModal} />}
        <AboutMe handleOpenModal={handleOpenModal} />
        <Experience />
      </div>

      {/* Skills Section */}
      <Skills className="relative z-10" />
    </div>
  )
}
