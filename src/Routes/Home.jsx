import React from 'react'
import { useContextGlobal } from '../Components/Utils/GlobalContext';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistas} = useContextGlobal();

  const { theme} = useContextGlobal();
  return (
    <main className={`main ${theme === 'light' ? 'light' : 'dark'}`} >
      <div className="titulo">
            <h1>HOME</h1>
            <h2>To see the details click on the card</h2>
      </div>
      <div className='card-grid'>
            {dentistas.map(dentista => (
                <Card key={dentista.id} dentista={dentista} />
      ))}
        
      </div>
    </main>
  )
}

export default Home