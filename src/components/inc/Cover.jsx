import React from 'react'
import cover from '../../assets/img/students.svg'

export const Cover = () => {
  return (
    <section className="pt-32 pb-16 px-8 md:px-12 min-h-screen bg-i-teal">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:mr-6">
            <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
              L'École de l'entrepreneur de demain
            </h1>
            <p className="mt-4 text-lg text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis aspernatur magni vitae veritatis.
            </p>
          </div>
          <div className="md:flex-1">
            <img
              src={cover}
              alt="Student on classroom"
            />
          </div>
        </div>
      </section>
  )
}
