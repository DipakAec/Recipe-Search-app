import React from 'react'
import MealItem from './MealItem'
import { useState ,useEffect} from 'react'
import Recipeindex from './Recipeindex'
import './style.css'

const Meal = () => {

  const [url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");

  const [item,setitem] = useState();

  const [show,setShow] = useState(false);

  const [search,setSearch] = useState("");

  useEffect(()=>{fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.meals);
    setitem(data.meals);
    setShow(true);
  })},[url])

 
  const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe=(evt)=>{
    if (evt.key === "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    
    <>
        <div className="main">
            <div className="heading">
                <h1>Search your Food Recipe</h1>
            </div>

            <div className="searchBox">
                <input type="search" className="search-bar"
                onClick={e=>setSearch(e.target.value)}  onKeyPress={searchRecipe}
                />
            </div>

            <div className="container">
              {
                show ? <MealItem data={item}/> : "Not Found"
              }
            </div>

            <div className="indexContainer">
              <Recipeindex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    </>
  )
}

export default Meal