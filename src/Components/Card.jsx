import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./Utils/GlobalContext";




const Card = ({dentista}) => {

  const {favs, setFavs} = useContextGlobal();
  console.log(useContextGlobal)
  
  const addFav = ()=>{

    setFavs((favs) => [...favs, dentista])
  }
  // const removeFav = (id) => {
  

  
  return (
    <div className="card">
        
        
        <Link to={'/detail/' + dentista.id} className="link">
          <div>
            <img src="images\docImg.jpg" alt="er doc"  className="cardImg"/>
          </div>
          <h3>{dentista.name}</h3>
          <h4>{dentista.id}</h4>
          <h4>{dentista.username}</h4>
        </Link>

        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
