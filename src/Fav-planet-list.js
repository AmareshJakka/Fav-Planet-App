import React from 'react';

function FavPlanetList(props) {
  console.log(props.favPlanets);
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
        {props.favPlanets.map(favplanet=>(
          <li key={favplanet.id}>
            <div className="userInfo">
                  <p>
                  {favplanet.name}
                  </p>
            </div>
          </li>
         ))}
      </ul>
    </div>
  );
}

export default FavPlanetList;