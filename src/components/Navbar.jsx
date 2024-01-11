import React from 'react'

const Navbar = () => {
  return (
    <header className="header">
        <h1>
            <span>
            <i className="ri-book-2-line" />
            </span>
            Viaje-CE
        </h1>
        <ul className="nav justify-content-center">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="">
                Home
            </a>
            </li>
            <li className="nav-item" >
            <a className="nav-link" href="">
                Viajantes
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="">
                Destinos
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="">
                Compras
            </a>
            </li>
        </ul>
    </header>


		
  )
}

export default Navbar