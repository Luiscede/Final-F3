import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/Utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const{ theme } = useContextGlobal();
  const { favs } = useContextGlobal();
  console.log(favs);


  return (
    <div className={`favs ${theme === 'light' ? 'light' : 'dark'}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map(fav => <Card dentista={fav} key={fav.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
