import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./Utils/GlobalContext";




const Card = ({dentista}) => {

  const {favs, setFavs} = useContextGlobal();
  console.log(useContextGlobal)
  
  const addFav = ()=>{

    setFavs((favs) => [...favs, dentista])
  }

  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <Link to={'/detail/' + dentista.id} className="link">
          <div>
            <img src="images\docImg.jpg" alt="er doc"  className="cardImg"/>
          </div>
          <h3>{dentista.name}</h3>
          <h4>{dentista.id}</h4>
          <h4>{dentista.username}</h4>
        </Link>

        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
