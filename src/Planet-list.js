
import React  from 'react';

function PlanetList(props) {
  
  console.log(props.planets);
   let style = {
    display: "grid",
    marginLeft:"25px" ,
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    padding: "1rem",
    gridGap: "1rem 1rem"
  }

  return (
    <div >
      <ul style={style}>
        {props.planets.map(planet=>(
          <li key={planet.id}>
            <div className="userInfo">
                  <p>
                  {planet.name}
                  </p>
            </div>
             <button onClick={() => props.addFavorite(planet)}>
                  Add to Favorites
            </button>
          </li>
         ))}
      </ul>
    </div>
  );
}

export default PlanetList;