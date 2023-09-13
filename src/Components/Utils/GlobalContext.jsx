import axios from 'axios'
import {useContext, createContext, useState, useEffect, useReducer} from "react";


/* logic to theme change */

export const initialState = {theme: "light", data: []}

/*actions management */

const ThemeActionTypes = {
  toggleTheme: "toggleTheme",
};

const themeReducer = (state, action) => {
  
  switch (action.type) {
    case ThemeActionTypes.toggleTheme:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  const [dentistas, setDentistas] = useState([])
  const [favs, setFavs] = useState(initialFavState)
  const [state, dispatch] = useReducer(themeReducer, initialState);

  
  const urlDentists='https://jsonplaceholder.typicode.com/users';
  const fetchDentists = () => {
  axios (urlDentists)
  .then(res => {
      setDentistas(res.data)

  })
  .catch(err => console.log(err))
}

useEffect(fetchDentists, [])

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(favs))
},[favs])

const toggleTheme = () => {
  dispatch({ type: ThemeActionTypes.toggleTheme });
};

  return (
    <ContextGlobal.Provider value={{dentistas, favs, setFavs,theme: state.theme, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)