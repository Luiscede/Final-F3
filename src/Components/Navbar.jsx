import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./Utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContextGlobal();
      const titulos=[
          {titulo:'Home', router: '/'},
          {titulo:'Contact', router: '/contact'},
          {titulo:'Favs', router: '/Favs'},
]

  return (
    <nav className={`navbar ${theme === 'light' ? 'light' : 'dark'}`}>
      {titulos.map((titulo, index) => (
      <Link key={index} to= {titulo.router}>
        {titulo.titulo}
        </Link>))}

      <button className='buttomTheme' onClick={toggleTheme}>Change Theme😎🌚</button>
    </nav>
  )
}

export default Navbar