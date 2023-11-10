import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b-2">
      <nav className="container mx-auto flex items-center justify-between py-4 px-8">
        <div className="items-center">
          <h1 className="text-2xl font-bold ">DEFENSORIA PÚBLICA</h1>
          <p className="text-lg font-normal text-gray-600">Estado do Rio Grande do Sul</p>
        </div>
      </nav>
    </header>
  )
}
