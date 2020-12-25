
import './App.css';
import React, {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlanetList from './Planet-list';
import FavPlanetList from'./Fav-planet-list';
import axios from'axios'

function App() {
  const [selectedTab,setSelectedTab]=React.useState(0)
  const handleTabs = (e,val)=>{
    console.warn(val);
    setSelectedTab(val)
  }

  const [planets, setPlanets] = useState([]);


  useEffect(() => {

  const apiUrl = 'https://assignment-machstatz.herokuapp.com/planet';
  axios.get(apiUrl).then(res=>{
    console.log(res.data);
    setPlanets(res.data);
  })
  },[]);

  const [favPlanets, setFavPlanets] = useState([]);
  

  const addFavorite = favorite => {
    
    console.log(favPlanets);
    if (favorite.isFavourite === false && !favPlanets.includes(favorite) ) {
      
      
      setFavPlanets(favPlanets.concat(favorite))
    }
  };
  return (
    <div >
      
      <AppBar >
        <Tabs value={selectedTab} onChange={handleTabs}>
          <Tab label="Planets" />

          <Tab label="Fav-Planets"/>
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <PlanetList planets={planets} addFavorite={addFavorite}/>}
      {selectedTab === 1 && <FavPlanetList favPlanets={favPlanets}/>}
    </div>
  );
}

export default App;
